<?php
/**
 * @file
 * icfi_static_page.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function icfi_static_page_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-html_page-field_static_page'.
  $field_instances['node-html_page-field_static_page'] = array(
    'bundle' => 'html_page',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_static_page',
    'label' => 'Static page',
    'required' => 0,
    'settings' => array(
      'display_summary' => 0,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 24,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 41,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Static page');

  return $field_instances;
}
