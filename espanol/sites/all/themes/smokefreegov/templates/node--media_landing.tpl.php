<div class="header_banner col-sm-12">
  <?php
    print render($header_banner);
  ?>
  <div class="header_banner_logo">
    <?php
      $path = drupal_get_path('theme', 'smokefreegov');
      print l('<img src="/' . $path . '/images/smokefree_logo.png">', '<front>', array('html' => TRUE));
    ?>
  </div>
  <div class="header_blurb">
    <span class="header_blurb_headline"><?php print render($header_blurb_headline); ?></span>
    <span class="header_blurb_body"><?php print render($header_blurb_body); ?>
  </div>
</div>

<div class="apps_text_promos col-sm-12">
  <div class="app_promo col-sm-4 col-sm-offset-2">
    <div class="app_promo_image">
      <?php print render($app_image); ?>
    </div>
    <div class="app_promo_image_mobile">
      <?php print render($app_image_mobile); ?>
    </div>
    <?php if (strtolower($app_display) == "quitguide" && strtolower($txt_display) != "español") : ?>
    <div class="app_promo_body">
      <img class="app_promo_body_image quitguide_image" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF-App_QuitGuide_app_icon.png" alt="quitguide logo" />
      <div class="app_promo_body_headline quitguide_headline">QuitGuide</div>
      <div class="app_promo_body_text quitguide_text">QuitGuide is a free app that can help you understand your smoking
      patterns and build the skills needed to become and stay smokefree.</div>
      <div class="app_buttons">
        <div class="apple_bad">
          <a href="https://itunes.apple.com/app/quitguide/id411766556?mt=8"><img src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_app_store.png" alt="Apple Download" /></a>
        </div>
        <div class="android_good">
          <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitguide2&hl=en"><img src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_google_play.png" alt="Android Download" /></a>
        </div>
      </div>
    </div>
    <?php endif; ?>
    <?php if (strtolower($app_display) == "quitguide" && strtolower($txt_display) == "español") : ?>
      <div class="app_promo_body">
        <img class="app_promo_body_image quitguide_image" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF-App_QuitGuide_app_icon.png" alt="quitguide logo" />
        <div class="app_promo_body_headline quitguide_headline">QuitGuide</div>
        <div class="app_promo_body_text quitguide_text">QuitGuide es una aplicación gratis que puede ayudarle a entender sus comportamientos como fumador y a desarrollar las habilidades
          necesarias para dejar de fumar. (Disponible solo en inglés)</div>
        <div class="app_buttons">
          <div class="apple_bad">
            <a href="https://itunes.apple.com/app/quitguide/id411766556?mt=8"><img src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_app_store.png" alt="Apple Download" /></a>
          </div>
          <div class="android_good">
            <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitguide2&hl=en"><img src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_google_play.png" alt="Android Download" /></a>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <?php if (strtolower($app_display) == "quitstart") : ?>
      <div class="app_promo_body">
        <img class="app_promo_body_image quitstart_image" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF-App_QuitStart_app_icon.png" alt="quitstart logo" />
        <div class="app_promo_body_headline quitstart_headline">quitSTART</div>
        <div class="app_promo_body_text quitstart_text">quitSTART is a free app made for teens who want to quit smoking, but adults can use it too.
        This app takes the information you provide about your smoking history and gives you tailored tips, inspiration, and challenges to
        help you become smokefree.
        </div>
        <div class="app_buttons">
          <div class="apple_bad">
            <a href="https://itunes.apple.com/app/quitguide/id411766556?mt=8"><img class="img-responsive col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_app_store.png" alt="Apple Download" /></a>
          </div>
          <div class="android_good">
            <a href="https://play.google.com/store/apps/details?id=com.mmgct.quitguide2&hl=en"><img class="img-responsive col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/icon_google_play.png" alt="Android Download" /></a>
          </div>
        </div>
      </div>
    <?php endif;?>
  </div>
  <div class="txt_promo col-sm-4">
    <?php if (strtolower($txt_display) == "español") : ?>
      <div class="txt_promo_body">
        <div class="txt_promo_body_headline">Suscribirse a SmokefreeTXT</div>
        <div class="txt_promo_body_text">SmokefreeTXT en Español es un programa de mensajería de texto para teléfonos móviles que provee recomendaciones y ánimo para
          ayudarle a dejar de fumar. Si quiere suscribirse a SmokefreeTXT en Español, complete este formulario y seleccione “Suscribirse”.
          <div class="txt_promo_body_text_signup">
            <?php print l(t('¡Subscríbase!'), 'http://espanol.smokefree.gov/smokefreetxt-espanol', array('attributes' => array('class' => array('smokefreetxt_signup', 'medialanding_button', 'btn')))); ?>
          </div>
          <span><strong>Envíe un mensaje de texto con la palabra “LIBRE” al 47848</strong></span> </div>
      </div>
      <div class="txt_promo_image">
        <?php print render($smokefreetxt_image); ?>
      </div>
      <div class="txt_promo_image_mobile">
        <?php print render($smokefreetxt_image_mobile); ?>
      </div>
    <?php elseif (strtolower($txt_display) == "mom") : ?>
      <div class="txt_promo_body">
        <div class="txt_promo_body_headline">SmokefreeMOM</div>
        <div class="txt_promo_body_text">SmokefreeMOM is a mobile text messaging program that provides 24/7 tips, advice, and encouragement to help pregnant women
          quit smoking. If you would like to sign up for SmokefreeMOM complete this form and click "Subscribe."
          <div class="txt_promo_body_text_signup">
            <?php print l(t('Sign up now!'), 'http://women.smokefree.gov/smokefreemom.aspx', array('attributes' => array('class' => array('smokefreetxt_signup', 'medialanding_button', 'btn')))); ?>
          </div>
          <span>or</span> <span>text <strong>MOM</strong> to <strong>222888</strong></span> </div>
      </div>
      <div class="txt_promo_image">
        <?php print render($smokefreetxt_image); ?>
      </div>
      <div class="txt_promo_image_mobile">
        <?php print render($smokefreetxt_image_mobile); ?>
      </div>
    <?php else : ?>
      <div class="txt_promo_body">
        <div class="txt_promo_body_headline">SmokefreeTXT</div>
        <div class="txt_promo_body_text">The program will help you set a quit date and get ready for quitting. You'll get daily tips
          and on-demand help with cravings.
          <div class="txt_promo_body_text_signup">
            <?php print l(t('Sign up now!'), 'smokefreetxt', array('attributes' => array('class' => array('smokefreetxt_signup', 'medialanding_button', 'btn')))); ?>
          </div>
          <span>or</span> <span>text <strong>QUIT</strong> to <strong>47848</strong></span> </div>
      </div>
      <div class="txt_promo_image">
        <?php print render($smokefreetxt_image); ?>
      </div>
      <div class="txt_promo_image_mobile">
        <?php print render($smokefreetxt_image_mobile); ?>
      </div>
    <?php endif;?>
    </div>
  </div>
</div>

<div class="more_articles col-sm-12">
  <?php if (strtolower($txt_display) == "español") : ?>
    <div class="more_articles_headline">Temas de más interés para hoy</div>
  <?php else : ?>
    <div class="more_articles_headline">More Articles on Smokefree</div>
  <?php endif;?>
  <div class="more_articles_1 col-sm-2 col-sm-offset-1"><?php print l($article_1_title, $article_1_url, array('attributes' => array('class' => array('more_articles_link', 'article_1_link')))); ?></div>
  <div class="more_articles_2 col-sm-2"><?php print l($article_2_title, $article_2_url, array('attributes' => array('class' => array('more_articles_link', 'article_2_link')))); ?></div>
  <div class="more_articles_3 col-sm-2"><?php print l($article_3_title, $article_3_url, array('attributes' => array('class' => array('more_articles_link', 'article_3_link')))); ?></div>
  <div class="more_articles_4 col-sm-2"><?php print l($article_4_title, $article_4_url, array('attributes' => array('class' => array('more_articles_link', 'article_4_link')))); ?></div>
  <div class="more_articles_5 col-sm-2"><?php print l($article_5_title, $article_5_url, array('attributes' => array('class' => array('more_articles_link', 'article_5_link', 'last')))); ?></div>
</div>

<div class="get_social col-sm-12">
  <div class="get_social_instagram col-sm-4 col-sm-offset-2">
    <?php if (strtolower($social_display) == "facebook") : ?>
      <div class="get_social_body">
        <div class="get_social_body_headline">Get Social!</div>
        <div class="get_social_body_subheadline">SmokefreeUS Facebook</div>
        <div class="get_social_body_text">The SmokefreeUS Facebook page is a supportive community of people in all stages of quitting. Get tips, find motivation, share your story or read about the experiences of others.</div>
        <div class="get_social_body_button"><a href="https://www.facebook.com/SmokefreeUS/" class="instagram_button medialanding_button btn">Go to Facebook</a></div>
      </div>
      <div class="get_social_image">
        <img class="img-responsive" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF_Social_SFUS.png" alt="Computer" />
      </div>
    <?php elseif (strtolower($social_display) == "español") : ?>
      <div class="get_social_body">
        <div class="get_social_body_headline">Únase a</div>
        <div class="get_social_body_subheadline">SmokefreeUS en Twitter</div>
        <div class="get_social_body_text">¡Juntos somos más fuertes y podemos dejar de fumar! Síganos en Twitter para recibir consejos, apoyo y la motivación para dejar de fumar.</div>
        <div class="get_social_body_button"><a href="https://twitter.com/smokefreegov" class="instagram_button medialanding_button btn">Visitenos en Twitter</a></div>
      </div>
      <div class="get_social_image">
        <img class="img-responsive" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF_Social_Twitter.png" alt="Computer" />
      </div>
    <?php elseif (strtolower($social_display) == "women" || strtolower($social_display) == "mom") : ?>
      <div class="get_social_body">
        <div class="get_social_body_headline">Get Social!</div>
        <div class="get_social_body_subheadline">Smokefree Women Facebook</div>
        <div class="get_social_body_text">The Smokefree Women Facebook page is a supportive community of people in all stages of quitting. Get tips, find motivation, share your story
          or read about the experience of others.</div>
        <div class="get_social_body_button"><a href="https://www.facebook.com/smokefree.women/" class="instagram_button medialanding_button btn">Go to Facebook</a></div>
      </div>
      <div class="get_social_image">
        <img class="img-responsive" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF_Social_SFWomen.png" alt="Computer" />
      </div>
    <?php else : ?>
      <div class="get_social_body">
        <div class="get_social_body_headline">Get Social!</div>
        <div class="get_social_body_subheadline">SmokefreeUS Instagram</div>
        <div class="get_social_body_text">Together we can quit smoking! Join us on Instagram for fun motivational images, helpful tips and inspiration.</div>
        <div class="get_social_body_button"><a href="http://instagram.com/smokefreeus" class="instagram_button medialanding_button btn">Go to Instagram</a></div>
      </div>
      <div class="get_social_image">
        <img class="img-responsive" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/SF_Social_Instagram.png" alt="Computer" />
      </div>
    <?php endif;?>
  </div>
  <div class="get_social_images col-sm-4">
    <img class="get_social_image col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/headphones-music-cravings.png" alt="Cravings last only 5 to 10 minutes" />
    <img class="get_social_image col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/hand-straw-breathe.png" alt="Deep breaths!" />
    <img class="get_social_image col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/notebook-pen-NOPE.png" alt="Not One Puff Ever" />
    <img class="get_social_image col-sm-6" src="/<?php print drupal_get_path('theme', 'smokefreegov'); ?>/images/Smokefree_US_Remember_Reasons.jpg" alt="Remember why you're doing this." />
  </div>
</div>
