<?php

/**
 * Implements hook_views_data_alter().
 */
function icfi_content_repository_views_data_alter(&$data) {
  $data['node']['url_friendly_include_summary']['title'] = 'URL Friendly Include Summary';
  $data['node']['url_friendly_include_summary']['help'] = 'Provide the include escaped for use in URLs';
  $data['node']['url_friendly_include_summary']['field']['handler'] = 'icfi_content_repository_handler_url_friendly';
}