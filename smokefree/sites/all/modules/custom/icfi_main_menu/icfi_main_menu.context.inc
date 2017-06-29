<?php
/**
 * @file
 * icfi_main_menu.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function icfi_main_menu_context_default_contexts() {
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
        'tb_megamenu-main-menu' => array(
          'module' => 'tb_megamenu',
          'delta' => 'main-menu',
          'region' => 'navigation',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['main_menu'] = $context;

  return $export;
}
