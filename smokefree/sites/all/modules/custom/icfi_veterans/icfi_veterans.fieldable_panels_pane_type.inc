<?php
/**
 * @file
 * icfi_veterans.fieldable_panels_pane_type.inc
 */

/**
 * Implements hook_default_fieldable_panels_pane_type().
 */
function icfi_veterans_default_fieldable_panels_pane_type() {
  $export = array();

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'link_list';
  $fieldable_panels_pane_type->title = 'Link List';
  $fieldable_panels_pane_type->description = 'Builds a simple list of links to content on the site.';
  $export['link_list'] = $fieldable_panels_pane_type;

  $fieldable_panels_pane_type = new stdClass();
  $fieldable_panels_pane_type->disabled = FALSE; /* Edit this to true to make a default fieldable_panels_pane_type disabled initially */
  $fieldable_panels_pane_type->api_version = 1;
  $fieldable_panels_pane_type->name = 'tools_tips';
  $fieldable_panels_pane_type->title = 'Tools & Tips';
  $fieldable_panels_pane_type->description = '';
  $export['tools_tips'] = $fieldable_panels_pane_type;

  return $export;
}
