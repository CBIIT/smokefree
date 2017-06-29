<?php
/**
 * @file
 * springboard_video_stories.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function springboard_video_stories_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function springboard_video_stories_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function springboard_video_stories_node_info() {
  $items = array(
    'springboard_video' => array(
      'name' => t('Springboard Video'),
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
