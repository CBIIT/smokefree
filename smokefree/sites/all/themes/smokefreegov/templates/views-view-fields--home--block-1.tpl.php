<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>

<?php
  $button_link = strip_tags($fields['field_button_link_1']->content);
  $link = strip_tags($fields['field_phone_link_1']->content);
?>
  <div class="sf_homepage_4boxes__wrapper">
    <button id="btn__<?php print $button_link; ?>" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#expanded_btn__<?php print $button_link; ?>" aria-expanded="false" aria-controls="expanded_btn__<?php print $button_link; ?>">
      <div class="text-wrapper">
        <h2><?php print $fields['field_button_text']->content; ?></h2>
      </div> <!-- /.text-wrapper -->
      <div class="expand-box"><span class="sr-only">Expand</span></div>
    </button>
    <div class="collapse" id="expanded_btn__<?php print $button_link; ?>" aria-expanded="true" style="">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h3><?php print $fields['field_quit_title']->content; ?></h3>
          <?php print $fields['field_quit_paragraph']->content; ?>
        </div> <!-- /.text-wrapper -->
        <div class="buttons">
          <a href="#" class="btn-new btn-default-new btn-fullwidth">Create a Plan</a>
          <a href="<?php print $link; ?>" class="btn-new btn-default-new btn-fullwidth"><?php print strip_tags($fields['field_phone_link']->content); ?></a>
        </div>
      </div> <!-- /.content-wrapper -->
      <button class="collapse-box"><span class="sr-only">Close</span></button>
    </div> <!-- /.collapse -->
  </div> <!-- /.sf_homepage_4boxes__wrapper -->