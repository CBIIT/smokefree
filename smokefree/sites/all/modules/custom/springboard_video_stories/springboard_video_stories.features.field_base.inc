<?php
/**
 * @file
 * springboard_video_stories.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function springboard_video_stories_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_springboard_video_descript'.
  $field_bases['field_springboard_video_descript'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_springboard_video_descript',
    'indexes' => array(
      'format' => array(
        0 => 'format',
      ),
    ),
    'locked' => 0,
    'module' => 'text',
    'settings' => array(),
    'translatable' => 0,
    'type' => 'text_long',
  );

  // Exported field_base: 'field_springboard_video_link'.
  $field_bases['field_springboard_video_link'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_springboard_video_link',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'video_embed_field',
    'settings' => array(),
    'translatable' => 0,
    'type' => 'video_embed_field',
  );

  return $field_bases;
}
