<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
?>
<?php
if ($node->type === 'include') {
  $class = 'include';
  $content_container_class = 'no-container';
}
else {
  $class = 'col-sm-9 center_column content-container';
  $content_container_class = 'content-container';
}
?>
  <?php require_once drupal_get_path('theme', 'smokefreeteen') . '/templates/header.tpl.php';?>

<?php if (!empty($page['header'])):  ?>
  <div class="vet-sub-menu"><?php print render($page['header']); ?></div>
<?php endif; ?>
<div class="main-container <?php if (!empty($container_class)) {print $container_class;} ?>">

  <?php if (!empty($veterans_breadcrumb)): ?>
    <?php print $veterans_breadcrumb; ?>
  <?php endif; ?>
  <?php if (!empty($veterans_banner)): ?>
    <?php print $veterans_banner; ?>
  <?php endif; ?>

  <?php if ($show_breadcrumbs && !empty($breadcrumb)): ?>
      <div class="row col-sm-12 breadcrumb-wrapper">
        <?php
          print $breadcrumb;
        ?>
      </div>
  <?php endif; ?>

  <div class="row col-sm-12 special-wrapper">

      <section class="<?php print $class; ?><?php if (!empty($five_resources)) print $five_resources;
        if (empty($page['sidebar_second'])) {print ' no-sidebar';}?>">
      <?php if(empty($five_resources)): ?>
          <div class="<?php print !empty($page['sidebar_second']) ? 'col-sm-9' : 'col-sm-12'; ?> <?php print $content_container_class; ?> page-content-container">
      <?php endif; ?>
        <?php if (!empty($page['sidebar_first'])): ?>
          <aside class="col-sm-3 sidebar_first" role="complementary">
            <?php print render($page['sidebar_first']); ?>
          </aside>  <!-- /#sidebar-first -->
        <div class="col-sm-9">
        <?php endif; ?>
          <?php if (!empty($page['highlighted'])): ?>
            <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
          <?php endif; ?>
          <a id="main-content"></a>
          <?php print render($title_prefix); ?>
          <?php if (!empty($title)): ?>
            <div class="page-header-div">
              <?php if ($include_title == TRUE): ?>
              <div class="syndicate">
                <h1 class="page-header"><?php print $title; ?></h1>
              </div>
              <?php endif;?>
            </div>
          <?php endif; ?>

          <?php print render($title_suffix); ?>

          <?php if (!empty($action_links)): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>

          <?php print $messages; ?>


          <?php if (!empty($tabs)): ?>
            <div class="tabs-wrapper">
              <?php print render($tabs); ?>
            </div>
          <?php endif; ?>
          <div class="syndicate">
            <?php print render($page['content']); ?>
          </div>
          <?php print render($page['below_content']); ?>
          

        <?php if (!empty($page['sidebar_first'])): ?>
        </div>
        <?php endif; ?>
      <?php if(empty($five_resources)): ?>
      </div>
    <?php endif; ?>
    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-sm-3 sidebar_second" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

  </div>

</div>

<?php if (!empty($page['content_bottom'])): ?>
  <div class="row col-sm-12 content-bottom" role="complementary">
    <?php print render($page['content_bottom']); ?>
  </div>  <!-- /#content bottom -->
<?php endif; ?>

<?php require_once drupal_get_path('theme', 'smokefreeteen') . '/templates/' . $footer_filename; ?>