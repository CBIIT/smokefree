<?php
/**
 * @file
 * point_of_sale.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function point_of_sale_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function point_of_sale_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function point_of_sale_node_info() {
  $items = array(
    'challenge' => array(
      'name' => t('Challenge'),
      'base' => 'node_content',
      'description' => t('Daily Quit Challenge'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'crave_tip' => array(
      'name' => t('Crave Tip'),
      'base' => 'node_content',
      'description' => t('Crave Tips'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'true_false_quiz' => array(
      'name' => t('True False Quiz'),
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

/**
 * Implements hook_paragraphs_info().
 */
function point_of_sale_paragraphs_info() {
  $items = array(
    'true_false_question' => array(
      'name' => 'True False Question',
      'bundle' => 'true_false_question',
      'locked' => '1',
    ),
    'true_false_result' => array(
      'name' => 'True False Result',
      'bundle' => 'true_false_result',
      'locked' => '1',
    ),
  );
  return $items;
}
