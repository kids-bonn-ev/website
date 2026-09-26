<?php

/**
 * Resets the password of the "kidsadmin" user to "kidsadmin".
 * For local development only. Run with: ddev exec php scripts/reset-admin-password.php
 */

require __DIR__ . '/../htdocs/wp-load.php';

$user = get_user_by('login', 'kidsadmin');

if (!$user) {
    fwrite(STDERR, "User 'kidsadmin' not found.\n");
    exit(1);
}

if (empty($argv[1])) {
    fwrite(STDERR, "no passsword given\n");
    exit(1);
}

wp_set_password($argv[1], $user->ID);

echo "Password for 'kidsadmin' (ID {$user->ID}) reset to 'kidsadmin'.\n";
