<?php
/**
 * @file
 * icfi_tophat_menu.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function icfi_tophat_menu_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'main_menu';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '~springboard*' => '~springboard*',
        '~node/593*' => '~node/593*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'superfish-2' => array(
          'module' => 'superfish',
          'delta' => '2',
          'region' => 'navigation',
          'weight' => '-9',
        ),
        'boxes-ss_search_bar' => array(
          'module' => 'boxes',
          'delta' => 'ss_search_bar',
          'region' => 'navigation',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['main_menu'] = $context;

  return $export;
}
