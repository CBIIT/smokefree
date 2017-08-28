<?php
/**
 * @file
 * point_of_sale.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function point_of_sale_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'crave_tip_json';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Crave Tip JSON';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Crave Tip JSON';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'views_json';
  /* Relationship: Nodequeue: Queue */
  $handler->display->display_options['relationships']['nodequeue_rel']['id'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['table'] = 'node';
  $handler->display->display_options['relationships']['nodequeue_rel']['field'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['required'] = TRUE;
  $handler->display->display_options['relationships']['nodequeue_rel']['limit'] = 1;
  $handler->display->display_options['relationships']['nodequeue_rel']['names'] = array(
    'crave_tip' => 'crave_tip',
    'home_nq' => 0,
    'daily_challenge' => 0,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Crave Tip Description */
  $handler->display->display_options['fields']['field_crave_tip_description']['id'] = 'field_crave_tip_description';
  $handler->display->display_options['fields']['field_crave_tip_description']['table'] = 'field_data_field_crave_tip_description';
  $handler->display->display_options['fields']['field_crave_tip_description']['field'] = 'field_crave_tip_description';
  $handler->display->display_options['fields']['field_crave_tip_description']['label'] = '';
  $handler->display->display_options['fields']['field_crave_tip_description']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_crave_tip_description']['settings'] = array(
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
  /* Field: Content: Crave Tip Image */
  $handler->display->display_options['fields']['field_crave_tip_image']['id'] = 'field_crave_tip_image';
  $handler->display->display_options['fields']['field_crave_tip_image']['table'] = 'field_data_field_crave_tip_image';
  $handler->display->display_options['fields']['field_crave_tip_image']['field'] = 'field_crave_tip_image';
  $handler->display->display_options['fields']['field_crave_tip_image']['label'] = '';
  $handler->display->display_options['fields']['field_crave_tip_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_crave_tip_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_crave_tip_image']['settings'] = array(
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
    'crave_tip' => 'crave_tip',
  );
  /* Filter criterion: Nodequeue: In queue */
  $handler->display->display_options['filters']['in_queue']['id'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['table'] = 'nodequeue_nodes';
  $handler->display->display_options['filters']['in_queue']['field'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['relationship'] = 'nodequeue_rel';
  $handler->display->display_options['filters']['in_queue']['value'] = '1';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'crave-tip-json';
  $export['crave_tip_json'] = $view;

  $view = new view();
  $view->name = 'daily_challenge_json';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Daily Challenge JSON';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Daily Challenge JSON';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'views_json';
  /* Relationship: Nodequeue: Queue */
  $handler->display->display_options['relationships']['nodequeue_rel']['id'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['table'] = 'node';
  $handler->display->display_options['relationships']['nodequeue_rel']['field'] = 'nodequeue_rel';
  $handler->display->display_options['relationships']['nodequeue_rel']['required'] = TRUE;
  $handler->display->display_options['relationships']['nodequeue_rel']['limit'] = 1;
  $handler->display->display_options['relationships']['nodequeue_rel']['names'] = array(
    'daily_challenge' => 'daily_challenge',
    'home_nq' => 0,
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
  /* Field: Content: Challenge Description */
  $handler->display->display_options['fields']['field_challenge_description']['id'] = 'field_challenge_description';
  $handler->display->display_options['fields']['field_challenge_description']['table'] = 'field_data_field_challenge_description';
  $handler->display->display_options['fields']['field_challenge_description']['field'] = 'field_challenge_description';
  $handler->display->display_options['fields']['field_challenge_description']['label'] = '';
  $handler->display->display_options['fields']['field_challenge_description']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_challenge_description']['settings'] = array(
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
    'challenge' => 'challenge',
  );
  /* Filter criterion: Nodequeue: In queue */
  $handler->display->display_options['filters']['in_queue']['id'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['table'] = 'nodequeue_nodes';
  $handler->display->display_options['filters']['in_queue']['field'] = 'in_queue';
  $handler->display->display_options['filters']['in_queue']['relationship'] = 'nodequeue_rel';
  $handler->display->display_options['filters']['in_queue']['value'] = '1';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'daily-challenge-json';
  $export['daily_challenge_json'] = $view;

  $view = new view();
  $view->name = 'true_false_quiz_json';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'True False Quiz JSON';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'True False Quiz JSON';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'views_json';
  /* Relationship: Content: Questions (field_questions) */
  $handler->display->display_options['relationships']['field_questions_value']['id'] = 'field_questions_value';
  $handler->display->display_options['relationships']['field_questions_value']['table'] = 'field_data_field_questions';
  $handler->display->display_options['relationships']['field_questions_value']['field'] = 'field_questions_value';
  $handler->display->display_options['relationships']['field_questions_value']['delta'] = '-1';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Quiz Description */
  $handler->display->display_options['fields']['field_quiz_description']['id'] = 'field_quiz_description';
  $handler->display->display_options['fields']['field_quiz_description']['table'] = 'field_data_field_quiz_description';
  $handler->display->display_options['fields']['field_quiz_description']['field'] = 'field_quiz_description';
  $handler->display->display_options['fields']['field_quiz_description']['label'] = '';
  $handler->display->display_options['fields']['field_quiz_description']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_quiz_description']['settings'] = array(
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
  /* Field: Paragraphs item: True Feedback */
  $handler->display->display_options['fields']['field_true_feedback']['id'] = 'field_true_feedback';
  $handler->display->display_options['fields']['field_true_feedback']['table'] = 'field_data_field_true_feedback';
  $handler->display->display_options['fields']['field_true_feedback']['field'] = 'field_true_feedback';
  $handler->display->display_options['fields']['field_true_feedback']['relationship'] = 'field_questions_value';
  $handler->display->display_options['fields']['field_true_feedback']['label'] = '';
  $handler->display->display_options['fields']['field_true_feedback']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_true_feedback']['settings'] = array(
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
  /* Field: Paragraphs item: False Feedback */
  $handler->display->display_options['fields']['field_false_feedback']['id'] = 'field_false_feedback';
  $handler->display->display_options['fields']['field_false_feedback']['table'] = 'field_data_field_false_feedback';
  $handler->display->display_options['fields']['field_false_feedback']['field'] = 'field_false_feedback';
  $handler->display->display_options['fields']['field_false_feedback']['relationship'] = 'field_questions_value';
  $handler->display->display_options['fields']['field_false_feedback']['label'] = '';
  $handler->display->display_options['fields']['field_false_feedback']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_false_feedback']['settings'] = array(
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
  /* Field: Paragraphs item: Correct Answer */
  $handler->display->display_options['fields']['field_correct_answer']['id'] = 'field_correct_answer';
  $handler->display->display_options['fields']['field_correct_answer']['table'] = 'field_data_field_correct_answer';
  $handler->display->display_options['fields']['field_correct_answer']['field'] = 'field_correct_answer';
  $handler->display->display_options['fields']['field_correct_answer']['relationship'] = 'field_questions_value';
  $handler->display->display_options['fields']['field_correct_answer']['label'] = '';
  $handler->display->display_options['fields']['field_correct_answer']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_correct_answer']['settings'] = array(
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
  /* Field: Paragraphs item: Statement */
  $handler->display->display_options['fields']['field_statement']['id'] = 'field_statement';
  $handler->display->display_options['fields']['field_statement']['table'] = 'field_data_field_statement';
  $handler->display->display_options['fields']['field_statement']['field'] = 'field_statement';
  $handler->display->display_options['fields']['field_statement']['relationship'] = 'field_questions_value';
  $handler->display->display_options['fields']['field_statement']['label'] = '';
  $handler->display->display_options['fields']['field_statement']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_statement']['settings'] = array(
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
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Title */
  $handler->display->display_options['arguments']['title']['id'] = 'title';
  $handler->display->display_options['arguments']['title']['table'] = 'node';
  $handler->display->display_options['arguments']['title']['field'] = 'title';
  $handler->display->display_options['arguments']['title']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['title']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['title']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['title']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['title']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['title']['limit'] = '0';
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
    'true_false_quiz' => 'true_false_quiz',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'questions');
  $handler->display->display_options['path'] = 'true-false-quiz-json-questions';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Content: Results (field_results) */
  $handler->display->display_options['relationships']['field_results_value']['id'] = 'field_results_value';
  $handler->display->display_options['relationships']['field_results_value']['table'] = 'field_data_field_results';
  $handler->display->display_options['relationships']['field_results_value']['field'] = 'field_results_value';
  $handler->display->display_options['relationships']['field_results_value']['required'] = TRUE;
  $handler->display->display_options['relationships']['field_results_value']['delta'] = '-1';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Paragraphs item: Number Correct */
  $handler->display->display_options['fields']['field_number_correct']['id'] = 'field_number_correct';
  $handler->display->display_options['fields']['field_number_correct']['table'] = 'field_data_field_number_correct';
  $handler->display->display_options['fields']['field_number_correct']['field'] = 'field_number_correct';
  $handler->display->display_options['fields']['field_number_correct']['relationship'] = 'field_results_value';
  $handler->display->display_options['fields']['field_number_correct']['label'] = '';
  $handler->display->display_options['fields']['field_number_correct']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_number_correct']['settings'] = array(
    'thousand_separator' => '',
    'prefix_suffix' => 1,
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
  /* Field: Paragraphs item: Result Message */
  $handler->display->display_options['fields']['field_result_message']['id'] = 'field_result_message';
  $handler->display->display_options['fields']['field_result_message']['table'] = 'field_data_field_result_message';
  $handler->display->display_options['fields']['field_result_message']['field'] = 'field_result_message';
  $handler->display->display_options['fields']['field_result_message']['relationship'] = 'field_results_value';
  $handler->display->display_options['fields']['field_result_message']['label'] = '';
  $handler->display->display_options['fields']['field_result_message']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_result_message']['settings'] = array(
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
  /* Contextual filter: Content: Title */
  $handler->display->display_options['arguments']['title']['id'] = 'title';
  $handler->display->display_options['arguments']['title']['table'] = 'node';
  $handler->display->display_options['arguments']['title']['field'] = 'title';
  $handler->display->display_options['arguments']['title']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['title']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['title']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['title']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['title']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['title']['limit'] = '0';
  $handler->display->display_options['path'] = 'true-false-quiz-json-answers';
  $export['true_false_quiz_json'] = $view;

  return $export;
}
