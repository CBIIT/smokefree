<!DOCTYPE html>
<html lang="<?php print $language->language; ?>">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="p:domain_verify" content="74faf188ae2b487d9994f17c3adffab8" />
	<meta name="X-UA-Compatible" content="IE=9" />
	<?php print $head; ?>
	<title>
<?php if (drupal_is_front_page()) : ?>
		Bienvenidos a Smokefree espa&ntilde;ol
<?php else : ?>
		<?php print $head_title; ?>
<?php endif; ?>
	</title>

	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-5TGX3D');</script>
	<!-- End Google Tag Manager -->

	<!-- Facebook Open Graph Meta Tags -->
	<meta property="og:site_name" content="<?php if (isset($head_title_array['name'])) { echo $head_title_array['name']; } ?>" />
	<meta property="og:title"     content="<?php if (isset($head_title_array['title'])) { echo $head_title_array['title']; } ?>" />
	<meta property="og:image"     content="<?php echo "http://".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/header/facebook-smokefree-espanol.jpg" />

	<!-- Icons -->
	<link rel="apple-touch-icon" href="<?php echo "//".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/favicons/smartphone-icon.png" />
	<link rel="shortcut icon"    href="<?php echo "//".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/favicons/favicon.ico" type="image/x-icon" />

	<!--  Styles -->
	<?php print $styles; ?>
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/bootstrap/css/bootstrap.css"            media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/bootstrap/css/bootstrap-responsive.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main.css"                           media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive.css"                media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/nav-style.css"                      media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/accordion.css"                      media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/fonts/font.css"                         media="screen,print" />
	<?php if (drupal_is_front_page()) : ?>
		<?php /* -- The following are used by the message bar and survey pop-up on SFG site
			<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/jquery-ui-1.10.3.custom.min.css"    media="screen" />
			<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/jquery.fancybox.css?v=2.1.5"        media="screen" />*/
		?>
		<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/home.css"                           media="screen" />
		<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/home-responsive.css"                media="screen" />
	<?php endif; ?>

	<!--  JavaScript Libraries -->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4dcac22c60171f9e"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/bootstrap/js/bootstrap.js"></script>
	<?php  print $scripts;  ?>
	<?php if (drupal_is_front_page()) : ?>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery-ui-1.10.3.custom.min.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.scrollTo-min.js"></script>
	<?php
	/* -- The following are used by the message bar and survey pop-up on SFG site
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.fancybox.js?v=2.1.5"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/easyXDM.debug.js"></script>
	--*/
	endif; ?>
	<!-- HTML5 element support for older versions of IE -->
	<!--[if lt IE 9]>
	<script type="text/javascript" src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script type="text/javascript" src="//css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->

	<!-- Scripts To Execute on Page Load -->
<?php

	/* Tier-dependent scripts */
	if ($_SERVER['HTTP_HOST'] == "espanol.smokefree.gov"
		|| $_SERVER['HTTP_HOST'] == "espanol.smokefree.nci.nih.gov") : ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-prod.js"></script>
	<?php elseif ($_SERVER['HTTP_HOST'] == "espanol.smokefree-stage.nci.nih.gov") : ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-stage.js"></script>
	<?php elseif ($_SERVER['HTTP_HOST'] == "espanol.smokefree-dev.nci.nih.gov") : ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-dev.js"></script>
	<?php else : ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-mmg-dev.js"></script>
	<?php
	endif;

	/* Front-page only scripts */
	if (drupal_is_front_page()) : ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-home.js"></script>
	<?php endif; ?>
		<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init.js"></script>
</head>

<body class="<?php print $classes; ?>" <?php print $attributes;?>>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TGX3D"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->

	<!--<span id="layout_desc"></span>-->
	<?php print $page_top; ?>
	<?php print $page; ?>
	<?php print $page_bottom; ?>

	<?php
	/* If the site is in production... */
	if ($_SERVER['HTTP_HOST'] == "espanol.smokefree.gov") : ?>

	<!-- NCI Analytics Code -->
 	<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js" ></script>
	<?php endif; ?>

<?php
	/*
	<!-- Survey dialog box
	<div id="dialog-modal" class="offscreen" title="Survey">
		<p>
			Thank you for visiting our website.
			We ask that you complete a brief
			customer satisfaction survey to
			let us know how we can improve
			espanol.smokefree.gov.
		</p>
	</div>-->
	*/
?>
</body>
</html>
<!-- espanol.smokefree.gov v.1.3.2+BL34 -->
