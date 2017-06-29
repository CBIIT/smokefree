      <h3 class="article-intro"><?php print render($introduction); ?>
      </h3>
      <div class="article-img"><?php print render($featured_image); ?></div>

      <?php for ($i = 1; $i < 5; $i++): ?>
        <div class="content_section_<?php print $i; ?> col-sm-12">
          <?php print render(${'content_section_' . $i}); ?>
        </div>
        <?php if (!empty(${'include_' . $i . '_type'}) && $i < 4): ?>
            <?php if(${'include_' . $i . '_type'} == 'Promo'): ?>
              <div class="row margin-bottom-md article-tip-container <?php print strtolower(str_replace(' ', '_', ${'include_' . $i . '_type'})); ?>">
                <div class="article-tip col-md-5 col-sm-12">
                  <?php print ${'include_' . $i . '_promo_description'}; ?>
                </div>
                <div class="col-md-7 col-sm-12">
                  <a href="<?php print ${'include_' . $i . '_promo_url'}; ?>" class="btn btn-include center-block"><?php print ${'include_' . $i . '_promo_txt'}; ?></a>
                </div>
              </div>
            <?php else: ?>
              <div class="article-quote-container clearfix">
                <div class="article-quote">
                  <?php if(${'include_' . $i . '_type'} == 'Mythbuster'): ?>
                    <div class="myth_intro">Myth: </div>
                    <div class="myth_body"><?php print render(${'include_' . $i . '_myth'}); ?></div>
                  <?php endif; ?>
                  <?php if(${'include_' . $i . '_type'} == 'Mythbuster' || ${'include_' . $i . '_type'} == 'Fact'): ?>
                    <div class="fact_intro">Fact: </div>
                    <div class="fact_body"><?php print render(${'include_' . $i . '_fact'}); ?></div>
                  <?php endif; ?>
                  <?php if(${'include_' . $i . '_type'} == 'Crave Tip' || ${'include_' . $i . '_type'} == 'Quit Tip'): ?>
                    <div class="tip"><?php print render(${'include_' . $i . '_tip'}); ?></div>
                  <?php endif; ?>
                  <?php if(${'include_' . $i . '_type'} == 'Motivational Quote' || ${'include_' . $i . '_type'} == 'Testimonial'): ?>
                    <div class="quote">"<?php print render(${'include_' . $i . '_quote'}); ?>"</div>
                  <?php endif; ?>
                </div>
                <?php if(${'include_' . $i . '_type'} == 'Motivational Quote' || ${'include_' . $i . '_type'} == 'Testimonial'): ?>
                  <div class="contributor"><div class="attribution">-<?php print render(${'include_' . $i . '_attribution'}); ?></div></div>
                <?php endif; ?>
                <div class="icons">
                  <a href="https://twitter.com/intent/tweet?url=<?php print urlencode('https://smokefree.gov') ?>&text=<?php print urlencode(${'include_' . $i . '_tweet'}); ?>" target="_blank" class="icon_wrapper">
                    <div class="twitter icon"></div>
                    <div class="share">Tweet This</div>
                  </a>
                </div>
              </div>
            <?php endif; ?>
        <?php endif; ?>
      <?php endfor; ?>