<?php
/**
 * @file
 * icfi_section_landing.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function icfi_section_landing_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'read_more_links';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Read More Links';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Read More Links';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '9';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_read_more_links_node']['id'] = 'reverse_field_read_more_links_node';
  $handler->display->display_options['relationships']['reverse_field_read_more_links_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_read_more_links_node']['field'] = 'reverse_field_read_more_links_node';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Short Summary */
  $handler->display->display_options['fields']['field_short_summary']['id'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['table'] = 'field_data_field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['field'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['label'] = '';
  $handler->display->display_options['fields']['field_short_summary']['element_label_colon'] = FALSE;
  /* Field: Content: Read More Text */
  $handler->display->display_options['fields']['field_read_more_text']['id'] = 'field_read_more_text';
  $handler->display->display_options['fields']['field_read_more_text']['table'] = 'field_data_field_read_more_text';
  $handler->display->display_options['fields']['field_read_more_text']['field'] = 'field_read_more_text';
  $handler->display->display_options['fields']['field_read_more_text']['label'] = '';
  $handler->display->display_options['fields']['field_read_more_text']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_read_more_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_read_more_text']['empty'] = 'Read More';
  $handler->display->display_options['fields']['field_read_more_text']['type'] = 'text_plain';
  $handler->display->display_options['fields']['field_read_more_text']['settings'] = array(
    'linked_field' => array(
      'linked' => 0,
      'destination' => '',
      'advanced' => array(
        'title' => '',
        'target' => '',
        'class' => '',
        'rel' => '',
        'text' => '',
      ),
    ),
  );
  /* Field: Content: Link */
  $handler->display->display_options['fields']['view_node']['id'] = 'view_node';
  $handler->display->display_options['fields']['view_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['view_node']['field'] = 'view_node';
  $handler->display->display_options['fields']['view_node']['label'] = '';
  $handler->display->display_options['fields']['view_node']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['view_node']['alter']['text'] = '[field_read_more_text]';
  $handler->display->display_options['fields']['view_node']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['view_node']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'reverse_field_read_more_links_node';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_read_more_links_node';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'page' => 'page',
    'blog_entry' => 'blog_entry',
    'cr_article' => 'cr_article',
    'cr_landing' => 'cr_landing',
    'include' => 'include',
    'media_landing' => 'media_landing',
    'section_landing' => 'section_landing',
    'veterans' => 'veterans',
    'webform' => 'webform',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['read_more_links'] = $view;

  return $export;
}
