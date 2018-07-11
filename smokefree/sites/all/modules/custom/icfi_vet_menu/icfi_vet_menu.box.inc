<?php
/**
 * @file
 * icfi_vet_menu.box.inc
 */

/**
 * Implements hook_default_box().
 */
function icfi_vet_menu_default_box() {
  $export = array();

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'vet_search';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'Vet Search';
  $box->options = array(
    'body' => array(
      'value' => '<form _lpchecked="1" action="http://staging.websrch.cit.nih.gov/sps/SmokeFree/Results.html?" class="search-bar-form" method="get" name="search" onsubmit="javascript:if (document.getElementById(\'searchbox-header\').value==\'Search\'
  							|| document.getElementById(\'searchbox-header\').value==\'\')
  								return false;">
	<input name="site" type="hidden" value="SMOKEFREE" /> <input name="client" type="hidden" value="SMOKEFREE_frontend" /> <input name="proxystylesheet" type="hidden" value="SMOKEFREE_frontend" /> <input name="output" type="hidden" value="xml_no_dtd" /> <input name="filter" type="hidden" value="0" /> <input name="getfields" type="hidden" value="*" />
	<div class="search-bar-group" style="height: 0px;">
		<label class="sr-only" for="searchbox-header-input">Search</label> <input class="search-bar-input" id="searchbox-header-input" maxlength="255" name="query" onblur="javascript:if (this.value == \'\') this.value =\'Search\';" onfocus="javascript:if (this.value==\'Search\') this.value=\'\';" placeholder="Search" size="30" type="text" value="Search" /><button class="btn btn-default" type="submit" value="Search">Submit</button><a class="closebtn">×</a></div>
</form>
',
      'format' => 'full_html',
    ),
    'additional_classes' => '',
  );
  $export['vet_search'] = $box;

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'vet_search_icon';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'vet search icon';
  $box->options = array(
    'body' => array(
      'value' => '<div class="nav-bar-icon">
        <span class="glyphicon glyphicon-search nav-search" aria-hidden="true"></span>
      </div>',
      'format' => 'raw_html',
    ),
  );
  $export['vet_search_icon'] = $box;

  $box = new stdClass();
  $box->disabled = FALSE; /* Edit this to true to make a default box disabled initially */
  $box->api_version = 1;
  $box->delta = 'vet_search_icon_mobile';
  $box->plugin_key = 'simple';
  $box->title = '<none>';
  $box->description = 'vet search icon mobile';
  $box->options = array(
    'body' => array(
      'value' => '<div class="nav-bar-icon">
        <span class="glyphicon glyphicon-search nav-search" aria-hidden="true"></span>
      </div>',
      'format' => 'raw_html',
    ),
  );
  $export['vet_search_icon_mobile'] = $box;

  return $export;
}
