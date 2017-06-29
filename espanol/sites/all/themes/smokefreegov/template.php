<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function smokefreegov_preprocess_page(&$variables) {

  if (isset($variables['node']->type)) {
    $variables['theme_hook_suggestions'][] = 'page__' . $variables['node']->type;
    if ($variables['node']->type == 'media_landing' || $variables['node']->type == 'cr_landing') {
      $variables['theme_hook_suggestions'][] = 'page__landing';
    }
  }

  // Add information about the number of sidebars.
  if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['columns'] = 3;
  }
  elseif (!empty($variables['page']['sidebar_first'])) {
    $variables['columns'] = 2;
  }
  elseif (!empty($variables['page']['sidebar_second'])) {
    $variables['columns'] = 2;
  }
  else {
    $variables['columns'] = 1;
  }

  // Primary nav
  $variables['primary_nav'] = FALSE;
  if ($variables['main_menu']) {
    // Build links
    $variables['primary_nav'] = menu_tree(variable_get('menu_main_links_source', 'main-menu'));
    // Provide default theme wrapper function
    $variables['primary_nav']['#theme_wrappers'] = array('menu_tree__primary');
  }

  // Secondary nav
  $variables['secondary_nav'] = FALSE;
  if ($variables['secondary_menu']) {
    // Build links
    $variables['secondary_nav'] = menu_tree(variable_get('menu_secondary_links_source', 'user-menu'));
    // Provide default theme wrapper function
    $variables['secondary_nav']['#theme_wrappers'] = array('menu_tree__secondary');
  }

  // These pages have a different layout than the typical basic page, with a
  // picture in the upper left and a list of 5 resources. Yet they do not seem
  // to have meaningful titles, so nide ids are used to reference them here.
  $five_resources_node_ids = array(176, 177, 178, 179, 180, 181, 182);

  if (!empty($variables['node']->nid) && in_array($variables['node']->nid, $five_resources_node_ids)) {
    $variables['five_resources'] = ' ads-page-contain';
  }

 /* if (!empty($variables['content_column_class'])) {
    $additional_center_column_classes = 'center_column content-container';
    if (!empty($variables['node']->nid) && in_array($variables['node']->nid, $five_resources_node_ids)) {
      $additional_center_column_classes .= ' ads-page-contain';
    }
    $variables['content_column_class'] = substr_replace($variables['content_column_class'], ' ' . $additional_center_column_classes . '"', -1);
  }*/

  // Twitter.
  $variables['twitter_link'] = 'http://twitter.com/smokefreegov';
  if (!empty($variables['node']->title)
    && ($variables['node']->title == 'Do I Have Nicotine Withdrawal?'
      || $variables['node']->title == 'Build Your Quit Plan')) {
    $variables['twitter_link'] = 'http://twitter.com/SmokefreeUs';
  }

  if (!empty($variables['node']->type)
    && ($variables['node']->type == 'page' || $variables['node']->type == 'webform')
    && !in_array($variables['node']->nid, $five_resources_node_ids)) {
    $host = $_SERVER['HTTP_HOST'];
    $tracker = $_SERVER['HTTP_HOST'] == "smokefree.gov" ? "UA-15354704-3" : "UA-15354704-2";
    $request = $_SERVER['REQUEST_URI'];
    $title = $variables['node']->title;
    $site_name = $variables['site_name'];
    $path = drupal_get_path('theme', 'smokefreegov');
    $variables['add_this'] = <<< EOI
      <!-- AddThis Button BEGIN -->
          <a href="#"
             title="Share"
             class="addthis_button_compact"
             addthis:url="http://$host$request"
             addthis:title="$title|$site_name"

             addthis:services_compact="facebook,twitter,google_plusone_share,linkedin,favorites,email,print,more"
             addthis:data_ga_tracker="$tracker"
             addthis:data_track_clickback="false"
             addthis:services_exclude="gmail,google,stumbleupon"
             addthis:services_expanded="email,print,more"
             addthis:ui_508_compliant="true"
             addthis:ui_click="true"
            ><img src="/$path/images/content/share-button.png" alt="Share" /></a>
          <!-- AddThis Button END -->
EOI;
  }

  if (!empty($variables['node']->type)
    && (($variables['node']->type == 'veterans') || $variables['node']->title == 'Do I Have Nicotine Withdrawal?' || $variables['node']->title == 'Why I use Tobacco Quiz')) {
    $breadcrumb = !empty($variables['breadcrumb']) ? $variables['breadcrumb'] : '';
    $title = $variables['node']->title;
    $variables['veterans_breadcrumb'] = <<< EOI
      <div id="VETBC">
      <!-- $breadcrumb -->
      <ul class="VETBreadcrumbs" >
        <li><a href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smokefree.gov</a></li>
        <li><a href="/veterans">SmokefreeVET</a></li>
        <li><a href="#">$title</a></li>
      </ul>
    </div>
EOI;
  }

  if (!empty($variables['node']->type)
    && (($variables['node']->type == 'veterans') || $variables['node']->title == 'Why I use Tobacco Quiz')) {
    $path = drupal_get_path('theme', 'smokefreegov');
    $variables['veterans_banner'] = <<< EOI
      <div>
        <img src="/$path/images/banner.jpg"/ style="width:100%" alt="banner.jpg">
      </div>
EOI;
  }

  if (!empty($variables['node']->type)
    && (($variables['node']->type == 'veterans') || $variables['node']->title == 'Why I use Tobacco Quiz')) {
    $variables['footer_filename'] = 'footer-veterans.tpl.php';
  }
  else {
    $variables['footer_filename'] = 'footer-new.tpl.php';
  }

  $variables['include_title'] = TRUE;
  if (!empty($variables['node']->title)
    && ($variables['node']->title == 'Veterans Home'
    || in_array($variables['node']->nid, $five_resources_node_ids))) {
    $variables['include_title'] = FALSE;
  }

  // Although the vets sidebar is on pages veterans/*, it should be excluded from
  // Build Your Quit Plan.
  if (!empty($variables['node']->title) && ($variables['node']->title == 'Build Your Quit Plan')) {
    unset($variables['page']['sidebar_first']);
  }
}

/**
 * Bootstrap theme wrapper function for the primary menu links
 */
function smokefreegov_menu_tree__primary(&$variables) {
  return '<ul class="menu nav">' . $variables['tree'] . '</ul>';
}

/**
 * Bootstrap theme wrapper function for the secondary menu links
 */
function smokefreegov_menu_tree__secondary(&$variables) {
  return '<ul class="menu nav pull-right">' . $variables['tree'] . '</ul>';
}

/**
 * Implements hook_theme().
 */
function smokefreegov_theme(&$existing, $type, $theme, $path) {
  return array(
    'bootstrap_links' => array(
      'variables' => array(
        'links' => array(),
        'attributes' => array(),
        'heading' => NULL
      ),
    ),
    'bootstrap_btn_dropdown' => array(
      'variables' => array(
        'links' => array(),
        'attributes' => array(),
        'type' => NULL
      ),
    ),
    'bootstrap_modal' => array(
      'variables' => array(
        'heading' => '',
        'body' => '',
        'footer' => '',
        'attributes' => array(),
      ),
    ),
    'bootstrap_accordion' => array(
      'variables' => array(
        'id' => '',
        'elements' => array(),
      ),
    ),
    'bootstrap_search_form_wrapper' => array(
      'render element' => 'element',
    ),
  );
}

/**
 * Override theme_breadrumb().
 *
 * Print breadcrumbs as a list, with separators.
 */
function smokefreegov_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
    $breadcrumbs = '<ul class="breadcrumb">';

    $count = count($breadcrumb) - 1;
    foreach ($breadcrumb as $key => $value) {
      $name = is_array($value) ? $value['data'] : $value;
      if ($count != $key) {
        $breadcrumbs .= '<li>' . $name . '<span class="divider">/</span></li>';
      }
      else{
        $breadcrumbs .= '<li>' . $name . '</li>';
      }
    }
    $breadcrumbs .= '</ul>';

    return $breadcrumbs;
  }
}


function smokefreegov_preprocess_html(&$variables) {
  /**
   * Add default icon
   */
  $current_node = menu_get_object();
  $apple_icon = array(
    '#tag' => 'link',
    '#attributes' => array(
      'href' => drupal_get_path('theme', 'smokefreegov') . '/images/favicons/smartphone-icon.png',
      'rel' => 'apple-touch-icon',
    ),
  );
  drupal_add_html_head($apple_icon, 'apple_icon');

  // CSS needed for LiveHelp.
  drupal_add_css('.rn_Hidden {display:none;}', array('type' => 'inline'));

  // CSS for front page.
  if (drupal_is_front_page()) {
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/jquery-ui-1.10.3.custom.min.css', array('group' => CSS_THEME, 'type' => 'file'));
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/jquery.fancybox.css', array('group' => CSS_THEME, 'type' => 'file'));
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/jquery.bxslider.css', array('group' => CSS_THEME, 'type' => 'file'));
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/bootstrap.min.css', array('group' => CSS_THEME, 'type' => 'file'));
  }

  // Page-specific CSS.
  if (!empty($current_node->title)
    && $current_node->title == 'Build Your Quit Plan') {
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/quit-plan.css', array('group' => CSS_THEME, 'type' => 'file'));
    drupal_add_css(drupal_get_path('theme', 'smokefreegov') . '/css/bootstrap-datepicker/bootstrap-datepicker.standalone.min.css', array('group' => CSS_THEME, 'type' => 'file', 'weight' => '1000'));
  }

  // JS For Front Page.
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery-ui-1.10.3.custom.min.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.scrollTo-min.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.cookie.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.easing.1.3.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.fancybox.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/easyXDM.debug.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init-home.js', 'file');

  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/modernizr.custom.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/toucheffects.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/linkanimation.custom.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.slides.min.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/jquery.bxslider.js', 'file');


  // Addthis JS.
  drupal_add_js('https://s7.addthis.com/js/250/addthis_widget.js#pubid=smokefreegov', 'external');

  // JS For Livehelp.
  drupal_add_js('var HOST_SERVER="livehelp.cancer.gov";',
    array('type' => 'inline', 'scope' => 'footer', 'weight' => 5)
  );
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/yahoo-dom-event/yahoo-dom-event.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/connection/connection-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/animation/animation-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/container/container-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/history/history-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/json/json-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/rnt/rnw/yui_2.7/element/element-min.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Ajax.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Text.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.UI.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.UI.AbuseDetection.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Url.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Event.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/euf/rightnow/debug-js/TreeViewAriaPlugin.js', 'external');
  drupal_add_js('https://livehelp.cancer.gov/cgi-bin/nci.cfg/php/euf/application/development/source/widgets/custom/chat/nciChatLaunchButton/logic.js', 'external');

  // Tier-dependent JS.
  if ($_SERVER['HTTP_HOST'] == "smokefree.gov"
    || $_SERVER['HTTP_HOST'] == "smokefree.nci.nih.gov") {
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init-tier-prod.js', 'file');
  }
  elseif ($_SERVER['HTTP_HOST'] == "smokefree-stage.nci.nih.gov") {
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init-tier-stage.js', 'file');
  }
  elseif ($_SERVER['HTTP_HOST'] == "smokefree-stage.nci.nih.gov") {
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init-tier-dev.js', 'file');
  }
  else {
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init-tier-mmg-dev.js', 'file');
  }

  // Other production JS.
  // SF-358 Remove Universal-Federated-Analytics-Min.JS from all smokefree sites.
  //if ($_SERVER['HTTP_HOST'] == "smokefree.gov") {
  //  drupal_add_js('//static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js', 'external');
  //  $path = drupal_get_path('theme', 'smokefreegov');
  //  $inline_script = <<<EOL
  //  <script language="javascript" id="_fed_an_ua_tag" src="$path/js/Universal-Federated-Analytics-Min.1.0.js?agency=HHS&subagency=NIH"></script>
//EOL;
    //$element = array(
    //  '#type' => 'markup',
    //  '#markup' => $inline_script,
    //);
    //drupal_add_html_head($element, '_fed_an_ua_tag');
   /* $element = array(
      '#tag' => 'script',
      '#type' => 'html_tag',
      '#attributes' => array(
        'src' => drupal_get_path('theme', 'smokefreegov') . '/js/Universal-Federated-Analytics-Min.1.0.js?agency=HHS&subagency=NIH',
        'type' => 'text/javascript',
        'id' => '_fed_an_ua_tag',
      ),
      '#suffix' => '</script>',
    );
    drupal_add_html_head($element, '_fed_an_ua_tag');*/
  //}

  // Other JS.
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/init.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/vetsidebar.js', 'file', array('scope' => 'footer'));

  // Page-specific JS.
  if (!empty($current_node->title)
    && $current_node->title == 'Build Your Quit Plan') {
    drupal_add_js('https://addthisevent.com/libs/1.6.0/ate.min.js', 'external');
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/bootstrap-datepicker.min.js', array('type' => 'file', 'scope' => 'footer'));
    drupal_add_js(drupal_get_path('theme', 'smokefreegov') . '/js/build-your-quit-plan.js', array('type' => 'file', 'scope' => 'footer'));
  }

  // Pinterest Verification code.
  $include_pinterest = TRUE;
  if (!empty($current_node->title)) {
    if ($current_node->title == 'SmokefreeTXT' || $current_node->title == 'quitSTART') {
      $include_pinterest = FALSE;
    }
  }

  // Pinterest.
  $pinterest_verification_id = '32173eb410942f97d76ed7cb5887012a';
  $header = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'p:domain_verify',
      'content' =>  $pinterest_verification_id,
    )
  );
  if ($include_pinterest == TRUE) {
    drupal_add_html_head($header, 'pinterest_verify');
  }

  // Add page-type-node body tag to build your quit plan so it looks like regular
  // pages
  if (request_path() == 'build-your-quit-plan'
    || request_path() == "mhealth/blog-index"
    || strpos(request_path(), 'mhealth/archive') !== FALSE) {
    $variables['classes_array'][] = 'node-type-page';
  }

  // Add a class in the body of all nodes, allowing us to target css by title rather
  // than node ID.
  if (!empty($current_node->title)) {
    $variables['classes_array'][] = 'smokefreegov-' . strtolower(str_replace(' ', '-', $current_node->title));
  }
}

/**
 * Returns HTML for a single local action link.
 *
 * This function overrides theme_menu_local_action() to add the icons that ship
 * with Bootstrap to the action links.
 *
 * @param $variables
 *   An associative array containing:
 *   - element: A render element containing:
 *     - #link: A menu link array with "title", "href", "localized_options", and
 *       "icon" keys. If "icon" is not passed, it defaults to "plus-sign".
 *
 * @ingroup themeable
 *
 * @see theme_menu_local_action().
 */
function smokefreegov_menu_local_action($variables) {
  $link = $variables['element']['#link'];

  // Build the icon rendering element.
  if (empty($link['icon'])) {
    $link['icon'] = 'plus-sign';
  }
  $icon = '<i class="' . drupal_clean_css_identifier('icon-' . $link['icon']) . '"></i>';

  // Format the action link.
  $output = '<li>';
  if (isset($link['href'])) {
    $options = isset($link['localized_options']) ? $link['localized_options'] : array();

    // If the title is not HTML, sanitize it.
    if (empty($link['localized_options']['html'])) {
      $link['title'] = check_plain($link['title']);
    }

    // Force HTML so we can add the icon rendering element.
    $options['html'] = TRUE;
    $output .= l($icon . $link['title'], $link['href'], $options);
  }
  elseif (!empty($link['localized_options']['html'])) {
    $output .= $icon . $link['title'];
  }
  else {
    $output .= $icon . check_plain($link['title']);
  }
  $output .= "</li>\n";

  return $output;
}

/**
 * Preprocess variables for node.tpl.php
 *
 * @see node.tpl.php
 */
function smokefreegov_preprocess_node(&$variables) {
  if ($variables['teaser']) {
    $variables['classes_array'][] = 'row';
  }
  $current_node = $variables['node'];

  if ($current_node->type == "cr_landing") {
    $header_banner = field_view_field('node', $current_node, 'field_hero_image', array('label' => 'hidden'));
    $variables['header_banner'] = $header_banner;

    $header_banner_mobile = field_view_field('node', $current_node, 'field_mobile_hero_image', array('label' => 'hidden'));
    $variables['header_banner_mobile'] = $header_banner_mobile;

    $bundle_array = field_get_items('node', $current_node, 'field_article_bundle');
    if (!empty($bundle_array[0]['taxonomy_term']->name)) {
      switch (strtolower($bundle_array[0]['taxonomy_term']->name)) {
        case 'smokeless':
          $variables['hero_text'] = '<img src="/' . drupal_get_path('theme', 'smokefreegov') . '/images/Smokeless_Hero_Phrase.png" alt="I control my life, and I choose not to dip." />';
          $variables['logo_color'] = 'white';
          $variables['promo_button'] = l('<img src="/' . drupal_get_path('theme', 'smokefreegov') . '/images/Smokeless_RealCost_Button.png" />',
          'http://therealcost.betobaccofree.hhs.gov/dip', array('html'=>TRUE, 'attributes'=>array('class'=>array('header_promo_button'))));
        break;

        case 'lgbt':
          $variables['hero_text'] = '<img class="top_smokefree_logo" src="/' . drupal_get_path('theme', 'smokefreegov') . '/images/lgbt_hero_new_text.png" alt="I am strong enough to quit!" />';
          $variables['logo_color'] = 'black';
          $variables['extra_logo'] = '<a href="https://thisfreelife.betobaccofree.hhs.gov/"><img class="extra_logo" src="/' . drupal_get_path('theme', 'smokefreegov') . '/images/this_free_life_logo2.png" alt="This Free Life!" /></a>';

          break;

        default:
          $variables['logo_color'] = 'black';
          break;
      }
    }
  }

  if ($current_node->type == "media_landing") {
    $header_banner = field_view_field('node', $current_node, 'field_header_banner', array('label' => 'hidden'));
    $variables['header_banner'] = $header_banner;

    $header_blurb_headline = field_get_items('node', $current_node, 'field_header_blurb_headline');
    $variables['header_blurb_headline'] = $header_blurb_headline[0]['value'];

    $header_blurb_body = field_get_items('node', $current_node, 'field_header_blurb_body');
    $variables['header_blurb_body'] = $header_blurb_body[0]['value'];

    $app_display = field_get_items('node', $current_node, 'field_app_display');
    $variables['app_display'] = $app_display[0]['value'];

    $txt_display = field_get_items('node', $current_node, 'field_txt_display');
    $variables['txt_display'] = $txt_display[0]['value'];

    $social_display = field_get_items('node', $current_node, 'field_social_display');
    $variables['social_display'] = $social_display[0]['value'];

    $app_image = field_view_field('node', $current_node, 'field_app_image', array('label' => 'hidden'));
    $variables['app_image'] = $app_image;

    $app_image_mobile = field_view_field('node', $current_node, 'field_app_image_mobile', array('label' => 'hidden'));
    $variables['app_image_mobile'] = $app_image_mobile;

    $smokefreetxt_image = field_view_field('node', $current_node, 'field_smokefreetxt_image', array('label' => 'hidden'));
    $variables['smokefreetxt_image'] = $smokefreetxt_image;

    $smokefreetxt_image_mobile = field_view_field('node', $current_node, 'field_smokefreetxt_image_mobile', array('label' => 'hidden'));
    $variables['smokefreetxt_image_mobile'] = $smokefreetxt_image_mobile;

    for ($i = 1; $i < 6; $i++) {
      $article_array = field_get_items('node', $current_node, 'field_article_' . $i);
      $variables['article_' . $i . '_url'] = $article_array[0]['url'];
      $variables['article_' . $i . '_title'] = $article_array[0]['title'];
    }
  }

  if ($current_node->type == "cr_article") {
    $featured_image = field_view_field('node', $current_node, 'field_featured_image', array('label' => 'hidden'));
    $variables['featured_image'] = $featured_image;

    $introduction = field_get_items('node', $current_node, 'field_introduction');
    $variables['introduction'] = $introduction[0]['value'];

    for ($i = 1; $i < 5; $i++) {
      $content_section_array = field_get_items('node', $current_node, 'field_content_section_' . $i);
      $variables['content_section_' . $i] = $content_section_array[0]['value'];
    }

    for ($i = 1; $i < 4; $i++) {
      $include_field = field_get_items('node', $current_node, 'field_include_' . $i);
      if(!empty($include_field[0]['target_id'])) {
        $include_id = $include_field[0]['target_id'];
        $include_node = node_load($include_id);
        $include_wrapper = entity_metadata_wrapper('node', $include_node);

        $include_type = $include_wrapper->field_type->value()->name;
        $variables['include_' . $i . '_type'] = $include_type;
        switch ($include_type) {
          case 'Fact':
            $variables['include_' . $i . '_fact'] = $include_wrapper->field_fact->value();
            break;
          case 'Mythbuster':
            $variables['include_' . $i . '_fact'] = $include_wrapper->field_fact->value();
            $variables['include_' . $i . '_myth'] = $include_wrapper->field_myth->value();
            break;
          case 'Crave Tip':
            $variables['include_' . $i . '_tip'] = $include_wrapper->field_tip->value();
            break;
          case 'Quit Tip':
            $variables['include_' . $i . '_tip'] = $include_wrapper->field_tip->value();
            break;
          case 'Testimonial':
            $variables['include_' . $i . '_quote'] = $include_wrapper->field_quote->value();
            $variables['include_' . $i . '_attribution'] = $include_wrapper->field_attribution->value();
            break;
          case 'Motivational Quote':
            $variables['include_' . $i . '_quote'] = $include_wrapper->field_quote->value();
            $variables['include_' . $i . '_attribution'] = $include_wrapper->field_attribution->value();
            break;
        }
      }
    }
  }
}

/**
 * Preprocess variables for region.tpl.php
 *
 * @see region.tpl.php
 */
function smokefreegov_preprocess_region(&$variables, $hook) {
  if ($variables['region'] == 'content') {
    $variables['theme_hook_suggestions'][] = 'region__no_wrapper';
  }

  if ($variables['region'] == "sidebar_first") {
    $variables['classes_array'][] = 'well';
  }
}

/**
 * Preprocess variables for block.tpl.php
 *
 * @see block.tpl.php
 */
function smokefreegov_preprocess_block(&$variables, $hook) {
  $block = $variables['block'];
  if (!empty($block->title)) {
    if (in_array(strtolower($block->title), array('tags', 'archives'))) {
      $variables['title_attributes_array']['data-toggle'] = 'collapse';
      $variables['title_attributes_array']['data-target'] = '#' . strtolower($block->title) . '_body';
      $variables['collapsible_body_id'] = strtolower($block->title) . '_body';
    }
  }
  //$variables['classes_array'][] = 'row';
  // Use a bare template for the page's main content.
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'][] = 'block__no_wrapper';
  //}
  //$variables['title_attributes_array']['class'][] = 'block-title';
}

/**
 * Returns the correct span class for a region
 */
function _bootstrap_content_span($columns = 1) {
  $class = FALSE;

  switch($columns) {
    case 1:
      $class = 'col-sm-12';
      break;
    case 2:
      $class = 'col-sm-9';
      break;
    case 3:
      $class = 'col-sm-6';
      break;
  }

  return $class;
}

/**
 * Adds the search form's submit button right after the input element.
 *
 * @ingroup themable
 */
function smokefreegov_bootstrap_search_form_wrapper(&$variables) {
  $output = '<div class="input-append">';
  $output .= $variables['element']['#children'];
  $output .= '<button type="submit" class="btn">';
  $output .= '<i class="icon-search"></i>';
  $output .= '<span class="element-invisible">' . t('Search') . '</span>';
  $output .= '</button>';
  $output .= '</div>';
  return $output;
}

/* Overrides the bootstrap theme poll function as it only pulls the latest poll */
function smokefreegov_poll_block_view($delta = '', $nid) {
  if (user_access('access content')) {
    if ($nid) {
      $poll = node_load($nid);
      if ($poll->nid) {
        $poll = poll_override_block_latest_poll_view($poll);
        $block['subject'] = t('Poll');
        $block['content'] = $poll->content;
        return $block;
      }
    }
  }
}

/* Removes the unnecessary meta tags from the page header */
function smokefreegov_html_head_alter(&$head_elements) {
  foreach ($head_elements as $key => $element) {

    /* Remove RSS */
    if (strstr($key, 'rss.xml')) {
      unset($head_elements[$key]);
    }
    /* Remove shortlink tags */
    if (strstr($key, 'shortlink')) {
      unset($head_elements[$key]);
    }
    /* Remove Drupal tag */
    if (isset($element['#name'])
      && $element['#name'] == 'dcterms.creator'
    ) {
      unset($head_elements[$key]);
    }
    if (isset($element['#name'])
      && $element['#name'] == 'generator'
    ) {
      unset($head_elements[$key]);
    }
  }
}
