
<a href="#content"
	id="skipnav"
	target="_self"
	onClick="javascript:(function($) { $('#content').attr('tabIndex',-1).focus(); }) (jQuery);"
	>Skip navigation</a>



<style>/*.prev_slides{width:33%;float:left;}
.play_slides{width:33%;float:left;}
.pause_slides{width:33%;float:left;}
.carousel-controller{width:100%;}
.more{}*/

/*.logo_area {display:none;}
.wrapper{width: 1200px;
margin: 0 auto;}*/

</style>
	<link href="/<?php echo path_to_theme(); ?>/css/bootstrap.min.css" rel="stylesheet" />

	<!--link href="/<?php echo path_to_theme(); ?>/css/style.css" rel="stylesheet" /-->
    <link href='http://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css' />

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
  <![endif]-->

	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/default.css" />
		<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/component.css" />
     <!--   <link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/rotater.css" />
        -->





 <div class="tagline">
    	<nav id="cl-effect-4" class="cl-effect-4">
    		<p>It doesn't matter where you start. <a href="build-your-quit-plan#cl-effect-4"><strong>Just start.</strong></a>
    	</nav>
	</div>
	<div id="search-header">
			<form method="get"
				action="http://search2.google.cit.nih.gov/search"
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
						name="q"
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



	<?php /*?><div class="row clearfix">
		<div class="col-md-12 column">


	</div><?php */?>



    <?php /*?>  <div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span><span class="icon-bar">
                      </span><span class="icon-bar"></span></button>
                      <a class="navbar-brand" href="#">
<img src="sites/all/themes/sfg/images/header/smokefree-hd1-logo-314x79.png" alt="menu"/></a>
				</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">



                    <?php if (!empty($primary_nav)
	|| !empty($secondary_nav)
	|| !empty($page['navigation'])): ?>
	<div class="nav navbar-nav navbar-right">
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
	<?php endif; ?>

				</div>

			</nav>
		</div><?php */?>





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
    <!-- <div class="carousel slide" id="carousel-262268">

				<div class="carousel-inner">
					<div class="item active">
						 <img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-1.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
						<div class="carousel-caption">
							<h4>
								First Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-2.jpg" alt="Photo by: Daniel Parks Link: http://www.flickr.com/photos/parksdh/5227623068/">
						<div class="carousel-caption">
							<h4>
								Second Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						 <img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-3.jpg" alt="Photo by: Mike Ranweiler Link: http://www.flickr.com/photos/27874907@N04/4833059991/">
						<div class="carousel-caption">
							<h4>
								Third Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
				</div>
                <div class="cont">
                <div class="indicates">
                <ol class="carousel-indicators">
					<li class="active" data-slide-to="0" data-target="#carousel-262268">
					</li>
					<li data-slide-to="1" data-target="#carousel-262268">
					</li>
					<li data-slide-to="2" data-target="#carousel-262268">
					</li>
				</ol></div>

                <div class="right_float">



                  <a class="right carousel-control" href="#carousel-262268" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a></div>

                  <div class="pause_float">


                <a class="pause carousel-control"  href="#carousel-262268" data-pause="false"><span class="glyphicon glyphicon-pause"></span> </a></div></div>

            </div>-->
        <!--<h1> Test Layout</h1>-->

        <!-- end container_slideshow -->



  <?php /*?><div id="masterhead">
<div class="container_slide">
<div class="slideshow">
<div id="slideshow" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="item active">
<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-1.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
<div class="container">
<div class="carousel-caption">
<h1>SlideShow 1</h1>
</div>
</div>
</div><!-- /. Item Active -->
<div class="item">
<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-2.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
<div class="container">
<div class="carousel-caption">
<h1>SlideShow 2</h1>
</div>
</div>
</div>

<!-- /. Item -->
<div class="item">
<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-3.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
<div class="container">
<div class="carousel-caption">
<h1>SlideShow 3</h1>
</div>
</div>
</div>




<!-- /. Item -->
<div class="item">
<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-4.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
<div class="container">
<div class="carousel-caption">
<h1>SlideShow 3</h1>
</div>
</div>
</div>

<!-- /. Item -->
<div class="item">
<img src="/sites/new.smokefree.gov/themes/sfg/images/slides/SFG-Carousel-5.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
<div class="container">
<div class="carousel-caption">
<h1>SlideShow 3</h1>
</div>
</div>
</div>


<!-- /. Item -->
</div><!-- /. Carousel-Inner -->
<div class="controlsBlock">
<div class="controls">
<a class="left carousel-control" href="#slideshow" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>


 <a class="right carousel-control" href="#slideshow" data-slide="next">
 <img src="/sites/new.smokefree.gov/themes/sfg/images/smokeFree_play" /><!--<span class="glyphicon glyphicon-chevron-right"></span>--></a>


  <a class="pause carousel-control"  href="#carousel-262268" data-pause="false">
  <img src="/sites/new.smokefree.gov/themes/sfg/images/smokefree_pause" /><!--<span class="glyphicon glyphicon-pause"></span>--> </a>
<!--<a class="left carousel-control" href="#slideshow" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
 <a class="right carousel-control" href="#slideshow" data-slide="next"><i class="fa fa-chevron-right"></i></a>-->
<div class="carousel-indicators">
<li data-target="#slideshow" data-slide-to="0" class="active"></li>
<li data-target="#slideshow" data-slide-to="1"></li>
<li data-target="#slideshow" data-slide-to="2"></li>
<li data-target="#slideshow" data-slide-to="3"></li>
<li data-target="#slideshow" data-slide-to="4"></li>
</div>
</div>
</div>
</div><!-- /# Slideshow .Carousel -->
</div><!-- /. Slideshow -->
</div><!-- /. Container -->
</div><!-- /# Mastehead -->    <?php */?>





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
            <li class="smokeFree_Img">
              <a href="/smokefreetxt"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_smokefree_txt.png" alt="Smoke Free Txt"></a>
            </li>

            <li class="quizzes_Img">
              <a href="/apps-quitstart" ><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quitSTART.png" alt="Download quitSTART to help you live smokefree"></a>
            </li>

            <!--
            <li class="quizzes_Img">
              <a href="/try-this#quizzes"><img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quizzes.png" alt="Quizzes"></a>
            </li>
            -->

             <li class="quitPlan_Img">
           <a href="/quit-plan"> <img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_quitplan.png" alt="Quit Plan"></a>
          </li>
          <li class="joinUs_Img">
           <a href="https://www.facebook.com/SmokefreeUS"> <img class="img-responsive" src="/<?php echo path_to_theme(); ?>/images/smoke_free_home_joinUs.png" alt="Join Us On Facebook"></a>
          </li>
          </ul>
        </div>

        <!-- <div class="col-md-6 column features_layout">
        <ul class="features">
          <li class="quitPlan_Img">
           <a href="#"> <img class="img-responsive" src="/sites/new.smokefree.gov/themes/sfg/images/smoke_free_home_quitplan.png" alt="Quizzes"></a>
          </li>
          <li class="joinUs_Img">
           <a href="#"> <img class="img-responsive" src="/sites/new.smokefree.gov/themes/sfg/images/smoke_free_home_joinUs.png" alt="Join Us On Facebook"></a>
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



	<!--<div class="row clearfix">
		<div class="col-md-12 column">
			<div class="row clearfix">
				<div class="col-md-6 column">
					<div class="row">
						<div class="col-md-4">
							<div class="thumbnail">
							  <img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">

									 <p>
										Protect Your Loved Ones From Secondhand Smoke
									</p>
									 <p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
							<img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">

								<p>
										Get Free Help Speak With an Expert
									</p>
								 <p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
							  <img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">
									<p>
										There are a variety of quitting programs you Can Access
									</p>

									 <p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 column">
					<div class="row">
						<div class="col-md-4">
							<div class="thumbnail">
							  <img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">

									<p>
										How To Manage Cravings</p>
									<!--<p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
							  <img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">

								<p>
										18 Ways Smoking Affects Your Health</p>
									<!--<p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
							<img alt="300x200" src="images/home/firefighter.jpg">
								<div class="caption">
																		<p>
									Depression 101</p>
									<!--<p>
										<a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div></div></div>--></div></div></div></div>


<div class="logobar">
	<div class="logobar">

		<div class="logobar">
			<div class="social-container">
				<div class="logobar social">
					<div class="facebook-icon">
						<a href="https://www.facebook.com/SmokefreeUS"
						   title="Facebook"
							><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr1-facebook-30x34.png"
								  alt="Facebook" />
						</a>
					</div>
					<div class="facebook-icon">
						<a href="http://www.instagram.com/smokefreeus"
						   title="Instagram"
							><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr2-instagram-46x34.png"
								  alt="Instagram" />
						</a>
					</div>
					<div class="facebook-icon">
						<a class="ext" href="http://www.twitter.com/SmokefreeUs"
						   title="Twitter"
							><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr2-twitter-46x34.png"
								  alt="Twitter" />
						</a>
					</div>
				</div>
			</div>
			<div class="links-container-txt">
				<div class="logobar links">
					<a href="/smokefreetxt"
					   class="logobar links"
					   title="Smokefree TXT">
						<div class="smokefree-txt-icon">
							<img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr3-smokefreetxt-36x34.png"
								 alt="Smokefree TXT" />
						</div>
						<div class="smokefree-txt-text">
							<p><span title="SmokefreeTXT">SmokefreeTXT</span></p>
						</div>
					</a>
				</div>
			</div>
			<div class="links-container-qp">
				<div class="logobar links">
					<a href="/quit-plan"
					   class="logobar links"
					   title="Quit Plan">
						<div class="quit-plan-icon">
							<img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr4-quit-plan-36x34.png"
								 alt="Quit Plan" />
						</div>
						<div class="quit-plan-text">
							<p>Quit&nbsp;Plan</p>
						</div>
					</a>
				</div>
			</div>
			<div class="links-container-qp">
				<div class="logobar links">
					<div>
						<!-- RightNow infrastructure piece. -->
						<form class=''><input id='rn_History_Field' type='hidden'/></form>
						<!-- This can be customized however you like. -->
						<form id="rn_ChatLaunchFormOpen_2_Form" onsubmit="return false;">
							<!-- This markup is required -->
							<div id="rn_nciChatLaunchButton_4">
								<img id="rn_nciChatLaunchButton_4_LoadingIcon" alt="Loading..." class="rn_Hidden" src="https://livehelp.cancer.gov/euf/assets/themes/nci/images/indicator.gif" />
								<!-- Replace the image in the input tag to change the button's "Active" appearance. -->
								<input id="rn_nciChatLaunchButton_4_Button" type="image"  class="chat-buttons" name="cancer-info" src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr2-chat-46x34.png" title="Smoking Cessation Assistance" alt="Smoking Cessation Assistance"></input>
								<!-- Replace this image to change the button's "Inactive" appearance. -->
								<img id="pre_cache" src="https://livehelp.cancer.gov/euf/assets/themes/nci/nci-img/cis-livehelp-quitsmoking-onlick-button.gif" title="Smoking Cessation Assistance" alt="Smoking Cessation Assistance" style="top: -1000px; left: -1000px; position:absolute; visibility:hidden;" />
							</div>
							<!-- End of required markup. -->
						</form>
					</div>

				</div>
			</div>
		</div> <!-- end half-width -->

</div><!-- end logobar -->
<div class="bottom-border"></div>
<div class="footer">
	<ul class="footer-links">
		<li><a href="/">home</a>&nbsp;<span>|</span></li>
		<li><a href="/about-smokefree">about smokefree</a>&nbsp;<span>|</span></li>
		<li><a href="/health-care-professionals">health professionals</a>&nbsp;<span>|</span></li>
		<li><a href="http://www.cancer.gov/global/web/policies/foia" title="Freedom of Information Act">FOIA</a>&nbsp;<span>|</span></li>
		<li><a href="/privacy-policy">privacy</a>&nbsp;<span>|</span></li>
		<li><a href="/accessibility">accessibility</a>&nbsp;<span>|</span></li>
		<li><a href="/viewing-files">viewing files</a>&nbsp;<span>|</span></li>
		<li><a href="/disclaimer">disclaimer</a></li>
	</ul>
	<div class="external-sites">
		<div class="desktop-sites">
			<a href="http://smokefree.gov/veterans"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr8-sf-vet-144x34.png" alt="Smokefree Veterans" /></a>
			<a href="http://women.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-144x34.png" alt="Smokefree Women" /></a>
			<a href="http://teen.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr6-sf-teen-144x34.png" alt="Smokefree Teen" /></a>
			<a href="http://espanol.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-espanol-144x34.png" alt="Smokefree Espa&ntilde;ol" /></a>
		</div>
		<div class="mobile-sites">
			<a href="http://smokefree.gov/veterans"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefreeVET-68x34.png" alt="Smokefree Veterans" /></a>
			<a href="http://women.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-68x34.png" alt="Smokefree Women" /></a>
			<a href="http://teen.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr6-sf-teen-68x34.png" alt="Smokefree Teen" /></a>
			<a href="http://espanol.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-espanol-68x34.png" alt="Smokefree Espa&ntilde;ol" /></a>
		</div>
	</div>
	<div id="search-footer">
		<form method="get"
			  action="http://search2.google.cit.nih.gov/search"
			  name="search"
			  onsubmit="javascript:if (document.getElementById('searchbox-footer').value=='Search'
							|| document.getElementById('searchbox-footer').value=='')
								return false;">
			<input type="hidden" name="site"            value="SMOKEFREE" />
			<input type="hidden" name="client"          value="SMOKEFREE_frontend" />
			<input type="hidden" name="proxystylesheet" value="SMOKEFREE_frontend" />
			<input type="hidden" name="output"          value="xml_no_dtd" />
			<input type="hidden" name="filter"          value="0" />
			<input type="hidden" name="getfields"       value="*" />
			<label for="searchbox-footer"
				   class="hiddenSearch hidden">Search</label>
			<div id="search-footer-container">
				<input id="searchbox-footer"
					   type="text"
					   name="q"
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
					   src="/<?php echo path_to_theme(); ?>/images/content/spacer.png"
					/>
			</div>
		</form>
	</div>
	<ul class="footer-links">
		<li><a href="http://hhs.gov" title="U.S. Department of Health and Human Services">U.S. Department of Health and Human Services</a>&nbsp;<span>|</span></li>
		<li><a href="http://nih.gov" title="National Institutes of Health">National Institutes of Health</a>&nbsp;<span>|</span></li>
		<li><a href="http://cancer.gov" title="National Cancer Inistitute">National Cancer Institute</a>&nbsp;<span>|</span></li>
		<li><a href="http://usa.gov" title="USA.gov">USA.gov</a></li>
	</ul>
	<div class="footer nih-copy">
		<p>NIH..Turning Discovery Into Health&copy;</p>
		<iframe src="http://wcdapps.hhs.gov/Badges/Handlers/Badge.ashx?js=0&amp;widgetname=betobaccofreew200short"
				id="betobaccofreew200short"
				name="betobaccofreew200short"
				title="BeTobaccoFree.gov"
				frameborder="0"
				scrolling="no"
				height="169"
				width="208"
				marginheight="0"
				marginwidth="0"></iframe>
	</div>
</div><!-- end page footer --></div>

<script src="/<?php echo path_to_theme(); ?>/js/modernizr.custom.js"></script>
<script src="/<?php echo path_to_theme(); ?>/js/toucheffects.js"></script>
<script src="/<?php echo path_to_theme(); ?>/js/linkanimation.custom.js"></script>


  <!-- SlidesJS Required: Link to jquery.slides.js -->
  <script src="/<?php echo path_to_theme(); ?>/js/jquery.slides.min.js"></script>

  <link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/jquery.bxslider.css" />
  <script src="/<?php echo path_to_theme(); ?>/js/jquery.bxslider.js"></script>

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
