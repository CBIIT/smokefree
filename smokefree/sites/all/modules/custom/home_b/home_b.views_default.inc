<?php
/**
 * @file
 * home_b.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function home_b_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'home_b';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Home B';
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
  /* Field: Content: Header Block Image */
  $handler->display->display_options['fields']['field_header_block_image']['id'] = 'field_header_block_image';
  $handler->display->display_options['fields']['field_header_block_image']['table'] = 'field_data_field_header_block_image';
  $handler->display->display_options['fields']['field_header_block_image']['field'] = 'field_header_block_image';
  $handler->display->display_options['fields']['field_header_block_image']['label'] = '';
  $handler->display->display_options['fields']['field_header_block_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_header_block_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_header_block_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_header_block_image']['settings'] = array(
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
  $handler->display->display_options['fields']['field_quit_paragraph']['alter']['text'] = '<div class="title">[field_quit_title]</div>
<div class="subtitle">[field_quit_paragraph]</div>';
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
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
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
  $handler->display->display_options['title'] = '<none>';
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
  /* Header: Global: View area */
  $handler->display->display_options['header']['view']['id'] = 'view';
  $handler->display->display_options['header']['view']['table'] = 'views';
  $handler->display->display_options['header']['view']['field'] = 'view';
  $handler->display->display_options['header']['view']['empty'] = TRUE;
  $handler->display->display_options['header']['view']['view_to_insert'] = 'home_b:block_2';
  /* Header: Global: View (Views field view) */
  $handler->display->display_options['header']['view_field_1']['id'] = 'view_field_1';
  $handler->display->display_options['header']['view_field_1']['table'] = 'views';
  $handler->display->display_options['header']['view_field_1']['field'] = 'view_field';
  $handler->display->display_options['header']['view_field_1']['label'] = '';
  $handler->display->display_options['header']['view_field_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['header']['view_field_1']['view'] = 'home_b';
  $handler->display->display_options['header']['view_field_1']['display'] = 'block_1';
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
  /* Field: Content: Ways to Get Support */
  $handler->display->display_options['fields']['field_ways_to_get_support']['id'] = 'field_ways_to_get_support';
  $handler->display->display_options['fields']['field_ways_to_get_support']['table'] = 'field_data_field_ways_to_get_support';
  $handler->display->display_options['fields']['field_ways_to_get_support']['field'] = 'field_ways_to_get_support';
  $handler->display->display_options['fields']['field_ways_to_get_support']['label'] = '';
  $handler->display->display_options['fields']['field_ways_to_get_support']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_ways_to_get_support']['settings'] = array(
    'add' => 'Add',
    'edit' => 'Edit',
    'translate' => '',
    'delete' => 'Delete',
    'description' => 1,
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
  $handler->display->display_options['fields']['views_conditional']['exclude'] = TRUE;
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
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  $handler->display->display_options['path'] = 'home_b/default-home';

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
  /* Field: Content: Button Active Link */
  $handler->display->display_options['fields']['field_button_active_link']['id'] = 'field_button_active_link';
  $handler->display->display_options['fields']['field_button_active_link']['table'] = 'field_data_field_button_active_link';
  $handler->display->display_options['fields']['field_button_active_link']['field'] = 'field_button_active_link';
  $handler->display->display_options['fields']['field_button_active_link']['label'] = '';
  $handler->display->display_options['fields']['field_button_active_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_active_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_active_link']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_button_active_link']['settings'] = array(
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
  /* Field: Content: Button Active Link Image */
  $handler->display->display_options['fields']['field_button_active_link_image']['id'] = 'field_button_active_link_image';
  $handler->display->display_options['fields']['field_button_active_link_image']['table'] = 'field_data_field_button_active_link_image';
  $handler->display->display_options['fields']['field_button_active_link_image']['field'] = 'field_button_active_link_image';
  $handler->display->display_options['fields']['field_button_active_link_image']['label'] = '';
  $handler->display->display_options['fields']['field_button_active_link_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_active_link_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_active_link_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_button_active_link_image']['settings'] = array(
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
  /* Field: Content: Button Active Text */
  $handler->display->display_options['fields']['field_button_active_text']['id'] = 'field_button_active_text';
  $handler->display->display_options['fields']['field_button_active_text']['table'] = 'field_data_field_button_active_text';
  $handler->display->display_options['fields']['field_button_active_text']['field'] = 'field_button_active_text';
  $handler->display->display_options['fields']['field_button_active_text']['label'] = '';
  $handler->display->display_options['fields']['field_button_active_text']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_active_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_active_text']['settings'] = array(
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
  /* Field: Content: Button Active Title */
  $handler->display->display_options['fields']['field_button_active_title']['id'] = 'field_button_active_title';
  $handler->display->display_options['fields']['field_button_active_title']['table'] = 'field_data_field_button_active_title';
  $handler->display->display_options['fields']['field_button_active_title']['field'] = 'field_button_active_title';
  $handler->display->display_options['fields']['field_button_active_title']['label'] = '';
  $handler->display->display_options['fields']['field_button_active_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_active_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_active_title']['settings'] = array(
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
  /* Field: Content: Button Background Image */
  $handler->display->display_options['fields']['field_button_background_image']['id'] = 'field_button_background_image';
  $handler->display->display_options['fields']['field_button_background_image']['table'] = 'field_data_field_button_background_image';
  $handler->display->display_options['fields']['field_button_background_image']['field'] = 'field_button_background_image';
  $handler->display->display_options['fields']['field_button_background_image']['label'] = '';
  $handler->display->display_options['fields']['field_button_background_image']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_button_background_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_button_background_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_button_background_image']['settings'] = array(
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
  /* Field: Content: Button Link */
  $handler->display->display_options['fields']['field_button_link']['id'] = 'field_button_link';
  $handler->display->display_options['fields']['field_button_link']['table'] = 'field_data_field_button_link';
  $handler->display->display_options['fields']['field_button_link']['field'] = 'field_button_link';
  $handler->display->display_options['fields']['field_button_link']['label'] = '';
  $handler->display->display_options['fields']['field_button_link']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_button_link']['alter']['text'] = '<span class="glyphicon glyphicon-remove"></span><div class="btn-img btn-img-[field_button_link-value]"><a class="top_button_link" data-id="[nid]" href="#[nid]_intro">[field_button_text]</a><div class="active-content"><h3>[field_button_active_title]</h3><p>[field_button_active_text]</p>[field_button_active_link_image][field_button_active_link]</div></div>';
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

  /* Display: Header banners */
  $handler = $view->new_display('block', 'Header banners', 'block_2');
  $export['home_b'] = $view;

  return $export;
}
