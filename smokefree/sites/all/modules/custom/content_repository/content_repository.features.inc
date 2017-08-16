<?php
/**
 * @file
 * content_repository.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function content_repository_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

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
    'author_bio' => array(
      'name' => t('Author Bio'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Author Name'),
      'help' => '',
    ),
    'blog_entry' => array(
      'name' => t('Blog Entry'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
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
    'disclaimer' => array(
      'name' => t('Disclaimer'),
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
