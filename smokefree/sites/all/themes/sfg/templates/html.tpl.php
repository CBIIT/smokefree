<!DOCTYPE html>
<html lang="<?php print $language->language; ?>">
<head>
	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MKWX85"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-MKWX85');</script>

	<!-- TEST FOR STAGE ONLY -->
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-15354704-4', 'auto');
  ga('send', 'pageview');
	</script>
	<!-- END TEST FOR STAGE ONLY -->

	<!-- End Google Tag Manager -->	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="X-UA-Compatible" content="IE=9" />
	<?php print $head; ?>
	<title><?php print $head_title; ?></title>

	<!-- Facebook Open Graph Meta Tags -->
	<meta property="og:site_name" content="<?php if (isset($head_title_array['name'])) { echo $head_title_array['name']; } ?>" />
	<meta property="og:title"     content="<?php if (isset($head_title_array['title'])) { echo $head_title_array['title']; } ?>" />
	<meta property="og:image"     content="<?php echo "https://".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/header/facebook-smokefree.jpg" />

	<!-- Pinterest Verification -->
	<meta name="p:domain_verify" content="32173eb410942f97d76ed7cb5887012a"/>

	<!-- Icons -->
	<link rel="apple-touch-icon" href="<?php echo "//".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/favicons/smartphone-icon.png" />
	<link rel="shortcut icon"    href="<?php echo "//".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/favicons/favicon.ico" type="image/x-icon" />

	<!--  Styles -->
	<?php print $styles; ?>
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/bootstrap/css/bootstrap.css"            media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/bootstrap/css/bootstrap-responsive.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main.css"                           media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-0.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-1.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-2.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-3.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-4.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-5.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/main-responsive-layout-6.css"       media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/nav-style.css"                      media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/accordion.css"                      media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/fonts/font.css"                         media="screen,print" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/overrides.css"                      media="screen" />


	<!-- css needed for LiveHelp -->
	<style type='text/css'>
		.rn_Hidden{display:none;}
	</style>

	<?php if (drupal_is_front_page()) : ?>
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/jquery-ui-1.10.3.custom.min.css"    media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/jquery.fancybox.css?v=2.1.5"        media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/home.css"                           media="screen" />
	<link rel="stylesheet" type="text/css" href="/<?php echo path_to_theme(); ?>/css/home-responsive.css"                media="screen" />
<?php
endif;

	/*
	 * Note we are using JQuery 1.8 because 1.9+ is not backward
	 * compatible with the current version of Drupal modules, such as
	 * extLink which references the deprecated .browser call.
	 */
?>

	<!--  JavaScript Libraries -->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js#pubid=smokefreegov"></script>
	<?php  print $scripts;  ?>
<?php if (drupal_is_front_page()) : ?>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery-ui-1.10.3.custom.min.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.scrollTo-min.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/jquery.fancybox.js?v=2.1.5"></script>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/easyXDM.debug.js"></script>
<?php endif; ?>
	<!-- HTML5 element support for older versions of IE -->
	<!--[if lt IE 9]>
	<script type="text/javascript" src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script type="text/javascript" src="//css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->

	<!-- Scripts To Execute on Page Load -->

	<!-- js needed for LiveHelp -->
	<script type="text/javascript">var HOST_SERVER="livehelp.cancer.gov";</script>

	<?php
/* Tier-dependent scripts */
if ($_SERVER['HTTP_HOST'] == "smokefree.gov"
	|| $_SERVER['HTTP_HOST'] == "smokefree.nci.nih.gov") : ?>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-prod.js"></script>
<?php elseif ($_SERVER['HTTP_HOST'] == "smokefree-stage.nci.nih.gov") : ?>
	<script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/init-tier-stage.js"></script>
<?php elseif ($_SERVER['HTTP_HOST'] == "smokefree-dev.nci.nih.gov") : ?>
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
	<span id="layout_desc"></span>
	<?php print $page_top; ?>
	<?php print $page; ?>
	<?php print $page_bottom; ?>

	<?php
	/* If the site is in production... */
	if ($_SERVER['HTTP_HOST'] == "smokefree.gov") : ?>

	<!-- NCI Analytics Code -->
	<script type="text/javascript" src="https://static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js" ></script>
    <script language="javascript" id="_fed_an_ua_tag" src="/<?php echo path_to_theme(); ?>/js/Universal-Federated-Analytics-Min.1.0.js?agency=HHS&subagency=NIH"></script>
	<?php endif; ?>

	<?php /*
	<!-- Survey dialog box -->
	<div id="dialog-modal" class="offscreen" title="Survey">
		<p>
			Thank you for visiting our website.
			We ask that you complete a brief
			customer satisfaction survey to
			let us know how we can improve
			Smokefree.gov.
		</p>
	</div>
	*/ ?>
    <script type="text/javascript" src="/<?php echo path_to_theme(); ?>/js/vetsidebar.js"></script>

</body>
</html>
<!-- Smokefree.gov v.1.3.2+BL34 -->
