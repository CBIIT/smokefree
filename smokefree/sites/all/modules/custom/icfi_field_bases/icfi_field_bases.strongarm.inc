<?php
/**
 * @file
 * icfi_field_bases.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function icfi_field_bases_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_article_bundle_pattern';
  $strongarm->value = '';
  $export['pathauto_taxonomy_term_article_bundle_pattern'] = $strongarm;

  return $export;
}
