<?php 
/*

<header>
	<div class="tagline">
		<p>It doesn't matter where you start. <strong>Just start.</strong></p>
		<?php print render($page['tagline']); ?>
	</div>
	<div class="logo">
	<?php if (!empty($logo)): ?>
		<a class="logo" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"
			><img 
				src="<?php print $logo; ?>" 
				alt="<?php print t('Home'); ?>" />
		</a></div>
	<?php endif; ?>
	<div id="navbar" class="navbar">
		<div class="container">   
			
			<!-- .btn-navbar is used as the toggle for collapsed navbar content -->
			<a class="btn btn-navbar" 
				data-toggle="collapse" 
				data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</a>
			
			<?php if (!empty($site_name)): ?>
				<h1 id="site-name">
					<a href="<?php print $front_page; ?>" 
						title="<?php print t('Home'); ?>" 
						class="brand"
						><?php print $site_name; ?></a>
				</h1>
			<?php endif; ?>
			<?php if (!empty($primary_nav) 
						|| !empty($secondary_nav) 
						|| !empty($page['navigation'])): ?>
				<div class="nav-collapse collapse">
					<nav role="navigation">
					<?php if (!empty($primary_nav)): ?>
						<?php print render($primary_nav); ?>
					<?php endif; ?>
					<?php if (!empty($page['navigation'])): ?>
						<?php print render($page['navigation']); ?>
					<?php endif; ?>
					<?php if (!empty($secondary_nav)): ?>
						<?php print render($secondary_nav); ?>
					<?php endif; ?>
					</nav>
				</div>
			<?php endif; ?>
		</div>
	</div>
</header>

	<?php if (!empty($page['sidebar_first'])): ?>
		<aside class="span3" role="complementary">
			<?php print render($page['sidebar_first']); ?>
		</aside>  <!-- /#sidebar-first -->
	<?php endif; ?>  
*/
	?>
		
	<!-- Photo grid navigation  -->
	<a id="main-content"></a>
	<h1 class="page-header"><?php print $title; ?></h1>
	<div class="container-fluid picture-grid">
		
		<!-- First row (desktop view) -->
		<div class="row-fluid picture-row">
			<div class="picture-box tablet-column-1 green">
				<div class="img-container"
					><a href="smooth_scroll"
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo1.jpg" 
							alt="Picture one." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-grn-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box tablet-column-2 blue">
				<div class="img-container"
					><a href="smooth_scroll"
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo2.jpg" 
							alt="Picture two." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-blu-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box tablet-column-1 orange">
				<div class="img-container"
					><a href="smooth_scroll"
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo3.jpg" 
							alt="Picture three." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-ong-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box extra green">
				<div class="img-container"
					><a href="smooth_scroll"
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo4.jpg" 
							alt="Picture four." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-grn-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		
		<!-- Second row  (desktop view) -->
		<div class="row-fluid picture-row">
			<div class="picture-box tablet-column-2 blue">
				<div class="img-container"
					><a href="smooth_scroll" 
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo5.jpg" 
							alt="Picture five." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-blu-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box tablet-column-1 orange">
				<div class="img-container"
					><a href="smooth_scroll" 
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo6.jpg" 
							alt="Picture six." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-ong-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box tablet-column-2 green">
				<div class="img-container"
					><a href="smooth_scroll" 
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo7.jpg" 
							alt="Picture seven." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-grn-tablet-29x29.png" 
									alt="Right Arrow." 
									class="image-caption-arrow"
									/>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="picture-box extra blue">
				<div class="img-container"
					><a href="smooth_scroll" 
						><img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo8.jpg" 
							alt="Picture eight." 
							/>
						<div class="image-caption-bg"
							><div class="image-caption-text"
								>Lorem ipsum dolor sit
								<img src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-arrw-rgt-blu-tablet-29x29.png" 
								alt="Right Arrow." 
								class="image-caption-arrow"
								/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	
	<?php
/*
    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="span3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

  </div>
  <div class="logobar">
  	<?php print render($page['highlighted']); ?>
	</div>

  <footer class="footer">
     <div class="row-fluid footer">
        <div class="span12">
                <ul class="nav-tabs">
                    <li><a href="front">home |</a></li>
                    <li><a href="about-smokefree">about smokefree |</a></li>
                    <li><a href="for-health-professionals">for health professionals |</a></li>
                    <li><a href="dictionary">dictionary</a></li>
                    <li><a href="privacy">privacy |</a></li>
                    <li><a href="accessibility">accessibility |</a></li>
                    <li><a href="viewing-files">viewing files |</a></li>
                    <li><a href="disclaimer">disclaimer</a></li>
                </ul>
            </div>
            <div class="span12">
                <ul class="nav-tabs">
                    <li><a href="http://women.smokefree.gov">women.smokefree.gov</a></li>
                    <li><a href="http://teen.smokefree.gov">teen.smokefree.gov</a></li>
                    <li><a href="http://espanol.smokefree.gov">espanol.Smokefree.gov</a></li>
                </ul>
            </div>           
    <?php print render($page['footer']); ?>
  </footer>
*/
	?>
