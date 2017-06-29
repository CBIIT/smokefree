<?php
/**
 * @file
 * icfi_veterans.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function icfi_veterans_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create fieldable link_list'.
  $permissions['create fieldable link_list'] = array(
    'name' => 'create fieldable link_list',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'create fieldable tools_tips'.
  $permissions['create fieldable tools_tips'] = array(
    'name' => 'create fieldable tools_tips',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable link_list'.
  $permissions['delete fieldable link_list'] = array(
    'name' => 'delete fieldable link_list',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'delete fieldable tools_tips'.
  $permissions['delete fieldable tools_tips'] = array(
    'name' => 'delete fieldable tools_tips',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable link_list'.
  $permissions['edit fieldable link_list'] = array(
    'name' => 'edit fieldable link_list',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  // Exported permission: 'edit fieldable tools_tips'.
  $permissions['edit fieldable tools_tips'] = array(
    'name' => 'edit fieldable tools_tips',
    'roles' => array(
      'smokefree content admin' => 'smokefree content admin',
    ),
    'module' => 'fieldable_panels_panes',
  );

  return $permissions;
}
