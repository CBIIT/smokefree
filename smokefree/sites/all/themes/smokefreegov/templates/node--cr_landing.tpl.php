<div class="header_banner col-sm-12">
  <?php
    print render($header_banner);
    print render($header_banner_mobile);
    if (!empty($hero_text)) {
      print '<div class="hero_text">';
      print $hero_text;
      print '</div>';
    }
    if (!empty($promo_button)) {
      print '<div class="promo_button">';
      print $promo_button;
      print '</div>';
    }
  ?>
  <div class="header_banner_logo">
    <?php
      $path = drupal_get_path('theme', 'smokefreegov');
    if ($logo_color == 'white') {
      print l('<img src="/' . $path . '/images/smokefree_logo_white2.png" alt="Smokefree.gov logo" />', '<front>', array('html' => TRUE));
    }
    elseif ($logo_color == 'black') {
      print l('<img src="/' . $path . '/images/smokefree_logo_black.png" alt="Smokefree.gov logo" />', '<front>', array('html' => TRUE));
    }
    if (!empty($extra_logo)) {
      print $extra_logo;
    }
    ?>
  </div>
</div>