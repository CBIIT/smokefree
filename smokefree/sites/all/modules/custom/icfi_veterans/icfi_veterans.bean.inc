<?php
/**
 * @file
 * icfi_veterans.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function icfi_veterans_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'tools_tips';
  $bean_type->label = 'Tools and Tips';
  $bean_type->options = '';
  $bean_type->description = 'Allows Tools and Tips fieldable panels panes to be reused outside of panels, in other areas of the site.';
  $export['tools_tips'] = $bean_type;

  return $export;
}
