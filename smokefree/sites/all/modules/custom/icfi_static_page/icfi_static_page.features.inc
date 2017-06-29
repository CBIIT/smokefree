<?php
/**
 * @file
 * icfi_static_page.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function icfi_static_page_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function icfi_static_page_node_info() {
  $items = array(
    'html_page' => array(
      'name' => t('Html Page'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
