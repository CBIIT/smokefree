<?php
/**
 * @file
 * home_b.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function home_b_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'top_banner';
  $bean_type->label = 'Top Banner';
  $bean_type->options = '';
  $bean_type->description = 'Top banner, containing a full-width image, headline, and description.';
  $export['top_banner'] = $bean_type;

  return $export;
}
