<?php
/**
 * @file
 * icfi_text_signup.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function icfi_text_signup_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "bean_admin_ui" && $api == "bean") {
    return array("version" => "5");
  }
}
