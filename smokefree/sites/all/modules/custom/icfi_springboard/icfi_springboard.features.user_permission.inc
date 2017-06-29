<?php
/**
 * @file
 * icfi_springboard.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function icfi_springboard_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'administer actiondecks'.
  $permissions['administer actiondecks'] = array(
    'name' => 'administer actiondecks',
    'roles' => array(
      'administrator' => 'administrator',
    ),
    'module' => 'springboard_actiondeck',
  );

  // Exported permission: 'view actiondecks'.
  $permissions['view actiondecks'] = array(
    'name' => 'view actiondecks',
    'roles' => array(
      'administrator' => 'administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'springboard_actiondeck',
  );

  return $permissions;
}
