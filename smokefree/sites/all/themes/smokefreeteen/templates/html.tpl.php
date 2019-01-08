<?php
/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation.
 *   $language->dir contains the language direction. It will either be 'ltr' or
 *   'rtl'.
 * - $html_attributes:  String of attributes for the html element. It can be
 *   manipulated through the variable $html_attributes_array from preprocess
 *   functions.
 * - $html_attributes_array: An array of attribute values for the HTML element.
 *   It is flattened into a string within the variable $html_attributes.
 * - $body_attributes:  String of attributes for the BODY element. It can be
 *   manipulated through the variable $body_attributes_array from preprocess
 *   functions.
 * - $body_attributes_array: An array of attribute values for the BODY element.
 *   It is flattened into a string within the variable $body_attributes.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes String of classes that can be used to style contextually through
 *   CSS.
 *
 * @see bootstrap_preprocess_html()
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see template_process()
 *
 * @ingroup templates
 */
?><!DOCTYPE html>
<html<?php if (!empty($html_attributes)) {print $html_attributes;} ?><?php if (!empty($rdf_namespaces)) {print $rdf_namespaces;} ?>>
<head>

<?php if ($_SERVER['HTTP_HOST'] == "teen.smokefree.gov" || $_SERVER['HTTP_HOST'] == "www.teen.smokefree.gov") : ?>
  <meta name="google-site-verification" content="PUSFJOhbNJlL_-NDz0NB49EN2MdclUqhec3d2qQh8iY" />
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MLXJR9');</script>
    <!-- End Google Tag Manager -->
<?php else: ?>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(
      {'gtm.start': new Date().getTime(),event:'gtm.js'}
    );var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-56KKS26');</script>
  <!-- End Google Tag Manager -->
<?php endif; ?>



  <?php if (!empty($node->id) && $node->id == 49): ?>
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="app">
    <meta name="twitter:site" content="@SmokefreeUs">
    <meta name="twitter:description" content="quitSTART is a fun, free app with tips to help you quit smoking: Distract yourself from cravings with games and challenges; earn badges for smokefree milestones; share your progress with your friends">
    <meta name="twitter:app:country" content="US">
    <meta name="twitter:app:name:iphone" content="quitSTART">
    <meta name="twitter:app:id:iphone" content="494552000">
    <meta name="twitter:app:name:ipad" content="quitSTART">
    <meta name="twitter:app:id:ipad" content="494552000">
    <meta name="twitter:app:name:googleplay" content="quitSTART">
    <meta name="twitter:app:id:googleplay" content="com.mmgct.quitstart">
  <?php endif; ?>

  <!-- Facebook Open Graph Meta Tags  note: og:image is created in template.php -->
  <meta property="og:site_name" content="<?php if (isset($head_title_array['name'])) { echo $head_title_array['name']; } ?>" />
  <meta property="og:title"     content="<?php if (isset($head_title_array['title'])) { echo $head_title_array['title']; } ?>" />

  <?php if ($is_front) : ?>
    <meta property="og:image" content="<?php echo "https://".$_SERVER['HTTP_HOST']."/" . path_to_theme(); ?>/images/header/facebook-smokefree.jpg" />
  <?php endif; ?>

  <link rel="profile" href="<?php print $grddl_profile; ?>" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <!-- HTML5 element support for IE6-8 -->
  <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <?php print $scripts; ?>
</head>
<body<?php if (!empty($body_attributes)) {print $body_attributes;} ?>>
<?php if ($_SERVER['HTTP_HOST'] == "teen.smokefree.gov" || $_SERVER['HTTP_HOST'] == "www.teen.smokefree.gov") : ?>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLXJR9"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
<?php else: ?>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56KKS26"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
<?php endif; ?>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
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
      W[c]({"i":{"c":"nciChatLaunchButton","n":"nciChatLaunchButton_4","w":4},"a":{"label_button":"Smoking Cessation Assistance","loading_icon_path":"images\/indicator.gif","chat_landing_page":"\/app\/chat\/chat_landing","launch_width":380,"launch_height":560,"error_location":"rn_ErrorLocation","open_in_new_window":true,"protocol_selection":"auto","post_contact_fields":false,"button_type":"quitting_smoking"},"j":{"chatWindowName":"nci__tst1","baseUrl":"https:\/\/" + HOST_SERVER,"isLoggedIn":false,"buttonType":"quitting_smoking","disabled_img":"\/sites\/all\/themes\/smokefreegov\/images\/footer\/smokefree-ftr2-chat-46x34-inactive.png","img":"\/sites\/all\/themes\/smokefreegov\/images\/footer\/smokefree-ftr2-chat-46x34.png"}},'nciChatLaunchButton_4','custom/chat/nciChatLaunchButton','nciChatLaunchButton','4',true);
      RightNow.Url.transformLinks();});
    /* ]]> */
  </script>
  <script type="text/javascript">
    var _rnq=_rnq||[];_rnq.push({"debug":true,"s":"VYzjzadm","uh":"af25197a","uc":HOST_SERVER + "\/app\/chat\/chat_launch","b":"ca99729","i":"nci__tst:nci","f":"rnw","p":"Customer Portal","v":"14.2.0.1-b131-sp5","th":"www.rnengage.com"});
    (function(f){var b,d,a=document.createElement("iframe"),c=document.getElementsByTagName("script");a.src="javascript:false";a.title="508 compliance";a.role="presentation";(a.frameElement||a).style.cssText="width:0;height:0;border:0";c=c[c.length-1];c.parentNode.insertBefore(a,c);try{b=a.contentWindow.document}catch(g){d=document.domain,a.src="javascript:var d=document.open();d.domain='"+d+"';void(0);",b=a.contentWindow.document}b.open()._l=function(){for(var a;f.length;)a=this.createElement("script"),d&&(this.domain=
      d),a.src=f.pop(),this.body.appendChild(a)};b.write('<body onload="document._l();">');b.close()})(["https://www.rnengage.com/api/e/ca99729/e.js","//www.rnengage.com/api/1/javascript/acs.debug.js"]);
  </script>

    <!-- Omniture Analytics -->
    <script src="https://static.cancer.gov/webanalytics/WA_DCCPS_PageLoad.js"></script>
    <!-- End Omniture Analytics -->
</body>
</html>
