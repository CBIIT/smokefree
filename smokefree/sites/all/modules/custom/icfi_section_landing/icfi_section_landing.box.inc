<?php
/**
 * @file
 * icfi_section_landing.box.inc
 */

/**
 * Implements hook_default_box().
 */
function icfi_section_landing_default_box() {
  $export = array();

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'dip_hurts';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'dip-hurts';
  $box->options = array(
    'body' => array(
      'value' => '<iframe src="/sites/interactives/dip-hurts/" style="border:none;height: 100vh;" class="col-sm-12"></iframe>',
      'format' => 'raw_html',
    ),
    'additional_classes' => '',
  );
  $export['dip_hurts'] = $box;

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'ditch_dip_good';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'ditch-dip-good';
  $box->options = array(
    'body' => array(
      'value' => '<iframe src="/sites/interactives/6-ways-your-life-will-be-awesome-after-you-quit-dip/" style="border:none;height: 100vh;" class="col-sm-12"></iframe>',
      'format' => 'raw_html',
    ),
    'additional_classes' => '',
  );
  $export['ditch_dip_good'] = $box;

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'get_through_cravings';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'get-through-cravings ';
  $box->options = array(
    'body' => array(
      'value' => '<iframe src="/sites/interactives/beat-dip-cravings/" style="border:none;height: 100vh;" class="col-sm-12"></iframe>',
      'format' => 'raw_html',
    ),
    'additional_classes' => '',
  );
  $export['get_through_cravings'] = $box;

  return $export;
}
