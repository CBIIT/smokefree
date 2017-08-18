<?php
/**
 * @file
 * blog_entry.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function blog_entry_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: navigation_author-bio:node/add/author-bio.
  $menu_links['navigation_author-bio:node/add/author-bio'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/author-bio',
    'router_path' => 'node/add/author-bio',
    'link_title' => 'Author Bio',
    'options' => array(
      'identifier' => 'navigation_author-bio:node/add/author-bio',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_blog-entry:node/add/blog-entry.
  $menu_links['navigation_blog-entry:node/add/blog-entry'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/blog-entry',
    'router_path' => 'node/add/blog-entry',
    'link_title' => 'Blog Entry',
    'options' => array(
      'identifier' => 'navigation_blog-entry:node/add/blog-entry',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_disclaimer:node/add/disclaimer.
  $menu_links['navigation_disclaimer:node/add/disclaimer'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/disclaimer',
    'router_path' => 'node/add/disclaimer',
    'link_title' => 'Disclaimer',
    'options' => array(
      'identifier' => 'navigation_disclaimer:node/add/disclaimer',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Author Bio');
  t('Blog Entry');
  t('Disclaimer');

  return $menu_links;
}
