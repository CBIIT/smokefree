<?php
/**
 * @file
 * icfi_springboard.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function icfi_springboard_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-springboard.
  $menus['menu-springboard'] = array(
    'menu_name' => 'menu-springboard',
    'title' => 'Springboard',
    'description' => '',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Springboard');

  return $menus;
}
