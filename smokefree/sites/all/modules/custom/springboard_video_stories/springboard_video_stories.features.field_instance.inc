<?php
/**
 * @file
 * springboard_video_stories.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function springboard_video_stories_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance:
  // 'node-springboard_video-field_springboard_video_descript'.
  $field_instances['node-springboard_video-field_springboard_video_descript'] = array(
    'bundle' => 'springboard_video',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_springboard_video_descript',
    'label' => 'Springboard Video Description',
    'required' => 1,
    'settings' => array(
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 5,
      ),
      'type' => 'text_textarea',
      'weight' => 43,
    ),
  );

  // Exported field_instance:
  // 'node-springboard_video-field_springboard_video_link'.
  $field_instances['node-springboard_video-field_springboard_video_link'] = array(
    'bundle' => 'springboard_video',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'video_embed_field',
        'settings' => array(
          'description' => 1,
          'description_position' => 'bottom',
          'video_style' => 'normal',
        ),
        'type' => 'video_embed_field',
        'weight' => 1,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_springboard_video_link',
    'label' => 'Springboard Video Link',
    'required' => 1,
    'settings' => array(
      'allowed_providers' => array(
        'vimeo' => 0,
        'youtube' => 'youtube',
      ),
      'description_field' => 0,
      'description_length' => 128,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'video_embed_field',
      'settings' => array(),
      'type' => 'video_embed_field_video',
      'weight' => 42,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Springboard Video Description');
  t('Springboard Video Link');

  return $field_instances;
}
