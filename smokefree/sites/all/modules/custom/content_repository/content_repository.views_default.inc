<?php
/**
 * @file
 * content_repository.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function content_repository_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'cr_landing_previews';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'CR Landing Previews';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'CR Landing Previews';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-md-5';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image']['id'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['table'] = 'field_data_field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['field'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['label'] = '';
  $handler->display->display_options['fields']['field_featured_image']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_featured_image']['alter']['text'] = '[field_featured_image]
<div class="title">[title]</div>';
  $handler->display->display_options['fields']['field_featured_image']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_featured_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_featured_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_featured_image']['settings'] = array(
    'image_style' => '',
    'image_link' => 'content',
  );
  /* Field: Content: Short Summary */
  $handler->display->display_options['fields']['field_short_summary']['id'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['table'] = 'field_data_field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['field'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['label'] = '';
  $handler->display->display_options['fields']['field_short_summary']['element_label_colon'] = FALSE;
  /* Sort criterion: Node: Published at */
  $handler->display->display_options['sorts']['published_at']['id'] = 'published_at';
  $handler->display->display_options['sorts']['published_at']['table'] = 'publication_date';
  $handler->display->display_options['sorts']['published_at']['field'] = 'published_at';
  /* Contextual filter: Content: Has taxonomy term ID */
  $handler->display->display_options['arguments']['tid']['id'] = 'tid';
  $handler->display->display_options['arguments']['tid']['table'] = 'taxonomy_index';
  $handler->display->display_options['arguments']['tid']['field'] = 'tid';
  $handler->display->display_options['arguments']['tid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['tid']['default_argument_type'] = 'taxonomy_tid';
  $handler->display->display_options['arguments']['tid']['default_argument_options']['term_page'] = FALSE;
  $handler->display->display_options['arguments']['tid']['default_argument_options']['node'] = TRUE;
  $handler->display->display_options['arguments']['tid']['default_argument_options']['anyall'] = '+';
  $handler->display->display_options['arguments']['tid']['default_argument_options']['limit'] = TRUE;
  $handler->display->display_options['arguments']['tid']['default_argument_options']['vocabularies'] = array(
    'article_bundle' => 'article_bundle',
  );
  $handler->display->display_options['arguments']['tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['tid']['summary_options']['items_per_page'] = '25';
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
    'cr_article' => 'cr_article',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['cr_landing_previews'] = $view;

  $view = new view();
  $view->name = 'more_for_you';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'More For You';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'More For You';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '4';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-sm-4';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_top_5_links_node']['id'] = 'reverse_field_top_5_links_node';
  $handler->display->display_options['relationships']['reverse_field_top_5_links_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_top_5_links_node']['field'] = 'reverse_field_top_5_links_node';
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image']['id'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['table'] = 'field_data_field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['field'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['label'] = '';
  $handler->display->display_options['fields']['field_featured_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_featured_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_featured_image']['settings'] = array(
    'image_style' => 'more-for-you',
    'image_link' => 'content',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Short Summary */
  $handler->display->display_options['fields']['field_short_summary']['id'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['table'] = 'field_data_field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['field'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['label'] = '';
  $handler->display->display_options['fields']['field_short_summary']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'reverse_field_top_5_links_node';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_top_5_links_node';
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

  /* Display: Content Bottom */
  $handler = $view->new_display('block', 'Content Bottom', 'content_bottom');
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-md-3 col-sm-6 morebox';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image']['id'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['table'] = 'field_data_field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['field'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['label'] = '';
  $handler->display->display_options['fields']['field_featured_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_featured_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_featured_image']['settings'] = array(
    'image_style' => '',
    'image_link' => 'content',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Short Summary */
  $handler->display->display_options['fields']['field_short_summary']['id'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['table'] = 'field_data_field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['field'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['label'] = '';
  $handler->display->display_options['fields']['field_short_summary']['element_label_colon'] = FALSE;

  /* Display: More For Sidebar */
  $handler = $view->new_display('block', 'More For Sidebar', 'sidebar');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Additional Resources';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'notes item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Sidebar Image */
  $handler->display->display_options['fields']['field_sidebar_image']['id'] = 'field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['table'] = 'field_data_field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['field'] = 'field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_sidebar_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_sidebar_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Field: Field: Sidebar Text */
  $handler->display->display_options['fields']['field_sidebar_text']['id'] = 'field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['table'] = 'field_data_field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['field'] = 'field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_text']['element_label_colon'] = FALSE;
  /* Field: Content: Path */
  $handler->display->display_options['fields']['path']['id'] = 'path';
  $handler->display->display_options['fields']['path']['table'] = 'node';
  $handler->display->display_options['fields']['path']['field'] = 'path';
  $handler->display->display_options['fields']['path']['label'] = '';
  $handler->display->display_options['fields']['path']['exclude'] = TRUE;
  $handler->display->display_options['fields']['path']['element_label_colon'] = FALSE;
  /* Field: Content: Sidebar Link Text */
  $handler->display->display_options['fields']['field_sidebar_link_text']['id'] = 'field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['table'] = 'field_data_field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['field'] = 'field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['text'] = '<div class="sidebar-button-wrapper">
<a href="[path]" class="btn btn-include">[field_sidebar_link_text]</a>
</div>';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['path'] = '[path]';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['link_class'] = 'btn btn-include';
  $handler->display->display_options['fields']['field_sidebar_link_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_sidebar_link_text']['settings'] = array(
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

  /* Display: More For Sidebar Carousel */
  $handler = $view->new_display('block', 'More For Sidebar Carousel', 'carousel');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Additional Resources';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'notes item';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Sidebar Image */
  $handler->display->display_options['fields']['field_sidebar_image']['id'] = 'field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['table'] = 'field_data_field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['field'] = 'field_sidebar_image';
  $handler->display->display_options['fields']['field_sidebar_image']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_sidebar_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_sidebar_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Field: Field: Sidebar Text */
  $handler->display->display_options['fields']['field_sidebar_text']['id'] = 'field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['table'] = 'field_data_field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['field'] = 'field_sidebar_text';
  $handler->display->display_options['fields']['field_sidebar_text']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_text']['element_label_colon'] = FALSE;
  /* Field: Content: Path */
  $handler->display->display_options['fields']['path']['id'] = 'path';
  $handler->display->display_options['fields']['path']['table'] = 'node';
  $handler->display->display_options['fields']['path']['field'] = 'path';
  $handler->display->display_options['fields']['path']['label'] = '';
  $handler->display->display_options['fields']['path']['exclude'] = TRUE;
  $handler->display->display_options['fields']['path']['element_label_colon'] = FALSE;
  /* Field: Content: Sidebar Link Text */
  $handler->display->display_options['fields']['field_sidebar_link_text']['id'] = 'field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['table'] = 'field_data_field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['field'] = 'field_sidebar_link_text';
  $handler->display->display_options['fields']['field_sidebar_link_text']['label'] = '';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['text'] = '<div class="sidebar-button-wrapper">
<a href="[path]" class="btn btn-include">[field_sidebar_link_text]</a>
</div>';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['path'] = '[path]';
  $handler->display->display_options['fields']['field_sidebar_link_text']['alter']['link_class'] = 'btn btn-include';
  $handler->display->display_options['fields']['field_sidebar_link_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_sidebar_link_text']['settings'] = array(
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
  $export['more_for_you'] = $view;

  $view = new view();
  $view->name = 'quit_notes';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Quit Notes';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Quit Notes';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '4';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'notes item';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_includes_sidebar_node']['id'] = 'reverse_field_includes_sidebar_node';
  $handler->display->display_options['relationships']['reverse_field_includes_sidebar_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_includes_sidebar_node']['field'] = 'reverse_field_includes_sidebar_node';
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image_include']['id'] = 'field_featured_image_include';
  $handler->display->display_options['fields']['field_featured_image_include']['table'] = 'field_data_field_featured_image_include';
  $handler->display->display_options['fields']['field_featured_image_include']['field'] = 'field_featured_image_include';
  $handler->display->display_options['fields']['field_featured_image_include']['label'] = '';
  $handler->display->display_options['fields']['field_featured_image_include']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_featured_image_include']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_featured_image_include']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Field: Content: Tip */
  $handler->display->display_options['fields']['field_tip']['id'] = 'field_tip';
  $handler->display->display_options['fields']['field_tip']['table'] = 'field_data_field_tip';
  $handler->display->display_options['fields']['field_tip']['field'] = 'field_tip';
  $handler->display->display_options['fields']['field_tip']['label'] = '';
  $handler->display->display_options['fields']['field_tip']['element_label_colon'] = FALSE;
  /* Field: Content: Myth */
  $handler->display->display_options['fields']['field_myth']['id'] = 'field_myth';
  $handler->display->display_options['fields']['field_myth']['table'] = 'field_data_field_myth';
  $handler->display->display_options['fields']['field_myth']['field'] = 'field_myth';
  $handler->display->display_options['fields']['field_myth']['label'] = '';
  $handler->display->display_options['fields']['field_myth']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_myth']['alter']['text'] = 'Myth: [field_myth]';
  $handler->display->display_options['fields']['field_myth']['element_label_colon'] = FALSE;
  /* Field: Content: Fact */
  $handler->display->display_options['fields']['field_fact']['id'] = 'field_fact';
  $handler->display->display_options['fields']['field_fact']['table'] = 'field_data_field_fact';
  $handler->display->display_options['fields']['field_fact']['field'] = 'field_fact';
  $handler->display->display_options['fields']['field_fact']['label'] = '';
  $handler->display->display_options['fields']['field_fact']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_fact']['alter']['text'] = 'Fact: [field_fact]';
  $handler->display->display_options['fields']['field_fact']['element_label_colon'] = FALSE;
  /* Field: Content: Quote */
  $handler->display->display_options['fields']['field_quote']['id'] = 'field_quote';
  $handler->display->display_options['fields']['field_quote']['table'] = 'field_data_field_quote';
  $handler->display->display_options['fields']['field_quote']['field'] = 'field_quote';
  $handler->display->display_options['fields']['field_quote']['label'] = '';
  $handler->display->display_options['fields']['field_quote']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_quote']['alter']['text'] = '"[field_quote-value]"';
  $handler->display->display_options['fields']['field_quote']['element_label_colon'] = FALSE;
  /* Field: Content: Attribution */
  $handler->display->display_options['fields']['field_attribution']['id'] = 'field_attribution';
  $handler->display->display_options['fields']['field_attribution']['table'] = 'field_data_field_attribution';
  $handler->display->display_options['fields']['field_attribution']['field'] = 'field_attribution';
  $handler->display->display_options['fields']['field_attribution']['label'] = '';
  $handler->display->display_options['fields']['field_attribution']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_attribution']['alter']['text'] = '- [field_attribution-value] ';
  $handler->display->display_options['fields']['field_attribution']['element_label_colon'] = FALSE;
  /* Field: Content: Promo Description */
  $handler->display->display_options['fields']['field_promo_description']['id'] = 'field_promo_description';
  $handler->display->display_options['fields']['field_promo_description']['table'] = 'field_data_field_promo_description';
  $handler->display->display_options['fields']['field_promo_description']['field'] = 'field_promo_description';
  $handler->display->display_options['fields']['field_promo_description']['label'] = '';
  $handler->display->display_options['fields']['field_promo_description']['element_label_colon'] = FALSE;
  /* Field: Content: Type */
  $handler->display->display_options['fields']['field_type']['id'] = 'field_type';
  $handler->display->display_options['fields']['field_type']['table'] = 'field_data_field_type';
  $handler->display->display_options['fields']['field_type']['field'] = 'field_type';
  $handler->display->display_options['fields']['field_type']['label'] = '';
  $handler->display->display_options['fields']['field_type']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_type']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_type']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: URL Friendly Include Summary */
  $handler->display->display_options['fields']['url_friendly_include_summary']['id'] = 'url_friendly_include_summary';
  $handler->display->display_options['fields']['url_friendly_include_summary']['table'] = 'node';
  $handler->display->display_options['fields']['url_friendly_include_summary']['field'] = 'url_friendly_include_summary';
  $handler->display->display_options['fields']['url_friendly_include_summary']['label'] = '';
  $handler->display->display_options['fields']['url_friendly_include_summary']['exclude'] = TRUE;
  $handler->display->display_options['fields']['url_friendly_include_summary']['element_label_colon'] = FALSE;
  /* Field: Content: Type */
  $handler->display->display_options['fields']['field_type_1']['id'] = 'field_type_1';
  $handler->display->display_options['fields']['field_type_1']['table'] = 'field_data_field_type';
  $handler->display->display_options['fields']['field_type_1']['field'] = 'field_type';
  $handler->display->display_options['fields']['field_type_1']['label'] = '';
  $handler->display->display_options['fields']['field_type_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_type_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_type_1']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Promo URL */
  $handler->display->display_options['fields']['field_promo_url']['id'] = 'field_promo_url';
  $handler->display->display_options['fields']['field_promo_url']['table'] = 'field_data_field_promo_url';
  $handler->display->display_options['fields']['field_promo_url']['field'] = 'field_promo_url';
  $handler->display->display_options['fields']['field_promo_url']['label'] = '';
  $handler->display->display_options['fields']['field_promo_url']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_promo_url']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_promo_url']['alter']['text'] = '<div class="sidebar-button-wrapper">
<a href="[field_promo_url-url]" class="btn btn-include">[field_promo_url-title]</a>
</div>';
  $handler->display->display_options['fields']['field_promo_url']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_promo_url']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_promo_url']['settings'] = array(
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
  /* Field: Views: Views Conditional */
  $handler->display->display_options['fields']['views_conditional']['id'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['table'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['field'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['label'] = '';
  $handler->display->display_options['fields']['views_conditional']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_conditional']['if'] = 'field_type_1';
  $handler->display->display_options['fields']['views_conditional']['condition'] = '2';
  $handler->display->display_options['fields']['views_conditional']['equalto'] = 'Promo';
  $handler->display->display_options['fields']['views_conditional']['then'] = '<div class="icons">
            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsmokefree.gov&text=[url_friendly_include_summary]" target="_blank" class="icon_wrapper">
                <div class="twitter icon"></div>
                <div class="share">Share</div>
            </a>
            <div class="vertical-line"></div>
            <a href="mailto:?subject=Quit%20Note%20from%20Smokefree.gov&body=[url_friendly_include_summary]" target="_blank" class="icon_wrapper">
            	<div class="email icon"></div>
            	<div class="share">Email</div>
            </a>
          </div>';
  $handler->display->display_options['fields']['views_conditional']['or'] = '[field_promo_url]';
  $handler->display->display_options['fields']['views_conditional']['strip_tags'] = 0;
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'reverse_field_includes_sidebar_node';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_includes_sidebar_node';
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
    'include' => 'include',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');

  /* Display: Carousel */
  $handler = $view->new_display('block', 'Carousel', 'carousel');
  $export['quit_notes'] = $view;

  $view = new view();
  $view->name = 'social_share';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Social Share';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Social Share';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Short Summary */
  $handler->display->display_options['fields']['field_short_summary']['id'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['table'] = 'field_data_field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['field'] = 'field_short_summary';
  $handler->display->display_options['fields']['field_short_summary']['label'] = '';
  $handler->display->display_options['fields']['field_short_summary']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_short_summary']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_short_summary']['settings'] = array(
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
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image']['id'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['table'] = 'field_data_field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['field'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['label'] = '';
  $handler->display->display_options['fields']['field_featured_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_featured_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_featured_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_featured_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
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
  /* Field: Content: Path */
  $handler->display->display_options['fields']['path']['id'] = 'path';
  $handler->display->display_options['fields']['path']['table'] = 'node';
  $handler->display->display_options['fields']['path']['field'] = 'path';
  $handler->display->display_options['fields']['path']['label'] = '';
  $handler->display->display_options['fields']['path']['exclude'] = TRUE;
  $handler->display->display_options['fields']['path']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['path']['absolute'] = TRUE;
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['label'] = '';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = '<!-- Sticky Social Icons starts-->
<div class="vert_social hidden-sm hidden-xs" data-spy="affix" data-offset-top="205">
    <div class="share">Share This Page
            <a href=\'http://www.facebook.com/share.php?url=[path]&title=[title]\' target="_blank" class="icon_wrapper">
                    <div class="facebook icon"></div>
            </a>
            <a href="https://twitter.com/intent/tweet?url=[path]&text=[field_short_summary] www.smokefree.gov" target="_blank" class="icon_wrapper">
                <div class="twitter icon"></div>
            </a>
             <a href="mailto:?subject=Smokefree.gov: [title]&body=[path]“%0A%0ASign up for SmokefreeTXT: https://www.smokefree.gov" target="_blank" class="icon_wrapper">
            	<div class="email icon"></div>
            </a>
    </div>
</div>
<!-- Sticky Social Icons ends-->';
  $handler->display->display_options['fields']['nothing']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
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
    'cr_article' => 'cr_article',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $export['social_share'] = $view;

  return $export;
}
