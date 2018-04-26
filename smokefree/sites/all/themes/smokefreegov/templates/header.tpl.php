<div class="container-page">
  <?php
  $path = request_path();
  if (strpos($path, 'veterans') === FALSE):
    ?>
      <nav class="scrollmenu">
          <div class="nav-container">
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


    <div id="bg-container">
    <div id="bg-photo"></div>
  </div>

  <div class="nav-bottom-border"><!--<img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>

  <!-- Brand and toggle get grouped for better mobile display -->

  <div class="nav-bar-header col-sm-12" id="nav-bar-header">
      <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-responsive" aria-controls="navbar-responsive" aria-expanded="false">
              <div class="nav-hamburger">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </div> <!-- /.nav-hamburger -->
              <div class="nav-menu-title">MENU</div>
          </button>
      </div>
      <button class="header-search-form__toggle mobile-search-btn"><span class="sr-only">Open the Search Form</span></button>
      <div class="search-overlay">
          <form action="https://barney2.cit.nih.gov/search" method="get" name="search" onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
  							|| document.getElementById('searchbox-header').value=='')
  								return false;" _lpchecked="1">
              <input name="site" type="hidden" value="SMOKEFREE"> <input name="client" type="hidden" value="SMOKEFREE_frontend"> <input name="proxystylesheet" type="hidden" value="SMOKEFREE_frontend"> <input name="output" type="hidden" value="xml_no_dtd"> <input name="filter" type="hidden" value="0"> <input name="getfields" type="hidden" value="*">
              <div class="search-icon"></div>
              <div class="search-field-wrapper">
                  <input name="q" id="searchbox-header-input" onblur="javascript:if (this.value == '') this.value ='Search';" onfocus="javascript:if (this.value=='Search') this.value='';" size="50" maxlength="128" type="text" class="search-bar-input form-control" placeholder="Search Smokefree">
              </div> <!-- /.search-field-wrapper -->
              <button type="submit" value="Search" class="btn btn-submit">Go</button>
              <button type="close" value="close" class="btn btn-close">
                  <span class="glyphicon glyphicon-remove-circle"></span>
                  <span class="sr-only">Close Search</span>
              </button>
          </form>
      </div>
  </div>


  <!--  mobile navigation display -->

  <div id="mobile-nav"> <a class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="#" class="mobilebtn" data-toggle="collapse" aria-expanded="false">MENU</a>
<!--      <button type="button" data-toggle="collapse" class="nav-bar-toggle" aria-expanded="true">MENU</button> -->
      <!-- Actual Menu -->
<!--      <nav id="navbar-responsive" class="navbar-collapse collapse" role="navigation" aria-expanded="false">-->
<!--        --><?php
//        if (!empty($primary_nav)) {
//          print render($primary_nav);
//        }
//        if (!empty($page['navigation'])) {
//          print render($page['navigation']);
//        }
//        if (!empty($secondary_nav)) {
//          print render($secondary_nav);
//        }
//        ?>
<!--      </nav>-->
        <nav id="navbar-responsive" class="navbar-collapse collapse" role="navigation" aria-expanded="false" style="">
            <ul class="nav navbar-nav">
                <li class="responsive-menu-controls">
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="nav-back-wrapper">
                                <button class="nav-back">BACK</button>
                                <div class="divider"></div>
                            </div> <!-- /.nav-back=-wrapper -->
                        </div> <!-- /.col-xs-6 -->
                        <div class="col-xs-6">
                            <button class="nav-close">CLOSE</button>
                        </div> <!-- /.col-xs-6 -->
                    </div> <!-- /.row -->
                </li> <!-- /.responsive-menu-controls -->
                <li class="slide-menu">
                    <ul class="landingpage-menu">
                        <li class="active"><a href="/home">SMOKEFREE.GOV HOME</a></li>
                    </ul>
                    <ul class="submenu-1">
                    </ul>
                    <ul class="submenu-2">
                    </ul>
                    <ul class="submenu-3">
                    </ul>
                    <ul class="submenu-4">
                    </ul>
                    <ul class="submenu-5">
                    </ul>
                </li>
            </ul> <!-- /.nav /.navbar-nav -->
        </nav>



    </div>
  </div>
  <?php endif; ?>
  <!--navigation end -->
