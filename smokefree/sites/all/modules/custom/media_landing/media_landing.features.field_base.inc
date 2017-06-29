<?php
/**
 * @file
 * media_landing.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function media_landing_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_social_display'.
  $field_bases['field_social_display'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_social_display',
    'indexes' => array(
      'value' => array(
        0 => 'value',
      ),
    ),
    'locked' => 0,
    'module' => 'list',
    'settings' => array(
      'allowed_values' => array(
        'Default' => 'SF Instagram',
        'Facebook' => 'SF Facebook',
        'Español' => 'Español Instagram',
        'Women' => 'Women Facebook',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  // Exported field_base: 'field_txt_display'.
  $field_bases['field_txt_display'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_txt_display',
    'indexes' => array(
      'value' => array(
        0 => 'value',
      ),
    ),
    'locked' => 0,
    'module' => 'list',
    'settings' => array(
      'allowed_values' => array(
        'Default' => 'TXT',
        'Español' => 'Español',
        'Mom' => 'Mom',
        'dcpq' => 'DC/PQ',
      ),
      'allowed_values_function' => '',
    ),
    'translatable' => 0,
    'type' => 'list_text',
  );

  return $field_bases;
}
