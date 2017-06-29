<?php
/**
 * @file
 * media_landing.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function media_landing_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function media_landing_node_info() {
  $items = array(
    'media_landing' => array(
      'name' => t('Media Landing'),
      'base' => 'node_content',
      'description' => t('Paid Media Landing Page'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
