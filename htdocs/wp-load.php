<?php
/*
 * Usually wp-content is inside WordPress core.
 * In this project wp-content is moved out of core to be easier to update,
 * especially with Composer.
 └── htdocs
    ├── wp-content
    │   ├── mu-plugins
    │   ├── plugins
    │   ├── themes
    │   └── languages
    ├── wp-config.php
    ├── index.php
    ├── wp-load.php
    └── wordpress # WordPress core installed by Composer
        ├── wp-admin
        ├── index.php
        ├── wp-load.php
        └── ...
 *
 * Some plugins have an antipattern of doing:
 *
 * require_once('../../../wp-load.php');
 *
 * expecting wp-load.php to sit three levels above wp-content/plugins/<plugin>,
 * which is where it lives in a stock WordPress install. This file sits at that
 * expected location and forwards to the real wp-load.php inside core.
 */
require_once('wordpress/wp-load.php');
