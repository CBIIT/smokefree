<div class="tagline">
  <nav id="cl-effect-4" class="cl-effect-4">
    <p>It doesn't matter where you start. <a href="build-your-quit-plan#cl-effect-4"><strong>Just start.</strong></a>
  </nav>
</div>
<div id="search-header">
  <form method="get"
        action="http://staging.websrch.cit.nih.gov/sps/SmokeFree/Results.html?"
        name="search"
        onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
							|| document.getElementById('searchbox-header').value=='')
								return false;">
    <input type="hidden" name="site"            value="SMOKEFREE" />
    <input type="hidden" name="client"          value="SMOKEFREE_frontend" />
    <input type="hidden" name="proxystylesheet" value="SMOKEFREE_frontend" />
    <input type="hidden" name="output"          value="xml_no_dtd" />
    <input type="hidden" name="filter"          value="0" />
    <input type="hidden" name="getfields"       value="*" />
    <label for="searchbox-header"
           class="hiddenSearch hidden">Search</label>
    <div id="search-header-container">
      <input id="searchbox-header"
             type="text"
             name="query"
             size="30"
             maxlength="255"
             value="Search"
             onfocus="javascript:if (this.value=='Search') this.value='';"
             onblur="javascript:if (this.value == '') this.value ='Search';"
        />&nbsp;&nbsp;
      <input type="submit"
             value="Search"
             alt="Search"
             class="search-button"
             src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" />
    </div>
  </form>
</div>


</div>

<div class="wrapper">


  <div class="col-md-12 column logo_area">
    <div >
      <div class="col-md-12 column">


        <!-- begin logo-->
        <div class="logo-container">
          <a href="/" title="Smokefree.gov">
            <div class="logo">
              <div class="logo-image">
                <img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png"
                     alt="Smokefree.gov"
                  />
              </div>
            </div>
          </a>
        </div>
        <!-- end logo -->

      </div>
      <div class="col-md-12 column">



        <?php if (!empty($primary_nav)
          || !empty($secondary_nav)
          || !empty($page['navigation'])): ?>
          <div class="navbar nav">
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
          <a href="#"
             class="mobile-btn collapsed"
             data-toggle="collapse"
            ><img src="/<?php echo path_to_theme(); ?>/images/header/smokefree-hd3-menu-btn-mobile-46x44.png"
                  alt="menu"
              /></a>
          <div class="nav-collapse collapse">
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
          <!-- end class navbar nav -->



        <?php endif; ?>

        <div class="tagline_responsive">
          <nav id="cl-effect-4" class="cl-effect-4">
            <p>It doesn't matter where you start. <a href="build-your-quit-plan#cl-effect-4"><strong>Just start.</strong></a>
          </nav>
        </div>

      </div>
    </div>


  </div>

  <!----Main Content--->
  <div class="container">
    <div class="rule"></div>
    <div class="row">
      <div class="col-md-6 column">

        <!-----------------------------------SlideBar Area---------------------------------->
        <div class="row clearfix">

          <!-- Carousel -->

          <div class="compTime">

            <div id="homeCarousel" class="carousel slide">
              <!-- Menu -->


              <!-- Items -->
              <div class="carousel-inner">

                <ul class="bxCarousel">

                  <!-- Item 1 -->

                  <li class="item active">
                    <a href="/apps-quitstart"> <img alt="Download quitSTART to help you live smokefree" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-2.jpg"></a>
                    <div class="container">
                      <!--<div class="carousel-caption">
                        <h1>Changes to the Grid</h1>
                        <p>Bootstrap 3 still features a 12-column grid, but many of the CSS class names have completely changed.</p>
                        <p><a class="btn btn-large btn-primary" href="#">Learn more</a></p>
                      </div>-->
                    </div>
                  </li>

                  <!-- Item 2 -->

                  <li class="item">



                    <!--<a href="/explore-quit-methods"> <img alt="Female Doctor Smiling" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-1.jpg"></a>-->
                    <a href="/smokefreemom" target="_blank"> <img alt="Get Quit Help: SmokefreeMOM Texts" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-1.jpg"></a>
                    <div class="container">
                      <!-- <div class="carousel-caption">
                         <h1>Bootstrap 3 Carousel Layout</h1>
                         <p>This is an example layout with carousel that uses the Bootstrap 3 styles.</p>
                         <p><a class="btn btn-lg btn-primary" href="http://getbootstrap.com">Learn More</a>
                       </p></div>-->
                    </div>
                  </li>

                  <!-- Item 3 -->
                  <li class="item">
                    <a href="/goal-setting-eating-physical-activity"><img alt="Woman Running in Desert" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-3.jpg"></a>
                    <div class="container">
                      <!--<div class="carousel-caption">
                        <h1>Changes to the Grid</h1>
                        <p>Bootstrap 3 still features a 12-column grid, but many of the CSS class names have completely changed.</p>
                        <p><a class="btn btn-large btn-primary" href="#">Learn more</a></p>
                      </div>-->
                    </div>
                  </li>

                  <!-- Item 4 -->
                  <li class="item">
                    <a href="/cravings">
                      <img alt="Fireman Not Smiling" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-4.jpg"></a>
                    <div class="container">
                      <!--<div class="carousel-caption">
                        <h1>Percentage-based sizing</h1>
                        <p>With "mobile-first" there is now only one percentage-based grid.</p>
                        <p><a class="btn btn-large btn-primary" href="#">Browse gallery</a></p>
                      </div>-->
                    </div>
                  </li>

                  <!-- Item 5 -->
                  <li class="item">
                    <a href="/ways-to-boost-your-mood-after-quitting"> <img alt="Child on Womans Back Smiling" src="/<?php echo path_to_theme(); ?>/images/SFG-Carousel-5.jpg"></a>
                    <div class="container">
                      <!-- <div class="carousel-caption">
                         <h1>Changes to the Grid</h1>
                         <p>Bootstrap 3 still features a 12-column grid, but many of the CSS class names have completely changed.</p>
                         <p><a class="btn btn-large btn-primary" href="#">Learn more</a></p>
                       </div>-->
                    </div>
                  </li>


                </ul>
              </div>

            </div>

          </div></div></div>


      <div class="col-md-6 column features_layout">
        <div class="row features_column">
          <div class="col-md-6 column features_label">

            <ul class="features">
            <li class="joinUs_Img">
                <a href="/daily-challenges-and-practice-quit"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_daily-challenges-blue.png" alt="Smoke Free Daily Challenges"></a>
              </li>

              <li class="quizzes_Img">
                <a href="/apps" ><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quit-apps.png" alt="Get Support On Your Phone 24/7"></a>
              </li>

              <!--
            <li class="quizzes_Img">
              <a href="/try-this#quizzes"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quizzes.png" alt="Quizzes"></a>
            </li>
            -->

              <li class="quitPlan_Img">
                <a href="/quit-plan"> <img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quitplan.png" alt="Quit Plan"></a>
              </li>
              <li class="smokeFree_Img">
                <a href="/smokefreetxt"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_smokefree_txt-red.png" alt="Smoke Free Txt"></a>
                <!--
                <a href="/smokefreetxt"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_smokefree_txt-half.png" alt="Smoke Free Txt: quit with text messages; sign up today."></a>
                <a href="/practicequittxt"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_smokefree_txt-practice-half.png" alt="Smoke Free Txt: Practice Quit"></a>
                -->
              </li>
            </ul>
          </div>

          <!-- <div class="col-md-6 column features_layout">
          <ul class="features">
            <li class="quitPlan_Img">
             <a href="#"> <img class="img-responsive" src="/sites/new.smokefree.gov/themes/smokefreegov/images/smoke_free_home_quitplan.png" alt="Quizzes"></a>
            </li>
            <li class="joinUs_Img">
             <a href="#"> <img class="img-responsive" src="/sites/new.smokefree.gov/themes/smokefreegov/images/smoke_free_home_joinUs.png" alt="Join Us On Facebook"></a>
            </li>
          </ul>
          </div>-->
        </div>
      </div>

    </div>
  </div>

  <div class="row">
    <div class="col-md-12 column mouseOver">
      <ul class="grid cs-style-3">

        <li>
          <div class="img-container">
            <figure>
              <img src="/<?php echo path_to_theme(); ?>/images/stressed-man.jpg" alt="">
              <p class="cover">Depression 101</p>
              <figcaption>

                <!--	<div class="secondImg"><img src="/<?php echo path_to_theme(); ?>/images/firefighter.jpg" alt="img04"></div>-->
                <h4>Depression 101</h4>
                <span> Depression is more than feeling sad or having a bad day. </span>

                <a class="more" href="<?php print $GLOBALS['base_url'] ?>/depression-and-smoking">More on Mood</a>

              </figcaption>
            </figure>
          </div>
        </li>



        <li>
          <div class="img-container">

            <figure>
              <!--<img src="/<?php echo path_to_theme(); ?>/images/weights.jpg" alt="Young child with weights"> <p class="cover">Want to Be More Physically Active?</p>-->
              <img src="/<?php echo path_to_theme(); ?>/images/calculatorandfood.jpg" alt="Get Health Tips by Text Message"> <p class="cover">Get Health Tips by Text Message</p>
              <figcaption>
                <h4>Get Health Tips by Text Message</h4>
                <span>HealthyYouTXT is designed for men and women across the United States who are trying to live a healthier lifestyle.</span>

                <a class="more" href="<?php print $GLOBALS['base_url'] ?>/healthyyou">More on HealthyYouTXT</a>

              </figcaption>
            </figure>
          </div>
        </li>


        <li>
          <div class="img-container">
            <figure>
              <img src="/<?php echo path_to_theme(); ?>/images/foods.jpg" alt="Foods"> <p class="cover">Tips for Eating </p>
              <figcaption>
                <h4>Tips for Eating More Fruits, Vegetables, & Whole Grains</h4>
                <span>We all know fruits, vegetables, and whole grains are an </span>
                <a class="more" href="/tips-for-eating-more-fruits">More on Nutrition </a>
              </figcaption>
            </figure>
          </div>
        </li>


        <li>
          <div class="img-container">

            <figure>
              <img src="/<?php echo path_to_theme(); ?>/images/Doctor.jpg" alt="Doctor in white coat"> <p class="cover"> Find a Quit Method That Works For You</p>
              <figcaption>
                <h4>Find a Quit Method That Works For You</h4>
                <span>Some quit smoking methods are more effective than others </span>

                <a class="more" href="<?php print $GLOBALS['base_url'] ?>/explore-quit-methods">More on Preparation </a>

              </figcaption>
            </figure>
          </div>
        </li>


        <li>
          <div class="img-container">

            <figure>
              <img src="/<?php echo path_to_theme(); ?>/images/smiling-woman.jpg" alt="Smiling woman">
              <p class="cover">Prepare to Quit</p>
              <figcaption>
                <h4>Prepare To Quit</h4>
                <span>We get it, quitting is hard. But it is easier if you . . . </span>

                <a class="more" href="<?php print $GLOBALS['base_url'] ?>/steps-to-prepare">More on Quitting </a>

              </figcaption>
            </figure></div>
        </li>

        <li>
          <div class="img-container">
            <figure>
              <img src="/<?php echo path_to_theme(); ?>/images/guy-friends.jpg" alt="">

              <p class="cover">18 Ways Smoking Affects Your Health</p>
              <figcaption>
                <!--<div class="secondImg"><img src="/<?php echo path_to_theme(); ?>/images/firefighter.jpg" alt="img04"></div>--><h4>18 Ways Smoking Affects Your Health</h4>
                <span>Smoking harms nearly every organ of the body. Some of ... </span>

                <a class="more" href="<?php print $GLOBALS['base_url'] ?>/health-effects">More on Your Health </a>

              </figcaption>
            </figure></div>
        </li>
      </ul>

      <!-----Image Container for Smaller Screens--->
      <ul class="smaller_grid">

        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/stressed-man.jpg" alt="">
            </div>

            <div class="contentLayout1">
              <h4>Depression 101</h4>
              <p>Depression is more than feeling sad or having a bad day. </p>
              <div class="look"><a href="/depression-and-smoking">More on Mood</a></div>
            </div>
          </div>
        </li>

        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/weights.jpg" alt="">
            </div>

            <div class="contentLayout1">
              <h4>Want to Be More Physically Active?</h4>
              <p>Trying to meet the expert recommendations for maintaining  </p>
              <div class="look"><a href="/want-to-be-more-physically-active">More on Fitness</a></div>
            </div>

          </div>
        </li>

        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/foods.jpg" alt="">
            </div>
            <div class="contentLayout1">
              <h4>Tips for Eating</h4>
              <p>We all know fruits, vegetables, and whole grains are an..</p>
              <div class="look"><a href="/tips-for-eating-more-fruits">More on Nutrition</a></div>
            </div>
          </div>
        </li>

        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/Doctor.jpg" alt="">
            </div>
            <div class="contentLayout1">
              <h4>Methods That Work For You </h4>

              <p>Some quit smoking methods are more effective than others  </p>
              <div class="look"><a href="/explore-quit-methods">More on Preparation</a></div>
            </div>
          </div>
        </li>



        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/smiling-woman.jpg" alt="">
            </div>


            <div class="contentLayout1">
              <h4>Prepare to Quit</h4>
              <p>We get it, quitting is hard. But it is easier if you….  </p>
              <div class="look"><a href="/steps-to-prepare">More on Quitting</a></div>
            </div>
          </div>
        </li>

        <li>
          <div class="img-container_2">
            <div class="img-layout">
              <img src="/<?php echo path_to_theme(); ?>/images/guy-friends.jpg" alt="">
            </div>

            <div class="contentLayout1">
              <h4>18 Ways Smoking Affects Your Health</h4>
              <p>Smoking harms nearly every organ of the body. Some of ... </p>
              <div class="look"><a href="/health-effects">More on Your Health</a></div>
            </div>
          </div>
        </li>
      </ul>
      <!-- /container -->

    </div>
</div></div></div></div>

<?php require_once drupal_get_path('theme', 'smokefreegov') . '/templates/' . $footer_filename; ?>

<script type="text/javascript">

  var $k = jQuery.noConflict();
  // $k is now an alias to the jQuery function; creating the new alias is optional.

  $k(document).ready(function() {

    $k('.bxCarousel').bxSlider({
      auto: true,
      autoControls: true
    });

  });

</script>
