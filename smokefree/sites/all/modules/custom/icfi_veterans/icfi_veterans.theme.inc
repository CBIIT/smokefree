<?php

/**
 * Template preprocessor for Veterans Header.
 */
function template_preprocess_icfi_veterans_header(&$variables) {
  $variables['veterans_logo'] = theme_image(array(
    'path' => drupal_get_path('module', 'icfi_veterans') . '/img/smokefreevet_logo.png',
    'alt' => t('SmokeFreeVET Logo'),
  ));
  $variables['veterans_homepage'] = (request_path() == 'veterans');
  if ($variables['veterans_homepage']) {
    $variables['veterans_header_text'] = icfi_veterans_header_text();
  }
}