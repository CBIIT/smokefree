<?php
/**
 * @file
 * springboard_video_stories.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function springboard_video_stories_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'springboard_video_stories';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Springboard Video Stories';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Springboard Video Stories';
  $handler->display->display_options['css_class'] = 'container';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '6';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['content'] = '<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<h1>Video Stories from Cancer Survivors</h1>
			<p class="intro">Watch cancer survivors share their stories about having cancer and find out how they coped with challenges.</p>
		</div> <!-- end column -->
	</div> <!-- end row -->
</div> <!-- end container -->';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
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
  /* Field: Content: Springboard Video Link */
  $handler->display->display_options['fields']['field_springboard_video_link']['id'] = 'field_springboard_video_link';
  $handler->display->display_options['fields']['field_springboard_video_link']['table'] = 'field_data_field_springboard_video_link';
  $handler->display->display_options['fields']['field_springboard_video_link']['field'] = 'field_springboard_video_link';
  $handler->display->display_options['fields']['field_springboard_video_link']['label'] = '';
  $handler->display->display_options['fields']['field_springboard_video_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_springboard_video_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_springboard_video_link']['click_sort_column'] = 'video_url';
  $handler->display->display_options['fields']['field_springboard_video_link']['settings'] = array(
    'video_style' => 'normal',
  );
  /* Field: Content: Springboard Video Description */
  $handler->display->display_options['fields']['field_springboard_video_descript']['id'] = 'field_springboard_video_descript';
  $handler->display->display_options['fields']['field_springboard_video_descript']['table'] = 'field_data_field_springboard_video_descript';
  $handler->display->display_options['fields']['field_springboard_video_descript']['field'] = 'field_springboard_video_descript';
  $handler->display->display_options['fields']['field_springboard_video_descript']['label'] = '';
  $handler->display->display_options['fields']['field_springboard_video_descript']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_springboard_video_descript']['alter']['text'] = '<div class="container">
   <div class="row">
		<div class="col-md-12"><h2>[title]</h2></div>
		<div class="col-md-8">
			<div class="embed-responsive embed-responsive-16by9">
  				[field_springboard_video_link]
			</div> <!-- end youtube embed -->
		</div>
		<div class="col-md-4">[field_springboard_video_descript]</div>
		<div class="col-md-12"><hr class="deck-divider"></div>
	</div> <!-- end row -->
</div> <!-- end container -->';
  $handler->display->display_options['fields']['field_springboard_video_descript']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
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
    'springboard_video' => 'springboard_video',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'springboard/video-stories.html';
  $export['springboard_video_stories'] = $view;

  return $export;
}
