<?php

add_action('after_setup_theme', function () {
    add_editor_style('assets/css/global.css');
});

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
