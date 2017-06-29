<?php
/**
 * @file
 * icfi_text_signup.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function icfi_text_signup_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'text_program';
  $bean_type->label = 'Text Program';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['text_program'] = $bean_type;

  return $export;
}
