<?php

add_action('after_setup_theme', function () {
    add_editor_style('assets/css/global.css');
});

add_action('init', function () {
    register_block_style('core/paragraph', ['name' => 'eyebrow', 'label' => 'Eyebrow']);
    register_block_style('core/paragraph', ['name' => 'lede', 'label' => 'Lede']);
    register_block_style('core/paragraph', ['name' => 'hand', 'label' => 'Handschrift']);
    register_block_style('core/list', ['name' => 'kids-bullets', 'label' => 'KIDS-Aufzählung']);
});

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script(
        'kids-ev-highlight-format',
        get_theme_file_uri('assets/js/highlight-format.js'),
        ['wp-rich-text', 'wp-element', 'wp-block-editor'],
        wp_get_theme()->get('Version'),
        true
    );
});

/**
 * Bild-URL für ein Deko-Motiv (Port von Deko.astro).
 */
function kids_deko_src(string $name): string
{
    return $name === 'regenwurm'
        ? get_theme_file_uri('assets/logos/regenwurm.png')
        : get_theme_file_uri('assets/deco/' . $name . '.svg');
}

/**
 * Inline-Style für ein Deko-Element aus einem deko-layer-Eintrag
 * (Keys: size, top, right, bottom, left, rotate, opacity).
 */
function kids_deko_style(array $item): string
{
    $style = [];
    foreach (['top', 'right', 'bottom', 'left'] as $side) {
        if (!empty($item[$side])) {
            $style[] = $side . ':' . $item[$side];
        }
    }
    $style[] = 'width:' . (!empty($item['size']) ? (float) $item['size'] : 80) . 'px';
    $style[] = 'transform:rotate(' . (float) ($item['rotate'] ?? 0) . 'deg)';
    $style[] = 'opacity:' . (($item['opacity'] ?? '') === '' || $item['opacity'] === null ? 1 : (float) $item['opacity']);

    return implode(';', $style);
}

/**
 * Rendert die Deko-Overlays eines custom/deko-layer-Felds (Repeater "deko").
 * Der umgebende Block braucht position:relative (.section/.kids-card haben das).
 * Blockstudio liefert für leere Repeater false statt eines Arrays.
 */
function kids_render_deko(array|false|null $items): void
{
    foreach ($items ?: [] as $item) {
        if (empty($item['name'])) {
            continue;
        }

        printf(
            '<img src="%s" alt="" class="deko%s" style="%s" loading="lazy" aria-hidden="true">',
            esc_url(kids_deko_src($item['name'])),
            !empty($item['hide_mobile']) ? ' deko--hide-mobile' : '',
            esc_attr(kids_deko_style($item))
        );
    }
}

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'kids-ev-global',
        get_theme_file_uri('assets/css/global.css'),
        [],
        wp_get_theme()->get('Version')
    );
});

// Maybug-Schnitte für den ersten Paint vorladen (Decorative + Black, siehe Plan 6.3).
add_action('wp_head', function () {
    foreach (['MaybugMSDecorative', 'MaybugMSBlack'] as $font) {
        printf(
            '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
            esc_url(get_theme_file_uri('assets/fonts/' . $font . '.woff2'))
        );
    }
}, 1);
