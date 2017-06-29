<?php
/**
 * @file
 * icfi_text_signup.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function icfi_text_signup_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create any text_program bean'.
  $permissions['create any text_program bean'] = array(
    'name' => 'create any text_program bean',
    'roles' => array(
      'administrator' => 'administrator',
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'delete any text_program bean'.
  $permissions['delete any text_program bean'] = array(
    'name' => 'delete any text_program bean',
    'roles' => array(
      'administrator' => 'administrator',
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'edit any text_program bean'.
  $permissions['edit any text_program bean'] = array(
    'name' => 'edit any text_program bean',
    'roles' => array(
      'administrator' => 'administrator',
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'view any text_program bean'.
  $permissions['view any text_program bean'] = array(
    'name' => 'view any text_program bean',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'bean',
  );

  return $permissions;
}
