<?php
/**
 * @file
 * Stub file for "block" theme hook [pre]process functions.
 */

/**
 * Preprocess variables for block.tpl.php
 *
 * @see block.tpl.php
 */
function smokefreegov_preprocess_block(&$variables, $hook) {
  $block = $variables['block'];
  if (!empty($block->title)) {
    if (in_array(strtolower($block->title), array('tags', 'archives', 'blog index', 'blog archive'))) {
      $variables['title_attributes_array']['data-toggle'] = 'collapse';
      $variables['title_attributes_array']['data-target'] = '#' . str_replace(' ', '_', strtolower($block->title)) . '_body';
      $variables['collapsible_body_id'] = str_replace(' ', '_', strtolower($block->title)) . '_body';
    }
    if ($block->title == 'On-Demand Support') {
      $variables['classes_array'][] = 'col-lg-4 col-xs-12 last-third on-demand';
      unset($variables['block']->subject);
    }
  }
  if ($block->module == 'bean') {
    $beans = $variables['elements']['bean'];
    $bean = $beans[reset(element_children($beans))];
    if ($bean['#bundle'] == 'text_program') {
      //$variables['classes_array'][] = count($bean['field_program_link']['#items']) > 3 ? 'col-md-8' : 'col-md-4';
      $variables['classes_array'][] = 'container';
    }
  }
  //$variables['classes_array'][] = 'row';
  // Use a bare template for the page's main content.
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'][] = 'block__no_wrapper';
  //}
  //$variables['title_attributes_array']['class'][] = 'block-title';
}