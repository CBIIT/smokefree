<a href="#content"
   id="skipnav"
   target="_self"
   onClick="javascript:(function($) { $('#content').attr('tabIndex',-1).focus(); }) (jQuery);"
    >Skip navigation</a>
<?php
/* Show message bar */
if (drupal_is_front_page()) : ?>
    <div id="message-bar">
        <a href="/journey" id="message-bar-link">
            <img id="message-bar-pin"
                 src="/<?php echo path_to_theme(); ?>/images/header/pin.png"
                 alt=""
                />
		<span>
			Share your Smokefree Journey
		</span>
            <img id="message-bar-arrow"
                 src="/<?php echo path_to_theme(); ?>/images/header/arrow.png"
                 alt="More Details"
                />
        </a>
        <a href="/" id="close-message-bar" title="Hide the Smokefree Journey message bar.">
            <img src="/<?php echo path_to_theme(); ?>/images/header/close.png"
                 alt="Hide message bar."
                />
        </a>
    </div>
<?php endif; ?>

<div class="tagline">
         <nav id="cl-effect-4" class="cl-effect-4">
            <p>It doesn't matter where you start. <a href="build-your-quit-plan#cl-effect-4"><strong>Just start.</strong></a>
        </nav>
</div>

<div id="search-header">
    <form method="get"
          action="https://websrch.cit.nih.gov/sps/SmokeFree/Results.html?"
          name="search"
          onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search'
							|| document.getElementById('searchbox-header').value=='') 
								return false;">
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
<?php /*?><div id="search-header">
			<form method="get" 
				action="https://websrch.cit.nih.gov/sps/SmokeFree/Results.html?"
				name="search"
				onsubmit="javascript:if (document.getElementById('searchbox-header').value=='Search' 
							|| document.getElementById('searchbox-header').value=='') 
								return false;">
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
		</div><?php */?>


</div>

<div class="container-page">
<div id="bg-container">
    <div id="bg-photo"></div>
</div>
<!-- begin logo -->
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

<div class="nav-bottom-border"><!--<img src="/<?php echo path_to_theme(); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>



<?php
/* Interior page */
?>
<div class="main-container container">
    <div id="VETBC">

        <!-- <?php print $breadcrumb; ?> -->
        <ul class="VETBreadcrumbs" >
            <li><a href="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Smokefree.gov</a></li>
            <li><a href="/veterans">SmokefreeVET</a></li>
            <li><a href="#"><?php print $title; ?></a></li>
        </ul>


    </div>
    <div><img src="/<?php echo path_to_theme(); ?>/images/banner.jpg"/ style="width:100%"></div>
    <div class="row-fluid span12">
        <div class="span9 content-container <?php if(isset($node) && !empty($node) && $node->nid == '144' && empty($node->field_related_image['und'][0])) { print 'no-sidebar'; } ?>">
            <div class="<?php print _bootstrap_content_span($columns); ?> content-container page-content-container">
                <?php if(isset($node) && !empty($node) && $node->nid != '144'): ?>
                    <div class="span3">
                        <div id='VETSidebar'>
                            <ul>
                                <li class='TopItem'>SMOKEFREE VETERANS</li>

                                <li class='has-sub'><a id="M1" href='/veterans/why-you-smoke'><span>Why You Smoke</span></a>
                                    <ul>
                                        <li class='last'><a id="why-i-use-tobacco" href='/veterans/why-i-use-tobacco-quiz'><span>Tobacco Quiz</span></a></li>
                                    </ul>
                                </li>
                                <li class='has-sub'><a id="M2" href='/veterans/why-you-need-to-quit-now'><span>Why You Should Quit</span></a>
                                    <ul>
                                        <li><a id="physical-health" href='/veterans/why-you-need-to-quit-now#physical-health-content'><span>Physical Health</span></a></li>
                                        <li><a id="mental-health" href='/veterans/why-you-need-to-quit-now#mental-health-content'><span>Mental + Emotional Health</span></a></li>
                                        <li class="last"><a id="disorders" href='/veterans/why-you-need-to-quit-now#disorders-content'><span>Impact of Smoking on Other Disorders</span></a></li>
                                    </ul>
                                </li>
                                <li class='has-sub'><a id="M3" href='/veterans/how-to-quit'><span>How To Quit</span></a>
                                    <ul>
                                        <li><a id="addiction" href='/veterans/how-to-quit#addiction-content'><span>Overcome Addiction</span></a></li>
                                        <li><a id="triggers" href='/veterans/how-to-quit#triggers-content'><span>Learn Your Triggers</span></a></li>
                                        <li><a id="cravings" href='/veterans/how-to-quit#cravings-content'><span>Deal With Cravings</span></a></li>
                                        <li><a id="support" href='/veterans/how-to-quit#social-content'><span>Social Support</span></a></li>
										<li class="last"><a id="vet" href='/vet'><span>SmokefreeVET TXT</span></a></li>
                                    </ul>
                                </li>
                                <li class='has-sub'><a id="M4" href='/veterans/common-questions-and-answers-about-quitting'><span>Common Questions + Answers</span></a></li>
                                <li class='has-sub'><a id="M5" href='/veterans/success-tips'><span>Success Tips</span></a>
                                    <ul>
                                        <li><a id="smokefree-break" href='/veterans/success-tips#smokefree-break-content'><span>15 Ways To Take A Smokefree Break</span></a></li>
                                        <li class='last'><a id="stress-management" href='/veterans/success-tips#stress-management-tips-content'><span>Stress Management Tips</span></a></li>
                                    </ul>
                                </li>
                                <li class='BottomItem'>&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                <div class="span8">
                <?php else: ?>
                    <div class="span12">
                <?php endif; ?>
                <?php print render($title_prefix); ?>
                <a id="content" name="content"></a>
                <?php

                /* If there is a page title... */
                if (!empty($title)): ?>

                    <!-- Page title -->
                    <div class="page-header-div">
                        <?php if(isset($node) && !empty($node) && $node->nid != '144'): ?>
                        <div class="syndicate">
                            <h1 class="page-header"><?php print $title; ?></h1>
                        </div>
                        <?php endif; ?>
                        <?php

                        /* If this is an actual page... */
                        if(isset($node)
                            && !empty($node)
                            && ($node->type == 'page' || $node->type =='webform')): ?>
                        <?php endif; ?>

                    </div>
                <?php endif; ?>

                <?php print render($title_suffix); ?>

                <?php if (!empty($action_links)): ?>
                    <ul class="action-links">
                        <?php print render($action_links); ?>
                    </ul>
                <?php endif; ?>

                <?php if(isset($node) && !empty($node) && $node->type =='webform' && !empty($messages)): ?>
                    <br />
                    <div class="errors"><?php print $messages; ?></div>
                <?php endif; ?>

                <?php if ($tabs): ?>
                    <div class="tabs-wrapper">
                        <?php print render($tabs); ?>
                    </div>
                <?php endif; ?>

                <div class="syndicate">
                    <?php print render($page['content']); ?>
                </div>

                <?php print render($page['below_content']); ?>
</div>
            </div>
        </div> <!-- end span 9 -->
    </div> <!-- end row -->
</div> <!-- end main container -->


<!--  Begin logo bar -->
<div class="logobar">

    <div class="logobar half-width">
        <div class="social-container">
            <div class="logobar social">
                <div class="facebook-icon">
                    <a href="https://www.facebook.com/SmokefreeUS"
                       title="Facebook"
                        ><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr1-facebook-30x34.png"
                              alt="Facebook" />
                    </a>
						
                </div>

                <div class="twitter-icon">
                    <a class="ext" href="http://twitter.com/SmokeFreeUs"
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
                        <p>Quit Plan</p>
                    </div>
                </a>
            </div>
        </div>
    </div> <!-- end half-width -->
    <div class="logobar half-width-sites">
        <div class="veterans-desktop-sites">
            <a href="http://smokefree.gov/veterans"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr8-sf-vet-144x34.png" alt="Smokefree Veterans" /></a>
            <a href="http://women.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-144x34.png" alt="Smokefree Women" /></a>
            <a href="http://teen.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr6-sf-teen-144x34.png" alt="Smokefree Teen" /></a>
            <a href="http://espanol.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-espanol-144x34.png" alt="Smokefree Espa&ntilde;ol" /></a>
        </div>
        <div class="veterans-mobile-sites">
            <a href="http://smokefree.gov/veterans"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefreeVET-68x34.png" alt="Smokefree Veterans" /></a>
            <a href="http://women.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-68x34.png" alt="Smokefree Women" /></a>
            <a href="http://teen.smokefree.gov"><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr6-sf-teen-68x34.png" alt="Smokefree Teen" /></a>
            <a href="http://espanol.smokefree.gov"><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-espanol-68x34.png" alt="Smokefree Espa&ntilde;ol" /></a>         
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
    <ul class="footer-links">
        <li><a href="http://women.smokefree.gov" title="Smokefree Women">women.smokefree.gov</a>&nbsp;<span>|</span></li>
        <li><a href="http://teen.smokefree.gov" title="Smokefree Teen">teen.smokefree.gov</a>&nbsp;<span>|</span></li>
        <li><a href="http://espanol.smokefree.gov" title="Smokefree Espa&ntilde;ol">espanol.smokefree.gov</a></li>
    </ul>

    <div id="search-footer">
        <form method="get"
              action="https://websrch.cit.nih.gov/sps/SmokeFree/Results.html?"
              name="search"
              onsubmit="javascript:if (document.getElementById('searchbox-footer').value=='Search'
							|| document.getElementById('searchbox-footer').value=='') 
								return false;">
            <input type="hidden" name="getfields"       value="*" />
            <label for="searchbox-footer"
                   class="hiddenSearch hidden">Search</label>
            <div id="search-footer-container">
                <input id="searchbox-footer"
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
</div><!-- end page footer -->
</div> <!-- end page container -->