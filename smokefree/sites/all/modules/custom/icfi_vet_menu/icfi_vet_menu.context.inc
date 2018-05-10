<?php
/**
 * @file
 * icfi_vet_menu.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function icfi_vet_menu_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'veterans';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'veterans' => 'veterans',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
    'path' => array(
      'values' => array(
        'veterans' => 'veterans',
        'node/149' => 'node/149',
        'node/149/*' => 'node/149/*',
        'veterans/how-to-quit/build-your-quit-plan' => 'veterans/how-to-quit/build-your-quit-plan',
        'node/755' => 'node/755',
        'node/755/*' => 'node/755/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'icfi_veterans-icfi_veterans_header' => array(
          'module' => 'icfi_veterans',
          'delta' => 'icfi_veterans_header',
          'region' => 'header',
          'weight' => '-10',
        ),
        'boxes-vet_search_icon_mobile' => array(
          'module' => 'boxes',
          'delta' => 'vet_search_icon_mobile',
          'region' => 'header',
          'weight' => '-9',
        ),
        'superfish-1' => array(
          'module' => 'superfish',
          'delta' => '1',
          'region' => 'header',
          'weight' => '-8',
        ),
        'boxes-vet_search_icon' => array(
          'module' => 'boxes',
          'delta' => 'vet_search_icon',
          'region' => 'header',
          'weight' => '-7',
        ),
        'boxes-vet_search' => array(
          'module' => 'boxes',
          'delta' => 'vet_search',
          'region' => 'header',
          'weight' => '-6',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['veterans'] = $context;

  return $export;
}
