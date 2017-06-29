<?php
/**
 * @file
 * icfi_section_landing.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function icfi_section_landing_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_section'.
  $field_bases['field_section'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_section',
    'indexes' => array(
      'value' => array(
        0 => 'value',
      ),
    ),
    'locked' => 0,
    'module' => 'list',
    'settings' => array(
      'allowed_values' => array(
        'default' => 'Default',
        'veterans' => 'Veterans',
        'smokefree-text' => 'Smoke Free Text',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}
