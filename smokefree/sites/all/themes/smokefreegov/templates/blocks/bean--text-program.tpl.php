<div class="landing-programs">
  <?php if ($title == "Prepare to Quit") : ?>
      <div id="txt-tobacco-boxes" class="inside-container">
        <?php
        $bootstrap_classes = array('col-lg-4 col-xs-12 quit', 'col-lg-4 col-xs-12 even quit');
        for($i = 0; $i < count($field_program_link) ;  $i++) : ?>
          <?php
          $field_collection_loaded = field_collection_item_load($field_program_link[$i]['value']);
          $field_collection = entity_metadata_wrapper('field_collection', $field_collection_loaded)->value();
          ?>
            <div class="<?php print $bootstrap_classes[$i]; ?>">
                <div class="practice-quit">
                    <div class="blue-title"><?php print $field_collection->field_title['und'][0]['value']; ?></div>
                    <div class="links">
                        <p><?php print $field_collection->field_description['und'][0]['value']; ?></p>
                        <div class="btn-program"><a href="<?php print $field_collection->field_lightbox_link['und'][0]['url'] ?>">Sign Up Now</a></div>
                    </div>
                </div>
            </div>
        <?php endfor; ?>
        <?php
        // Render "On Demand Support" block
        $block = block_load('block', '27');
        $output = drupal_render(_block_get_renderable_array(_block_render_blocks(array($block))));
        print $output;
        ?>
      </div>

  <?php else: ?>
      <div class="inside-container three-column-buttons">
          <h3>
            <?php print $title; ?>
          </h3>
      </div>
      <div class="inside-container three-column-buttons">
        <?php
        $bootstrap_classes = array('col-lg-4 col-md-6 col-xs-12 boxes-plain', 'col-lg-4 col-md-6 col-xs-12 boxes-plain even','col-lg-4 col-xs-12 last-third boxes-plain',
          'col-lg-4 col-xs-12 boxes-plain even', 'col-lg-4 col-xs-12 boxes-plain', 'col-lg-4 col-xs-12 boxes-plain even');
        for($i = 0; $i < count($field_program_link) ;  $i++) : ?>
          <?php
          $field_collection_loaded = field_collection_item_load($field_program_link[$i]['value']);
          $field_collection = entity_metadata_wrapper('field_collection', $field_collection_loaded)->value();
          ?>
            <div class="<?php print $bootstrap_classes[$i]; ?>">
                <div class="text-program">
                    <span class="title"><?php print $field_collection->field_title['und'][0]['value']; ?></span>
                    <p><?php print $field_collection->field_description['und'][0]['value']; ?></p>
                    <div class="btn-program"><a href="<?php print $field_collection->field_lightbox_link['und'][0]['url'] ?>">Sign Up Now</a></div>
                </div>
            </div>
        <?php endfor; ?>
      </div>
  <?php endif; ?>
</div>