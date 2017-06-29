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
	<script type="text/javascript" src="//static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js" ></script>
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

	<!-- LiveHelp Scripts. -->
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/yahoo-dom-event/yahoo-dom-event.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/connection/connection-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/animation/animation-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/container/container-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/history/history-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/json/json-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/rnt/rnw/yui_2.7/element/element-min.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Ajax.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Text.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.UI.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.UI.AbuseDetection.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Url.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/RightNow.Event.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/euf/rightnow/debug-js/TreeViewAriaPlugin.js'></script>
	<script type='text/javascript' src='https://livehelp.cancer.gov/cgi-bin/nci.cfg/php/euf/application/development/source/widgets/custom/chat/nciChatLaunchButton/logic.js'></script>
	<script type="text/javascript">
		/* <![CDATA[ */
		RightNow.Url.setParameterSegment(5);
		RightNow.Interface.Constants =
		{"ACTION_ADD":1,"ANY_FILTER_VALUE":"~any~","EUF_DT_CHECK":12,"EUF_DT_DATE":1,"EUF_DT_DATETIME":2,"EUF_DT_FATTACH":11,"EUF_DT_HIERMENU":9,"EUF_DT_INT":5,"EUF_DT_MEMO":6,"EUF_DT_PASSWORD":7,"EUF_DT_RADIO":3,"EUF_DT_SELECT":4,"EUF_DT_THREAD":10,"EUF_DT_VARCHAR":8,"INT_NULL":-2147483647,"CAN_USE_ARIA":false,"API_VALIDATION_REGEX_EMAIL":"((([-_!#$%&'*+\/=?^~`{|}\\w]+([.][-_!#$%&'*+\/=?^~`{|}\\w]*)*)|(\"[^\"]+\"))@[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*(\\.[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*)+[;, ]*)+"};
		YAHOO.util.Event.throwErrors = true;
		RightNow.Interface.setMessagebase(function(){return {"WARNING_LBL":"Warning","INFORMATION_LBL":"Information","HELP_LBL":"Help","ERROR_REQUEST_ACTION_COMPLETED_MSG":"There was an error with the request and the action could not be completed.","OK_LBL":"OK","DIALOG_LBL":"dialog","DIALOG_PLEASE_READ_TEXT_DIALOG_MSG_MSG":"dialog, please read above text for dialog message","BEG_DIALOG_PLS_DISMISS_DIALOG_BEF_MSG":"Beginning of dialog, please dismiss dialog before continuing","END_DIALOG_PLS_DISMISS_DIALOG_BEF_MSG":"End of dialog, please dismiss dialog before continuing","ERR_SUBMITTING_FORM_DUE_INV_INPUT_LBL":"There was an error submitting the form due to invalid input","ERR_SUBMITTING_SEARCH_MSG":"There was a problem with your request.  Please change your search terms and try again.","CLOSE_CMD":"Close","BACK_LBL":"Back","FOLLOWING_WIDGET_JAVASCRIPT_SYNTAX_MSG":"The following widget JavaScript either has a syntax error or its class name is not correct: ","YOU_HAVE_PCT_D_WARNINGS_PAGE_LBL":"You have %d warnings on this page","YOU_HAVE_ONE_WARNING_PAGE_LBL":"You have 1 warning on this page.","YOU_HAVE_PCT_D_ERRORS_PAGE_LBL":"You have %d errors on this page.","YOU_HAVE_ONE_ERROR_PAGE_LBL":"You have 1 error on this page.","CHAT_IS_NOT_AVAILABLE_MSG":"Chat is not available."};});
		RightNow.Interface.setConfigbase(function(){return {"DE_VALID_EMAIL_PATTERN":"^(([-!#$%&'*+\/=?^~`{|}\\w]+(\\.[-!#$%&'*+\/=?^~`{|}\\w]+)*)|(\"[^\"]+\"))@[0-9A-Za-z]+(-[0-9A-Za-z]+)*(\\.[0-9A-Za-z]+(-[0-9A-Za-z]+)*)+$","CP_HOME_URL":"home","CP_FILE_UPLOAD_MAX_TIME":300,"OE_WEB_SERVER":HOST_SERVER};});
		YAHOO.util.Event.onDOMReady(function(){this.Dialog.setRenderDiv(); this.prepareVirtualBufferUpdateTrigger(); this.ariaHideFrames();}, null, RightNow.UI);
		YAHOO.util.Event.onDOMReady(function(){
			var W = RightNow.Widget,
				c = 'createWidgetInstance';
			W[c]({"i":{"c":"nciChatLaunchButton","n":"nciChatLaunchButton_4","w":4},"a":{"label_button":"Smoking Cessation Assistance","loading_icon_path":"images\/indicator.gif","chat_landing_page":"\/app\/chat\/chat_landing","launch_width":380,"launch_height":560,"error_location":"rn_ErrorLocation","open_in_new_window":true,"protocol_selection":"auto","post_contact_fields":false,"button_type":"quitting_smoking"},"j":{"chatWindowName":"nci__tst1","baseUrl":"https:\/\/" + HOST_SERVER,"isLoggedIn":false,"buttonType":"quitting_smoking","disabled_img":"\/sites\/all\/themes\/sfg\/images\/footer\/smokefree-ftr2-chat-46x34-inactive.png","img":"\/sites\/all\/themes\/sfg\/images\/footer\/smokefree-ftr2-chat-46x34.png"}},'nciChatLaunchButton_4','custom/chat/nciChatLaunchButton','nciChatLaunchButton','4',true);
			RightNow.Url.transformLinks();});
		/* ]]> */
	</script>
	<script type="text/javascript">
		var _rnq=_rnq||[];_rnq.push({"debug":true,"s":"VYzjzadm","uh":"af25197a","uc":HOST_SERVER + "\/app\/chat\/chat_launch","b":"ca99729","i":"nci__tst:nci","f":"rnw","p":"Customer Portal","v":"14.2.0.1-b131-sp5","th":"www.rnengage.com"});
		(function(f){var b,d,a=document.createElement("iframe"),c=document.getElementsByTagName("script");a.src="javascript:false";a.title="";a.role="presentation";(a.frameElement||a).style.cssText="width:0;height:0;border:0";c=c[c.length-1];c.parentNode.insertBefore(a,c);try{b=a.contentWindow.document}catch(g){d=document.domain,a.src="javascript:var d=document.open();d.domain='"+d+"';void(0);",b=a.contentWindow.document}b.open()._l=function(){for(var a;f.length;)a=this.createElement("script"),d&&(this.domain=
			d),a.src=f.pop(),this.body.appendChild(a)};b.write('<body onload="document._l();">');b.close()})(["https://www.rnengage.com/api/e/ca99729/e.js","//www.rnengage.com/api/1/javascript/acs.debug.js"]);
	</script>
</body>
</html>
<!-- Smokefree.gov v.1.3.2+BL34 -->
