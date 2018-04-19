<div class="container-page">
  <?php
  $path = request_path();
  if (strpos($path, 'veterans') === FALSE):
    ?>

      <nav class="navbar navbar-default TopHat">
          <div class="container-fluid">
              <div class="navbar-header">
                  <div type="button" id="toggle-btn" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tophat-navbar-collapse" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="toggle-message text collapsed">Explore the<br />Smokefree Family</span>
                      <span class="toggle-message text expanded">CLOSE</span>
                      <span class="toggle-message graphic">
                          <img class="toggle-message collapsed" src="/sites/all/themes/smokefreegov/images/header/tophat-grid-2x.png" alt="grid" />
                          <img class="toggle-message toggle-arrow" src="/sites/all/themes/smokefreegov/images/header/tophat-arrow-2x.png" alt="arrow" />
                      </span>
                  </div>
                  <a class="navbar-brand collapsed" href="#"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-gov.png" alt="smokefree-gov" /></a>
              </div>

              <div class="collapse navbar-collapse" id="tophat-navbar-collapse">
                  <ul class="nav navbar-nav">
                      <li class="active"><a href="https://smokefree.gov" id="smokefree-gov"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-gov.png" alt="smokefree-gov" /><span class="sr-only">(current)</span></a></li>
                      <li><a href="https://smokefree.gov/veterans" id="smokefree-vet"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-vet.png" alt="smokefree-vet" /></a></li>
                      <li><a href="https://women.smokefree.gov" id="smokefree-women"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-women.png" alt="smokefree-women" /></a></li>
                      <li><a href="https://teen.smokefree.gov" id="smokefree-teen"><span><img src="/sites/all/themes/smokefreegov/images/header/smokefree-teen.png" alt="smokefree-teen" /></span></a></li>
                      <li><a href="https://espanol.smokefree.gov" id="smokefree-espanol"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-espanol.png" alt="smokefree-espanol" /></a></li>
                      <li><a href="https://60plus.smokefree.gov" id="smokefree-60plus"><img src="/sites/all/themes/smokefreegov/images/header/smokefree-60+.png" alt="smokefree-60+" /></a></li>
                  </ul>
              </div>
          </div>
      </nav>

  <?php endif; ?>

    <div id="bg-container">
    <div id="bg-photo"></div>
  </div>

  <div class="nav-bottom-border"><!--<img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>

  <div class="header-col-12" id="main-nav">
    <div class="nav-bar">
      <div class="nav-bar-logo">
        <a href="/"><img alt="Smokefree-logo" class="nav-bar-brand" src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree_logo.png" /></a>
      </div>

      <div class="nav-bar-menu logo_area">
        <?php if (!empty($primary_nav)
            || !empty($secondary_nav)
            || !empty($page['navigation'])): ?>
          <div id="mega-desktop" class="navbar nav">
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
          </div>

          <!-- end desktop nav -->

        <?php endif; ?>
      </div>
      <div class="nav-bar-icon">
        <span class="glyphicon glyphicon-search nav-search" aria-hidden="true"></span>
      </div>

    </div>

  </div>
  <div class="header-col-12 search-bar" >
    <form class="search-bar-form" action="https://barney2.cit.nih.gov/search" method="get" name="search" onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
  							|| document.getElementById('searchbox-header').value=='')
  								return false;" _lpchecked="1">
      <input name="site" type="hidden" value="SMOKEFREE"> <input name="client" type="hidden" value="SMOKEFREE_frontend"> <input name="proxystylesheet" type="hidden" value="SMOKEFREE_frontend"> <input name="output" type="hidden" value="xml_no_dtd"> <input name="filter" type="hidden" value="0"> <input name="getfields" type="hidden" value="*"> <label class="hiddenSearch sr-only" for="searchbox-header">Search</label>
      <div class="search-bar-group">
          <label for="searchbox-header-input" class="element-invisible">Search</label>
        <input maxlength="255" name="q" id="searchbox-header-input" onblur="javascript:if (this.value == '') this.value ='Search';" onfocus="javascript:if (this.value=='Search') this.value='';" size="30" type="text" value="Search" class="search-bar-input" placeholder="Search">
        <button type="submit" value="Search" class="btn btn-default">Submit</button>
        <a class="closebtn">&times;</a>
      </div>
    </form>
  </div>

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
