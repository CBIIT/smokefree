<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <div class="mhealth_logo">
    <img class="img-responsive" src="/sites/all/themes/smokefreegov/images/blog/mhealth_logo.png" alt="mhealth logo" />
  </div>

  <div class="page_title">
    <?php print render($title_prefix); ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
    <?php print render($title_suffix); ?>
  </div>


    <div class="content"<?php print $content_attributes; ?>>

      <?php
      // We hide the comments and links now so that we can render them later.
      print render($content);
      ?>
    </div>

</div>


