<?php
/**
 * @file
 * content_repository.features.inc
 */

/**
 * Implements hook_views_api().
 */
function content_repository_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function content_repository_image_default_styles() {
  $styles = array();

  // Exported image style: more-for-you.
  $styles['more-for-you'] = array(
    'label' => 'more-for-you',
    'effects' => array(
      2 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 286,
          'height' => 107,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function content_repository_node_info() {
  $items = array(
    'cr_article' => array(
      'name' => t('CR Article'),
      'base' => 'node_content',
      'description' => t('Content repository article'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'cr_landing' => array(
      'name' => t('CR Landing'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'include' => array(
      'name' => t('Include'),
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
