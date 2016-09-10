<?php
/**
 * Use this file to override global defaults.
 *
 * See the individual environment DB configs for specific config information.
 */

return array(
    'development' => array(
        'type'           => 'pdo',
        'connection'     => array(
            'dsn'            => 'pgsql:host=localhost;dbname=testing',
            'username'       => 'root',
            'password'       => 'qwe123',
            'persistent'     => false,
            'compress'       => false,
        ),
        'identifier'     => '"',
        'table_prefix'   => '',
        'charset'        => 'utf8',
        'enable_cache'   => true,
        'profiling'      => false,
        'readonly'       => array('slave1', 'slave2', 'slave3'),
    ),

    'slave1' => array(
        // configuration of the first production readonly slave db
    ),

    'slave2' => array(
        // configuration of the second production readonly slave db
    ),

    'slave3' => array(
        // configuration of the third production readonly slave db
    ),
);
