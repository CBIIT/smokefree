<div class="container-page">
  <?php
  $path = request_path();
  if (strpos($path, 'veterans') === FALSE):
    ?>
      <nav class="scrollmenu TopHat">
          <div class="nav-container">
              <a href="https://smokefree.gov" id="smokefree-gov"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-gov.png" alt="smokefree-gov"></a>
              <a href="https://smokefree.gov/veterans" id="smokefree-vet"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-vet.png" alt="smokefree-vet"></a>
              <a href="https://women.smokefree.gov" id="smokefree-women"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-women.png" alt="smokefree-women"></a>
              <a href="https://teen.smokefree.gov" id="smokefree-teen"><span><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-teen.png" alt="smokefree-teen"></span></a>
              <a href="https://espanol.smokefree.gov" id="smokefree-espanol"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-espanol.png" alt="smokefree-espanol"></a>
              <a href="https://60plus.smokefree.gov" id="smokefree-60plus"><img src="/sites/all/themes/smokefreeteen/dist/images/smokefree-60+.png" alt="smokefree-60+"></a>
          </div>
      </nav>
      <div class="sfg-nav-bar-menu logo_area" id="sfg-nav-bar-menu">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 nav-inner">
          <?php if (!empty($primary_nav)
              || !empty($secondary_nav)
              || !empty($page['navigation'])): ?>
                  <nav role="navigation">
                      <?php
                      if (!empty($primary_nav)) {
                          print render($primary_nav);
                      }
                      if (!empty($page['navigation'])) {
                          print render($page['navigation']);
                      }
                      if (!empty($secondary_nav)) {
                          print render($secondary_nav);
                      }
                      ?>
                  </nav>

              <!-- end desktop nav -->

          <?php endif; ?>
      </div></div></div></div>
  <?php endif; ?>

    <div id="bg-container">
    <div id="bg-photo"></div>
  </div>

  <div class="nav-bottom-border"><!--<img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>

  <!-- Brand and toggle get grouped for better mobile display -->

  <div class="nav-bar-header" id="nav-bar-header">
    <button type="button" data-toggle="collapse" class="nav-bar-toggle" onclick="openNav()"><span class="sr-only">Toggle navigation</span>MENU</button>
  </div>


  <!--  mobile navigation display -->

  <div id="mobile-nav"> <a class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="#" class="mobilebtn" data-toggle="collapse" aria-expanded="false">MENU</a>
<!--      <button type="button" data-toggle="collapse" class="nav-bar-toggle" aria-expanded="true">MENU</button> -->
      <!-- Actual Menu -->
      <div id="mobile-accordion" role="tablist" aria-multiselectable="true">
        <?php
        if (!empty($primary_nav)) {
          print render($primary_nav);
        }
        if (!empty($page['navigation'])) {
          print render($page['navigation']);
        }
        if (!empty($secondary_nav)) {
          print render($secondary_nav);
        }
        ?>
      </div>



    </div>
  </div>
  <!--navigation end -->
