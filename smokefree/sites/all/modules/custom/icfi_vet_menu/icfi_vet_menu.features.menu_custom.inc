<?php
/**
 * @file
 * icfi_vet_menu.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function icfi_vet_menu_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-veterans-menu.
  $menus['menu-veterans-menu'] = array(
    'menu_name' => 'menu-veterans-menu',
    'title' => 'Veterans menu',
    'description' => '',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Veterans menu');

  return $menus;
}
