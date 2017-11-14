</div>
<div class="footer-container" id="footer">
	<footer>
		<div class="footer_menu hidden-xs" id="footer-menu">
			<?php print render($footer_menu);?>
		</div>
		<div class="container">
			<div class="left-box">

	      <div class="col-xs-12 col-md-12 iconrow">
	      <div class="footer-icons">
	            <a href="https://www.facebook.com/SmokefreeUS"><div class="facebook icon"></div></a>
	            <a href="http://instagram.com/smokefreeus"><div class="instagram icon"></div></a>
	            <a href="http://twitter.com/SmokefreeUs"><div class="twitter icon"></div></a>
	          </div>
	      </div>

			    <!--Help Row Start-->
			    <div class="help-row">
			    <a href="https://livehelp.cancer.gov/app/chat/chat_landing">LiveHelp</a> | <a href="/build-your-quit-plan">QuitPlan</a> | <a href="https://smokefree.gov/smokefree-text-messaging-programs">SmokefreeTXT</a> | <a href="/mhealthmonitor/blog-index">mHealth Monitor</a>
			    </div>
			    <!--Help Row End-->
			    <!--Smokefree Icon Row Start-->
			     <!--Smokefree Icon Row LG Start-->
			    <div class="smokefree-row hidden-sm hidden-xs">
                <a href="http://smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-gov-footer.png" width="auto" height="15" alt="smokefree"></a>
                <a href="http://smokefree.gov/veterans/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-vet-footer.png" width="auto" height="15" alt="vet"></a>
			    <a href="http://women.smokefree.gov"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-women-footer.png" width="auto" height="15" alt="footer"></a>
			    <a href="http://espanol.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-espanol-footer.png" width="auto" height="15" alt="espanol"></a>
			    <a href="https://60plus.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-60-footer.png" width="auto" height="15" alt="60"></a>
			    </div>
			    	<!--Smokefree Icon Row MD Start-->
			    <div class="smokefree-row hidden-md hidden-lg  hidden-xs">
			    <a href="http://smokefree.gov/veterans/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-vet-footer.png" width="107.77" height="15" alt="vet"></a>
			    <a href="http://women.smokefree.gov"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-women-footer.png" width="139.15" height="15" alt="women"></a>
			    </div>
			    <div class="smokefree-row hidden-md hidden-lg hidden-xs">
			    <a href="http://espanol.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-espanol-footer.png" width="145.26" height="15" alt="espanol"></a>
			    <a href="https://60plus.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-60-footer.png" width="110.38" height="15" alt="60"></a>
			    </div>
			    	<!--Smokefree Icon Row SM Start-->
			    <div class="smokefree-row hidden-lg hidden-md hidden-sm ">
			   	<a href="http://smokefree.gov/veterans/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-vet-footer.png" width="107.77" height="15" alt="vet"></a>
			    <a href="http://women.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-women-footer.png" width="139.15" height="15" alt="women"></a>
			    <a href="http://espanol.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-espanol-footer.png" width="145.26" height="15" alt="espanol" class="smmargin"></a>
			    <a href="https://60plus.smokefree.gov/"><img src="/<?php echo drupal_get_path('theme', 'smokefreeteen'); ?>/src/images/footer/smokefree-60-footer.png" width="110.38" height="15" alt="60"></a>
			    </div>
			    <!--Smokefree Icon Row End-->
			    <!--Site Map Row-->
			    <div class="sitemap-row">
			    <a href="/">Home</a><span> </span><a href="/about">About SmokefreeTeen</a><a href="/health-care-profesionals/">Health Professionals</a>
			    <a href="http://www.cancer.gov/global/web/policies/foia/">FOIA</a><a href="https://smokefree.gov/privacy-policy/">Privacy</a><a href="https://smokefree.gov/accessibility/">Accessibility</a>
			    <a href="https://smokefree.gov/viewing-files/">Viewing Files</a><a href="https://smokefree.gov/disclaimer/">Disclaimer</a>
			    </div>

			    <div class="sitemap-row">
			    <a href="http://hhs.gov/">U.S. Department of Health and Human Services</a><a href="http://nih.gov/">National Institutes of Health</a><a href="http://cancer.gov/">National Cancer Institute</a><a href="http://usa.gov/">USA.gov</a>
			    </div>

			    <div class="sitemap-row">
			    <p>NIH...Turning Discovery Into Health<sup>®</sup></p>
			    </div>
			</div>

			<!--Widget Column Start-->
			<div class="widget-box">
				<a href="https://betobaccofree.hhs.gov/index.html"><img src="/<?php echo drupal_get_path('theme', 'smokefreegov'); ?>/images/footer/widget@2x.png" height="164" width="204" class="widget" alt="BeTobaccoFree.gov" /></a>
			</div>

		</div>
	</footer>
</div>
<?php if (!empty($page['footer'])): ?>
    <?php print render($page['footer']); ?>
<?php endif; ?>