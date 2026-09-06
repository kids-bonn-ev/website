<?php

/**
 * Legt Medien und alle Seiten aus den Theme-Patterns an (idempotent).
 * Ausführen mit: ddev exec php scripts/seed-pages.php
 *
 * - Lädt die Haus-Fotos und Sponsoren-Logos aus app/src/assets in die
 *   Mediathek (übersprungen, wenn der Slug schon existiert).
 * - Erstellt/aktualisiert die 8 Seiten mit dem Inhalt der kids/page-*-Patterns.
 * - Setzt Permalinks auf /%postname%/ und die Startseite als Front-Page.
 */

require __DIR__ . '/../htdocs/wp-load.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once ABSPATH . 'wp-admin/includes/media.php';

/*
 * Ohne angemeldeten Benutzer greift KSES (kein `unfiltered_html`) und zerlegt
 * die Block-Kommentare: `<!-- wp:… -->` wird zu `&lt;!-- wp:… --&gt;`, sobald
 * die Attribut-JSON HTML enthält. Für einen Import muss KSES deshalb aus.
 */
kses_remove_filters();

$assets = dirname(__DIR__) . '/app/src/assets';

$media = [
    ['file' => "$assets/haus-1.jpeg", 'slug' => 'haus-1', 'alt' => 'Außenansicht unseres Neubaus in Bonn-Beuel'],
    ['file' => "$assets/haus-2.jpeg", 'slug' => 'haus-2', 'alt' => 'Blick in den Garten mit Spielbereich'],
    ['file' => "$assets/haus-3.jpeg", 'slug' => 'haus-3', 'alt' => 'Innenansicht mit Gruppenraum und Spielmaterialien'],
    ['file' => "$assets/sponsoren/anne-servos.jpg", 'slug' => 'anne-servos', 'alt' => 'Logo Anne Servos'],
    ['file' => "$assets/sponsoren/beueler-buchladen.jpg", 'slug' => 'beueler-buchladen', 'alt' => 'Logo Beueler Buchladen'],
    ['file' => "$assets/sponsoren/bindungsaspekte.jpg", 'slug' => 'bindungsaspekte', 'alt' => 'Logo Bindungsaspekte'],
    ['file' => "$assets/sponsoren/buggyfit.jpg", 'slug' => 'buggyfit', 'alt' => 'Logo buggyFit'],
    ['file' => "$assets/sponsoren/koerperzimmer.jpg", 'slug' => 'koerperzimmer', 'alt' => 'Logo Körperzimmer'],
    ['file' => "$assets/sponsoren/limas.jpg", 'slug' => 'limas', 'alt' => "Logo LiMa's Fairpackte Welt"],
    ['file' => "$assets/sponsoren/miss-minz.jpg", 'slug' => 'miss-minz', 'alt' => 'Logo Miss Minz'],
    ['file' => "$assets/sponsoren/musikschule-metronom.jpg", 'slug' => 'musikschule-metronom', 'alt' => 'Logo Musikschule Metronom'],
    ['file' => "$assets/sponsoren/zartmint.jpg", 'slug' => 'zartmint', 'alt' => 'Logo zartmint'],
];

foreach ($media as $item) {
    if (kids_attachment_id($item['slug'])) {
        echo "Medien: {$item['slug']} existiert bereits\n";
        continue;
    }
    if (!file_exists($item['file'])) {
        echo "Medien: FEHLT {$item['file']}\n";
        continue;
    }

    // Datei nach tmp kopieren — media_handle_sideload verschiebt sie.
    $tmp = wp_tempnam(basename($item['file']));
    copy($item['file'], $tmp);

    $id = media_handle_sideload(
        ['name' => basename($item['file']), 'tmp_name' => $tmp],
        0,
        $item['alt']
    );
    if (is_wp_error($id)) {
        echo "Medien: FEHLER {$item['slug']}: {$id->get_error_message()}\n";
        continue;
    }

    wp_update_post(['ID' => $id, 'post_name' => $item['slug']]);
    update_post_meta($id, '_wp_attachment_image_alt', $item['alt']);
    echo "Medien: {$item['slug']} hochgeladen (ID $id)\n";
}

/**
 * Pattern-Datei rendern (frisch, damit kids_attachment_id() die soeben
 * hochgeladenen Medien sieht — unabhängig vom Pattern-Registry-Cache).
 */
function kids_seed_pattern_content(string $file): string
{
    ob_start();
    include get_theme_file_path('patterns/' . $file);

    return trim(ob_get_clean());
}

$pages = [
    'startseite' => ['title' => 'Startseite', 'pattern' => 'page-startseite.php'],
    'kennenlernen' => ['title' => 'Kennenlernen', 'pattern' => 'page-kennenlernen.php'],
    'kontakt' => ['title' => 'Kontakt', 'pattern' => 'page-kontakt.php'],
    'spenden' => ['title' => 'Spenden', 'pattern' => 'page-spenden.php'],
    'jobs' => ['title' => 'Jobs', 'pattern' => 'page-jobs.php'],
    'danke' => ['title' => 'Danke', 'pattern' => 'page-danke.php'],
    'impressum' => ['title' => 'Impressum', 'pattern' => 'page-impressum.php', 'template' => 'page-prose'],
    'datenschutz' => ['title' => 'Datenschutzerklärung', 'pattern' => 'page-datenschutz.php', 'template' => 'page-prose'],
];

$page_ids = [];
foreach ($pages as $slug => $page) {
    $content = kids_seed_pattern_content($page['pattern']);
    $existing = get_page_by_path($slug);

    $postarr = [
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_title' => $page['title'],
        'post_name' => $slug,
        // wp_insert_post() erwartet geslashte Daten und würde sonst die
        // Backslashes der Unicode-Escapes in den Block-Attributen entfernen.
        'post_content' => wp_slash($content),
    ];
    if (isset($page['template'])) {
        $postarr['page_template'] = $page['template'];
    }

    if ($existing) {
        $postarr['ID'] = $existing->ID;
        $id = wp_update_post($postarr, true);
        $verb = 'aktualisiert';
    } else {
        $id = wp_insert_post($postarr, true);
        $verb = 'angelegt';
    }

    if (is_wp_error($id)) {
        echo "Seite: FEHLER $slug: {$id->get_error_message()}\n";
        continue;
    }

    $page_ids[$slug] = $id;
    echo "Seite: /$slug $verb (ID $id)\n";
}

// Startseite als statische Front-Page, Permalinks auf Seitennamen.
if (isset($page_ids['startseite'])) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $page_ids['startseite']);
    echo "Option: Startseite als Front-Page gesetzt\n";
}

update_option('blogname', 'KIDS e.V.');
update_option('blogdescription', 'Elterninitiative in Bonn-Beuel');

global $wp_rewrite;
$wp_rewrite->set_permalink_structure('/%postname%/');
$wp_rewrite->flush_rules(true);
echo "Option: Permalinks auf /%postname%/ gestellt\n";

echo "Fertig.\n";
