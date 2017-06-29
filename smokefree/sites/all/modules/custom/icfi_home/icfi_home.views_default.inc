<?php
/**
 * @file
 * icfi_home.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function icfi_home_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'articles_upper';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Homepage Articles';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Articles';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '3';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['id'] = 'reverse_field_article_info_1_node';
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['field'] = 'reverse_field_article_info_1_node';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['id'] = 'reverse_field_article_info_2_node';
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['field'] = 'reverse_field_article_info_2_node';
  /* Field: Content: Featured Image */
  $handler->display->display_options['fields']['field_featured_image']['id'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['table'] = 'field_data_field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['field'] = 'field_featured_image';
  $handler->display->display_options['fields']['field_featured_image']['label'] = '';
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
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title_1']['alter']['text'] = 'READ MORE';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Nid */
  $handler->display->display_options['sorts']['nid']['id'] = 'nid';
  $handler->display->display_options['sorts']['nid']['table'] = 'node';
  $handler->display->display_options['sorts']['nid']['field'] = 'nid';
  $handler->display->display_options['sorts']['nid']['relationship'] = 'reverse_field_article_info_1_node';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_article_info_1_node';
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

  /* Display: Articles Upper */
  $handler = $view->new_display('block', 'Articles Upper', 'block');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['id'] = 'reverse_field_article_info_1_node';
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_article_info_1_node']['field'] = 'reverse_field_article_info_1_node';

  /* Display: Articles Lower */
  $handler = $view->new_display('block', 'Articles Lower', 'block_1');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['id'] = 'reverse_field_article_info_2_node';
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_article_info_2_node']['field'] = 'reverse_field_article_info_2_node';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_article_info_2_node';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $export['articles_upper'] = $view;

  $view = new view();
  $view->name = 'home';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Home';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Home';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = '[nid]';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Nodequeue: Queue */
  $handler->display->display_options['relationships']['nodequeue_rel']['id'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['table'] = 'node';
  $handler->display->display_options['relationships']['nodequeue_rel']['field'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['limit'] = 1;
  $handler->display->display_options['relationships']['nodequeue_rel']['names'] = array(
    'home_nq' => 'home_nq',
  );
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Button image */
  $handler->display->display_options['fields']['field_button_image']['id'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['table'] = 'field_data_field_button_image';
  $handler->display->display_options['fields']['field_button_image']['field'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['label'] = '';
  $handler->display->display_options['fields']['field_button_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_button_image']['settings'] = array(
    'image_style' => 'thumbnail',
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
  /* Field: Content: Button text */
  $handler->display->display_options['fields']['field_button_text']['id'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['table'] = 'field_data_field_button_text';
  $handler->display->display_options['fields']['field_button_text']['field'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['label'] = '';
  $handler->display->display_options['fields']['field_button_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_button_text']['alter']['text'] = '<div class="btn-img-[nid]">[field_button_image][field_button_text]</div>';
  $handler->display->display_options['fields']['field_button_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_text']['settings'] = array(
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
  /* Field: Content: Introductory Block Title */
  $handler->display->display_options['fields']['field_quit_title']['id'] = 'field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['table'] = 'field_data_field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['field'] = 'field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['label'] = '';
  $handler->display->display_options['fields']['field_quit_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_quit_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_quit_title']['settings'] = array(
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
  /* Field: Content: Introductory Block Subtitle */
  $handler->display->display_options['fields']['field_quit_paragraph']['id'] = 'field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['table'] = 'field_data_field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['field'] = 'field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['label'] = '';
  $handler->display->display_options['fields']['field_quit_paragraph']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_quit_paragraph']['alter']['text'] = '<div class="col-md-5 col-sm-11 hero-copy-b">
<h1>[field_quit_title]</h1>
<p>[field_quit_paragraph]</p>
</div>';
  $handler->display->display_options['fields']['field_quit_paragraph']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_quit_paragraph']['settings'] = array(
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
  /* Field: Content: Introductory Block Body Title */
  $handler->display->display_options['fields']['field_blue_box_title']['id'] = 'field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['table'] = 'field_data_field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['field'] = 'field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['label'] = '';
  $handler->display->display_options['fields']['field_blue_box_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_blue_box_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_blue_box_title']['settings'] = array(
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
  /* Field: Content: Introductory Block Icon */
  $handler->display->display_options['fields']['field_phone_icon']['id'] = 'field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['table'] = 'field_data_field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['field'] = 'field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['label'] = '';
  $handler->display->display_options['fields']['field_phone_icon']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_phone_icon']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_phone_icon']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_phone_icon']['settings'] = array(
    'image_style' => 'thumbnail',
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
  /* Field: Content: Introductory Block Link */
  $handler->display->display_options['fields']['field_phone_link']['id'] = 'field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['table'] = 'field_data_field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['field'] = 'field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['label'] = '';
  $handler->display->display_options['fields']['field_phone_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_phone_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_phone_link']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_phone_link']['settings'] = array(
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
  /* Field: Content: Introductory Block Body Text */
  $handler->display->display_options['fields']['field_blue_box_text']['id'] = 'field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['table'] = 'field_data_field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['field'] = 'field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['label'] = '';
  $handler->display->display_options['fields']['field_blue_box_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_blue_box_text']['alter']['text'] = '<div class="col-md-7 col-sm-12 cta-box-b">
    	<div class="col-sm-8">
<h2>[field_blue_box_title]</h2>
<p>[field_blue_box_text]</p>
</div>
<div class="col-sm-4">
[field_phone_icon]
[field_phone_link] 
</div>
</div>';
  $handler->display->display_options['fields']['field_blue_box_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_blue_box_text']['settings'] = array(
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
  /* Field: Content: Tools Tips title */
  $handler->display->display_options['fields']['field_tools_tips_title']['id'] = 'field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['table'] = 'field_data_field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['field'] = 'field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_title']['settings'] = array(
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
  /* Field: Content: Tools Tips subtitle */
  $handler->display->display_options['fields']['field_tools_tips_text']['id'] = 'field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['table'] = 'field_data_field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['field'] = 'field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_text']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_text']['settings'] = array(
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
  /* Field: Content: Tools Tips link */
  $handler->display->display_options['fields']['field_tools_tips_link']['id'] = 'field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['table'] = 'field_data_field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['field'] = 'field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_link']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_link']['alter']['text'] = '<div class="row">
<div class="col-md-3 col-sm-12">
    	<h2 class="toolh2">[field_tools_tips_title]</h2>
<p class="toolp hidden-sm hidden-xs">[field_tools_tips_text]</p>
</div>
<div class="col-md-9">
[field_tools_tips_link] 
</div>
</div>';
  $handler->display->display_options['fields']['field_tools_tips_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_link']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_link']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_tools_tips_link']['settings'] = array(
    'view_mode' => 'full',
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
  $handler->display->display_options['fields']['field_tools_tips_link']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_tools_tips_link']['multi_type'] = 'ul';
  /* Field: Global: View */
  $handler->display->display_options['fields']['view']['id'] = 'view';
  $handler->display->display_options['fields']['view']['table'] = 'views';
  $handler->display->display_options['fields']['view']['field'] = 'view';
  $handler->display->display_options['fields']['view']['label'] = '';
  $handler->display->display_options['fields']['view']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['view']['view'] = 'articles_upper';
  $handler->display->display_options['fields']['view']['display'] = 'block';
  $handler->display->display_options['fields']['view']['arguments'] = '[!nid]';
  /* Field: Content: Includes */
  $handler->display->display_options['fields']['field_includes']['id'] = 'field_includes';
  $handler->display->display_options['fields']['field_includes']['table'] = 'field_data_field_includes';
  $handler->display->display_options['fields']['field_includes']['field'] = 'field_includes';
  $handler->display->display_options['fields']['field_includes']['label'] = '';
  $handler->display->display_options['fields']['field_includes']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_includes']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_includes']['settings'] = array(
    'view_mode' => 'full',
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
  /* Field: Global: View */
  $handler->display->display_options['fields']['view_1']['id'] = 'view_1';
  $handler->display->display_options['fields']['view_1']['table'] = 'views';
  $handler->display->display_options['fields']['view_1']['field'] = 'view';
  $handler->display->display_options['fields']['view_1']['label'] = '';
  $handler->display->display_options['fields']['view_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view_1']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['view_1']['view'] = 'articles_upper';
  $handler->display->display_options['fields']['view_1']['display'] = 'block_1';
  $handler->display->display_options['fields']['view_1']['arguments'] = '[!nid]';
  /* Field: Content: Includes */
  $handler->display->display_options['fields']['field_includes_2']['id'] = 'field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['table'] = 'field_data_field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['field'] = 'field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['label'] = '';
  $handler->display->display_options['fields']['field_includes_2']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_includes_2']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_includes_2']['settings'] = array(
    'view_mode' => 'full',
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
  /* Sort criterion: Nodequeue: Position */
  $handler->display->display_options['sorts']['position']['id'] = 'position';
  $handler->display->display_options['sorts']['position']['table'] = 'nodequeue_nodes';
  $handler->display->display_options['sorts']['position']['field'] = 'position';
  $handler->display->display_options['sorts']['position']['relationship'] = 'nodequeue_rel';
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
    'home' => 'home',
  );
  /* Filter criterion: Nodequeue: In queue */
  $handler->display->display_options['filters']['in_queue']['id'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['table'] = 'nodequeue_nodes';
  $handler->display->display_options['filters']['in_queue']['field'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['relationship'] = 'nodequeue_rel';
  $handler->display->display_options['filters']['in_queue']['value'] = '1';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Home';
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = '[nid] content_area';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: View (Views field view) */
  $handler->display->display_options['header']['view_field']['id'] = 'view_field';
  $handler->display->display_options['header']['view_field']['table'] = 'views';
  $handler->display->display_options['header']['view_field']['field'] = 'view_field';
  $handler->display->display_options['header']['view_field']['label'] = '';
  $handler->display->display_options['header']['view_field']['element_label_colon'] = FALSE;
  $handler->display->display_options['header']['view_field']['view'] = 'home';
  $handler->display->display_options['header']['view_field']['display'] = 'block_1';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Active Button Headline */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['ui_name'] = 'Active Button Headline';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['alter']['text'] = '<a name="[nid]_headline" id="[nid]_headline"></a>
<div class="active_button_headline">
  [title_1]
</div>';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Views: Views Conditional */
  $handler->display->display_options['fields']['views_conditional']['id'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['table'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['field'] = 'views_conditional';
  $handler->display->display_options['fields']['views_conditional']['label'] = '';
  $handler->display->display_options['fields']['views_conditional']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['views_conditional']['if'] = 'title_1';
  $handler->display->display_options['fields']['views_conditional']['condition'] = '1';
  $handler->display->display_options['fields']['views_conditional']['equalto'] = 'Default Home';
  $handler->display->display_options['fields']['views_conditional']['or'] = '<a name="[nid]_headline" id="[nid]_headline"></a>
<div class="active_button_headline">
  [title_1]
</div>';
  $handler->display->display_options['fields']['views_conditional']['strip_tags'] = 0;
  /* Field: Content: Button image */
  $handler->display->display_options['fields']['field_button_image']['id'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['table'] = 'field_data_field_button_image';
  $handler->display->display_options['fields']['field_button_image']['field'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['label'] = '';
  $handler->display->display_options['fields']['field_button_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_button_image']['settings'] = array(
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
  /* Field: Content: Button text */
  $handler->display->display_options['fields']['field_button_text']['id'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['table'] = 'field_data_field_button_text';
  $handler->display->display_options['fields']['field_button_text']['field'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['label'] = '';
  $handler->display->display_options['fields']['field_button_text']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_button_text']['alter']['text'] = '<div class="btn-img-[nid]">[field_button_image][field_button_text]</div>';
  $handler->display->display_options['fields']['field_button_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_text']['settings'] = array(
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
  /* Field: Content: Introductory Block Title */
  $handler->display->display_options['fields']['field_quit_title']['id'] = 'field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['table'] = 'field_data_field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['field'] = 'field_quit_title';
  $handler->display->display_options['fields']['field_quit_title']['label'] = '';
  $handler->display->display_options['fields']['field_quit_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_quit_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_quit_title']['settings'] = array(
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
  /* Field: Content: Introductory Block Subtitle */
  $handler->display->display_options['fields']['field_quit_paragraph']['id'] = 'field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['table'] = 'field_data_field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['field'] = 'field_quit_paragraph';
  $handler->display->display_options['fields']['field_quit_paragraph']['label'] = '';
  $handler->display->display_options['fields']['field_quit_paragraph']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_quit_paragraph']['alter']['text'] = '<div class="col-md-5 col-sm-11 hero-copy-b">
<h1>[field_quit_title]</h1>
<p>[field_quit_paragraph]</p>
</div>';
  $handler->display->display_options['fields']['field_quit_paragraph']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_quit_paragraph']['settings'] = array(
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
  /* Field: Content: Introductory Block Body Title */
  $handler->display->display_options['fields']['field_blue_box_title']['id'] = 'field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['table'] = 'field_data_field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['field'] = 'field_blue_box_title';
  $handler->display->display_options['fields']['field_blue_box_title']['label'] = '';
  $handler->display->display_options['fields']['field_blue_box_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_blue_box_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_blue_box_title']['settings'] = array(
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
  /* Field: Content: Introductory Block Icon */
  $handler->display->display_options['fields']['field_phone_icon']['id'] = 'field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['table'] = 'field_data_field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['field'] = 'field_phone_icon';
  $handler->display->display_options['fields']['field_phone_icon']['label'] = '';
  $handler->display->display_options['fields']['field_phone_icon']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_phone_icon']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_phone_icon']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_phone_icon']['settings'] = array(
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
  /* Field: Content: Introductory Block Link */
  $handler->display->display_options['fields']['field_phone_link']['id'] = 'field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['table'] = 'field_data_field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['field'] = 'field_phone_link';
  $handler->display->display_options['fields']['field_phone_link']['label'] = '';
  $handler->display->display_options['fields']['field_phone_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_phone_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_phone_link']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_phone_link']['settings'] = array(
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
  /* Field: Content: Introductory Block Body Text */
  $handler->display->display_options['fields']['field_blue_box_text']['id'] = 'field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['table'] = 'field_data_field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['field'] = 'field_blue_box_text';
  $handler->display->display_options['fields']['field_blue_box_text']['label'] = '';
  $handler->display->display_options['fields']['field_blue_box_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_blue_box_text']['alter']['text'] = '<div class="col-sm-12 intro-block">
<div class="col-md-5 col-sm-11 hero-copy-b">
<h1>[field_quit_title]</h1>
<p>[field_quit_paragraph]</p>
</div>
<div class="col-md-7 col-sm-12 cta-box-b">
    	<div class="col-sm-8">
<h2>[field_blue_box_title]</h2>
<p>[field_blue_box_text]</p>
</div>
<div class="col-sm-4">
[field_phone_icon]
[field_phone_link] 
</div>
</div>
</div>';
  $handler->display->display_options['fields']['field_blue_box_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_blue_box_text']['settings'] = array(
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
  /* Field: Content: Tools Tips title */
  $handler->display->display_options['fields']['field_tools_tips_title']['id'] = 'field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['table'] = 'field_data_field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['field'] = 'field_tools_tips_title';
  $handler->display->display_options['fields']['field_tools_tips_title']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_title']['settings'] = array(
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
  /* Field: Content: Tools Tips subtitle */
  $handler->display->display_options['fields']['field_tools_tips_text']['id'] = 'field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['table'] = 'field_data_field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['field'] = 'field_tools_tips_text';
  $handler->display->display_options['fields']['field_tools_tips_text']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_text']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_text']['alter']['text'] = '<div class="col-md-3 col-sm-12">
    	<h2 class="toolh2">[field_tools_tips_title]</h2>
<p class="toolp hidden-sm hidden-xs">[field_tools_tips_text]</p>
</div>';
  $handler->display->display_options['fields']['field_tools_tips_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_text']['settings'] = array(
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
  /* Field: Content: Tools Tips link */
  $handler->display->display_options['fields']['field_tools_tips_link']['id'] = 'field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['table'] = 'field_data_field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['field'] = 'field_tools_tips_link';
  $handler->display->display_options['fields']['field_tools_tips_link']['label'] = '';
  $handler->display->display_options['fields']['field_tools_tips_link']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_tools_tips_link']['alter']['text'] = '<div class="col-md-9 tool-tip-[field_tools_tips_link-value]">
[field_tools_tips_link] 
</div>';
  $handler->display->display_options['fields']['field_tools_tips_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_tools_tips_link']['element_wrapper_class'] = 'tools-n-tips-icon-links';
  $handler->display->display_options['fields']['field_tools_tips_link']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_tools_tips_link']['settings'] = array(
    'view_mode' => 'full',
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
  $handler->display->display_options['fields']['field_tools_tips_link']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_tools_tips_link']['multi_type'] = 'ul';
  /* Field: Global: View */
  $handler->display->display_options['fields']['view']['id'] = 'view';
  $handler->display->display_options['fields']['view']['table'] = 'views';
  $handler->display->display_options['fields']['view']['field'] = 'view';
  $handler->display->display_options['fields']['view']['label'] = 'ARTICLES & INFORMATION';
  $handler->display->display_options['fields']['view']['element_label_class'] = 'feed-title';
  $handler->display->display_options['fields']['view']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view']['element_wrapper_class'] = 'global-view-articles-upper';
  $handler->display->display_options['fields']['view']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['view']['view'] = 'articles_upper';
  $handler->display->display_options['fields']['view']['display'] = 'block';
  $handler->display->display_options['fields']['view']['arguments'] = '[!nid]';
  /* Field: Content: Includes */
  $handler->display->display_options['fields']['field_includes']['id'] = 'field_includes';
  $handler->display->display_options['fields']['field_includes']['table'] = 'field_data_field_includes';
  $handler->display->display_options['fields']['field_includes']['field'] = 'field_includes';
  $handler->display->display_options['fields']['field_includes']['label'] = '';
  $handler->display->display_options['fields']['field_includes']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_includes']['alter']['text'] = '<div class="include-upper">
[field_includes]
</div>';
  $handler->display->display_options['fields']['field_includes']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_includes']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_includes']['settings'] = array(
    'view_mode' => 'full',
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
  /* Field: Global: View */
  $handler->display->display_options['fields']['view_1']['id'] = 'view_1';
  $handler->display->display_options['fields']['view_1']['table'] = 'views';
  $handler->display->display_options['fields']['view_1']['field'] = 'view';
  $handler->display->display_options['fields']['view_1']['label'] = '';
  $handler->display->display_options['fields']['view_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['view_1']['element_wrapper_class'] = 'global-view-articles-bottom';
  $handler->display->display_options['fields']['view_1']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['view_1']['view'] = 'articles_upper';
  $handler->display->display_options['fields']['view_1']['display'] = 'block_1';
  $handler->display->display_options['fields']['view_1']['arguments'] = '[!nid]';
  /* Field: Content: Includes */
  $handler->display->display_options['fields']['field_includes_2']['id'] = 'field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['table'] = 'field_data_field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['field'] = 'field_includes_2';
  $handler->display->display_options['fields']['field_includes_2']['label'] = '';
  $handler->display->display_options['fields']['field_includes_2']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_includes_2']['alter']['text'] = '<div class="include-bottom">
[field_includes_2]
</div>';
  $handler->display->display_options['fields']['field_includes_2']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_includes_2']['type'] = 'field_collection_fields';
  $handler->display->display_options['fields']['field_includes_2']['settings'] = array(
    'view_mode' => 'full',
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
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  $handler->display->display_options['path'] = 'home/default-home';

  /* Display: Button */
  $handler = $view->new_display('block', 'Button', 'block_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['nid']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Button image */
  $handler->display->display_options['fields']['field_button_image']['id'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['table'] = 'field_data_field_button_image';
  $handler->display->display_options['fields']['field_button_image']['field'] = 'field_button_image';
  $handler->display->display_options['fields']['field_button_image']['label'] = '';
  $handler->display->display_options['fields']['field_button_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_button_image']['settings'] = array(
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
  /* Field: Content: Button text */
  $handler->display->display_options['fields']['field_button_text']['id'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['table'] = 'field_data_field_button_text';
  $handler->display->display_options['fields']['field_button_text']['field'] = 'field_button_text';
  $handler->display->display_options['fields']['field_button_text']['label'] = '';
  $handler->display->display_options['fields']['field_button_text']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_text']['alter']['text'] = '<div class="btn-img-[nid]">[field_button_image][field_button_text]</div>';
  $handler->display->display_options['fields']['field_button_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_text']['settings'] = array(
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
  /* Field: Content: Button Link */
  $handler->display->display_options['fields']['field_button_link']['id'] = 'field_button_link';
  $handler->display->display_options['fields']['field_button_link']['table'] = 'field_data_field_button_link';
  $handler->display->display_options['fields']['field_button_link']['field'] = 'field_button_link';
  $handler->display->display_options['fields']['field_button_link']['label'] = '';
  $handler->display->display_options['fields']['field_button_link']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_button_link']['alter']['text'] = '<span class="glyphicon glyphicon-remove"></span><div class="btn-img btn-img-[field_button_link-value]"><a class="top_button_link" data-id="[nid]" href="#[nid]_intro"><div class="home-icon-wrapper">[field_button_image]</div>[field_button_text]</a></div>';
  $handler->display->display_options['fields']['field_button_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_link']['settings'] = array(
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
  $export['home'] = $view;

  return $export;
}
