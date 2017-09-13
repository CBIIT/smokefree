<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php
if(count($rows) == 2) {
  $bootrap_class = 'col-xs-12 col-md-6 equal-lg two-col';
}
else if (count($rows) == 3) {
  $bootrap_class = 'col-xs-12 col-lg-4 equal-lg three-col';
}

?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .' '.$bootrap_class.'"';  } ?>>
    <div class="cr-article">
      <a class="cr-article-link" href="<?php print drupal_get_path_alias('node/'. $view->result[$id]->nid);?>">
        <?php print $row; ?>
      </a>
    </div>
  </div>
<?php endforeach; ?>