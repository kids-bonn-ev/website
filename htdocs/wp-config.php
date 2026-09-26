<?php
######################################################################################
##### Don't put anything sensitive in this file directly.                        #####
##### Use the .env file instead (copy .env.example to .env and fill it in).      #####
######################################################################################

// Load Composer libraries
require_once dirname(__DIR__) . '/vendor/autoload.php';

$root_dir = dirname(__DIR__);
$webroot_dir = $root_dir . '/htdocs';

/**
 * Use Dotenv to load environment variables from .env in the project root.
 */
if (file_exists($root_dir . '/.env')) {
  $dotenv = new Dotenv\Dotenv($root_dir);
  $dotenv->overload();
}

/**
 * DB settings
 */
define('DB_NAME', getenv('DB_NAME'));
define('DB_USER', getenv('DB_USER'));
define('DB_PASSWORD', getenv('DB_PASSWORD'));
define('DB_HOST', getenv('DB_HOST') ?: '127.0.0.1:3306');
define('DB_CHARSET', getenv('DB_CHARSET') ?: 'utf8mb4');
define('DB_COLLATE', getenv('DB_COLLATE') ?: 'utf8mb4_unicode_ci');
$table_prefix = getenv('DB_PREFIX') ?: 'wp_';

/**
 * wp-content is moved out of WordPress core, see htdocs/wp-load.php.
 */
define('CONTENT_DIR', '/wp-content');
define('WP_CONTENT_DIR', $webroot_dir . CONTENT_DIR);

/**
 * Don't allow any other write method than direct.
 */
define('FS_METHOD', 'direct');

/**
 * Authentication unique keys and salts.
 * Generate real values at https://api.wordpress.org/secret-key/1.1/salt/
 * and set them in .env — do not hardcode them here.
 */
define('AUTH_KEY',         getenv('AUTH_KEY'));
define('SECURE_AUTH_KEY',  getenv('SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY',    getenv('LOGGED_IN_KEY'));
define('NONCE_KEY',        getenv('NONCE_KEY'));
define('AUTH_SALT',        getenv('AUTH_SALT'));
define('SECURE_AUTH_SALT', getenv('SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT',   getenv('LOGGED_IN_SALT'));
define('NONCE_SALT',       getenv('NONCE_SALT'));

/**
 * Only keep the last 30 revisions of a post, to avoid bloating wp_posts /
 * wp_postmeta with hundreds of revisions per post.
 */
define('WP_POST_REVISIONS', 30);

/**
 * Verbose debugging output outside of production.
 */
if (getenv('WP_ENV') === 'production') {
  define('WP_DEBUG', false);
  define('WP_DEBUG_DISPLAY', false);
  define('WP_DEBUG_LOG', false);
  define('SCRIPT_DEBUG', false);
  define('FORCE_SSL_ADMIN', true);
} else {
  define('WP_DEBUG', true);
  define('WP_DEBUG_DISPLAY', true);
  define('WP_DEBUG_LOG', true);
  define('SCRIPT_DEBUG', true);
}

if (getenv('WP_HOME')) {
  define('WP_HOME', getenv('WP_HOME'));
}
if (getenv('WP_SITEURL')) {
  define('WP_SITEURL', getenv('WP_SITEURL'));
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
  define('ABSPATH', $webroot_dir . '/wordpress/');
}

require_once ABSPATH . 'wp-settings.php';
