<div class="featured_image col-sm-12">
  <?php
  print render($featured_image);
  ?>
</div>
<div class="intro col-sm-12">
  <?php print render($introduction); ?>
</div>
<div class="content_section_1 col-sm-12">
  <?php print render($content_section_1); ?>
</div>
<?php if (!empty($include_1_type)): ?>
<div class="include_1 include <?php print strtolower(str_replace(' ', '_', $include_1_type)); ?> col-sm-12">
  <?php if($include_1_type == 'Fact'): ?>
    <div class="fact"><?php print render($include_1_fact); ?></div>
  <?php endif; ?>
  <?php if($include_1_type == 'Mythbuster'): ?>
    <div class="myth_intro">Myth: </div>
    <div class="myth_body"><?php print render($include_1_myth); ?></div>
    <div class="fact_intro">Fact: </div>
    <div class="fact_body"><?php print render($include_1_fact); ?></div>
  <?php endif; ?>
  <?php if($include_1_type == 'Crave Tip' || $include_1_type == 'Quit Tip'): ?>
    <div class="tip"><?php print render($include_1_tip); ?></div>
  <?php endif; ?>
  <?php if($include_1_type == 'Motivational Quote' || $include_1_type == 'Testimonial'): ?>
    <div class="quote">"<?php print render($include_1_quote); ?>"</div>
    <div class="attribution">-<?php print render($include_1_attribution); ?></div>
  <?php endif; ?>
</div>
<?php endif; ?>
<div class="content_section_2 col-sm-12">
  <?php print render($content_section_2); ?>
</div>
<?php if (!empty($include_2_type)): ?>
  <div class="include_2 include <?php print strtolower(str_replace(' ', '_', $include_2_type)); ?> col-sm-12">
    <?php if($include_2_type == 'Fact'): ?>
      <div class="fact"><?php print render($include_2_fact); ?></div>
    <?php endif; ?>
    <?php if($include_2_type == 'Mythbuster'): ?>
      <div class="myth_intro">Myth: </div>
      <div class="myth_body"><?php print render($include_2_myth); ?></div>
      <div class="fact_intro">Fact: </div>
      <div class="fact_body"><?php print render($include_2_fact); ?></div>
    <?php endif; ?>
    <?php if($include_2_type == 'Crave Tip' || $include_2_type == 'Quit Tip'): ?>
      <div class="tip"><?php print render($include_2_tip); ?></div>
    <?php endif; ?>
    <?php if($include_2_type == 'Motivational Quote' || $include_2_type == 'Testimonial'): ?>
      <div class="quote">"<?php print render($include_2_quote); ?>"</div>
      <div class="attribution">-<?php print render($include_2_attribution); ?></div>
    <?php endif; ?>
  </div>
<?php endif; ?>
<div class="content_section_3 col-sm-12">
  <?php print render($content_section_3); ?>
</div>
<?php if (!empty($include_3_type)): ?>
  <div class="include_3 include <?php print strtolower(str_replace(' ', '_', $include_3_type)); ?> col-sm-12">
    <?php if($include_3_type == 'Fact'): ?>
      <div class="fact"><?php print render($include_3_fact); ?></div>
    <?php endif; ?>
    <?php if($include_3_type == 'Mythbuster'): ?>
      <div class="myth_intro">Myth: </div>
      <div class="myth_body"><?php print render($include_3_myth); ?></div>
      <div class="fact_intro">Fact: </div>
      <div class="fact_body"><?php print render($include_3_fact); ?></div>
    <?php endif; ?>
    <?php if($include_3_type == 'Crave Tip' || $include_3_type == 'Quit Tip'): ?>
      <div class="tip"><?php print render($include_3_tip); ?></div>
    <?php endif; ?>
    <?php if($include_3_type == 'Motivational Quote' || $include_3_type == 'Testimonial'): ?>
      <div class="quote">"<?php print render($include_3_quote); ?>"</div>
      <div class="attribution">-<?php print render($include_3_attribution); ?></div>
    <?php endif; ?>
  </div>
<?php endif; ?>
<div class="content_section_4 col-sm-12">
  <?php print render($content_section_4); ?>
</div>