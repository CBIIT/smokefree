<div class="header_banner col-sm-12">
<?php
  print render($content['field_featured_image']);
  print render($content['field_featured_image_mobile']);
?>
</div>
<div class="content_section col-sm-12">
  <div class="content_section_title">
    <?php
    print render($title);
    ?>
  </div>
  <div class="content_section_body">
    <?php
    print render($content['body']);
    ?>
  </div>
</div>