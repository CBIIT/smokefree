<?php

function smokefreeteen_preprocess_page(&$variables) {
  define('NUMBER_OF_HOMEPAGE_HERO_IMAGES', 2);
  $variables['random_hero_class'] = 'hero-' . rand(1, NUMBER_OF_HOMEPAGE_HERO_IMAGES);
  $variables['footer_filename'] = 'teen-footer-new.tpl.php';
}

/**
 * Checks if the current page is the teen homepage
 *
 * It seems like there is no easy way to determine/detect
 * if a page is front page by domain
 *
 * @return TRUE if the current page is teen homepage, FALSE otherwise
 */
function is_teen_homepage() {
  global $base_url;
  $domains = domain_domains();
  if (strpos($domains[2]['path'], $base_url) !== FALSE) {
    $path = request_path();
    if (empty($path) || $path == 'teen') {
      return TRUE;
    }
  }
  else {
    return FALSE;
  }
}