<?php
/**
 * @file
 * icfi_veterans.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function icfi_veterans_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'veterans_home';
  $page->task = 'page';
  $page->admin_title = 'Veterans Home';
  $page->admin_description = '';
  $page->path = 'veterans';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_veterans_home__panel';
  $handler->task = 'page';
  $handler->subtask = 'veterans_home';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Veterans Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => 'veterans-home-panel',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'threecol_33_34_33_stacked';
  $display->layout_settings = array();
  $display->panel_settings = array();
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'efe7101c-a624-44d8-822f-43cdfdc91bcc';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_veterans_home__panel';
  $display->content = array();
  $display->panels = array();
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['veterans_home'] = $page;

  return $pages;

}
