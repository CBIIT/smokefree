<?php
/**
 * @file
 * content_repository.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function content_repository_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = TRUE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'social_share';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'cr_article' => 'cr_article',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-social_share-block' => array(
          'module' => 'views',
          'delta' => 'social_share-block',
          'region' => 'highlighted',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['social_share'] = $context;

  return $export;
}
