<?php
/**
 * @file
 * icfi_tophat_menu.box.inc
 */

/**
 * Implements hook_default_box().
 */
function icfi_tophat_menu_default_box() {
  $export = array();

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'ss_search_bar';
  $box->plugin_key = 'simple';
  $box->title = '';
  $box->description = 'SS Search Bar';
  $box->options = array(
    'body' => array(
      'value' => '<button class="header-search-form__toggle"><span class="sr-only">Open the Search Form</span></button>
<div class="search-overlay">
				<form>
					<div class="search-icon"></div>
					<div class="search-field-wrapper">
						<input placeholder="Search Smokefree" type="text" value="" size="50" maxlength="128" class="form-control">
					</div> <!-- /.search-field-wrapper -->
					<button type="submit" value="Search" class="btn btn-submit">Go</button>
					<button type="close" value="close" class="btn btn-close">
						<span class="glyphicon glyphicon-remove-circle"></span>
						<span class="sr-only">Close Search</span>
					</button>
				</form>
			</div>',
      'format' => 'raw_html',
    ),
  );
  $export['ss_search_bar'] = $box;

  return $export;
}
