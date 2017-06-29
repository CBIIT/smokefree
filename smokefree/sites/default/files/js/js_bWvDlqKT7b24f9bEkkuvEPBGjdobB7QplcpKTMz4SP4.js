var teenSmokefreeGov="http://sft.mmgct.int";!function(e,t,n,a,o,c,i){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,c=t.createElement(n),i=t.getElementsByTagName(n)[0],c.async=1,c.src="//www.google-analytics.com/analytics.js",i.parentNode.insertBefore(c,i)}(window,document,"script",0,"ga"),ga("create","UA-15354704-2",{cookieDomain:"none"}),ga("send","pageview");;
( function($) {
	$(document).ready(function() {
        
        // $("#live-chat-bar-link img").click(function() {
        //     $("#live-chat-bar-form").submit();
        //     //return false;
        // });
		
		$('#mobile-accordion section#block-tb-megamenu-main-menu > #tb-megamenu-main-menu > .nav-collapse').addClass('collapse in');
		
		//Create rm-header-footer class
		if ($(".node-webform").hasClass('rm-header-footer')) {
			$("body").css('background-image','none');
			$("body").css('background-color','#fff');
			$(".logo-and-search").css('display','none');
			$(".nav-bottom-border").css('display','none');
			$(".logo_area").css('display','none');
			$(".footer-container").css('display','none');
		}

		// TODO: For the MySmokeFree Dashboard - refactor / move out of init
		$('#edit-interest-man').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Men'); }
		});
		$('#edit-interest-woman').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Women'); }
		});
		$('#edit-interest-pregnant').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Pregnant'); }
		});
		$('#edit-interest-teen').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Teen'); }
		});
		$('#edit-interest-vet').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Veteran'); }
		});
		$('#edit-interest-espanol').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'enEspanol'); }
		});
		$('#edit-quit-journey-not-ready').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'NotReady'); }
		});
		$('#edit-quit-journey-preparing-to-quit').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Preparing'); }
		});
		$('#edit-quit-journey-first-24-hrs').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', '24Hours'); }
		});
		$('#edit-quit-journey-first-two-weeks').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', '2Weeks'); }
		});
		$('#edit-quit-journey-maintaining-your-quit').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Maintaining'); }
		});
		$('#edit-tried-but-slipped').click( function() {
			if (window.ga) { window.ga('send', 'event', 'Dashboard', 'Slipped'); }
		});

		/* Mobile drop-down menu */
		$('.mobile-btn').click(function() {
			$('#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu button').click();
			// var collapseElem = $(this).next('.collapse');
			// if (collapseElem.hasClass('in-out')) {
			// 	// collapseElem.css('height','0');
			// 	// collapseElem.collapse('hide');
			// 	collapseElem.removeClass('in-out');
			// }
			// else {
			// 	// collapseElem.css('height','347px');
			// 	// collapseElem.collapse('show');
			// 	collapseElem.addClass('in-out');
			// }
			// return false;
		});

		// $('.mobile-btn').bind('touchstart click', function(){
		// 	$('#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu button i').click();
		// });

		$("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("tap",function(e){
			e.preventDefault();
			window.location.href = $(this).attr("href");
		});

		$("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("click",function(e){
			e.preventDefault();
			window.location.href = $(this).attr("href");
		});
		
		//$('#mega-desktop #block-tb-megamenu-main-menu #tb-megamenu-main-menu button i').click();
		$('#mega-desktop #block-tb-megamenu-main-menu #tb-megamenu-main-menu').removeClass("animate");


		/* Navigation accessibility text */
		var hiddenTextElems = $(".nav").find("SPAN.caret");
		hiddenTextElems.attr("aria-live","assertive");
		hiddenTextElems.text("(Collapsed.)");
		$('.dropdown-toggle').click(function() {
			var toggleElem = $(this);
			var dropDownElem = toggleElem.next("UL.dropdown-menu");
			var caretElem = toggleElem.find("SPAN.caret");
			hiddenTextElems.text("(Collapsed.)");
			if (dropDownElem.is(":visible")) {
				caretElem.text("(Expanded.)");
			}
		});
		$('.dropdown-toggle').hover(
			function() {
				var toggleElem = $(this);
				var dropDownElem = toggleElem.next("UL.dropdown-menu");
				var caretElem = toggleElem.find("SPAN.caret");
				hiddenTextElems.text("(Collapsed.)");
				if (dropDownElem.is(":visible")) {
					caretElem.text("(Expanded.)");
				}
			},
			function() {
				var toggleElem = $(this);
				var dropDownElem = toggleElem.next("UL.dropdown-menu");
				var caretElem = toggleElem.find("SPAN.caret");
				hiddenTextElems.text("(Collapsed.)");
				if (dropDownElem.is(":visible")) {
					caretElem.text("(Expanded.)");
				}
			}
		);

		/* Accordion effect */
		$("IMG.arrow[alt='expand/collapse']").attr("alt","To Open");
		$("IMG.arrow[alt='open/close']").attr("alt","To Open");
		$('.accordion-toggle').click(function() {
			var toggleElem = $(this);
			var collapseElem = $(this).parents('.accordion-group').find('.collapse');
			var arrowElem = toggleElem.find("IMG.arrow");
			if (collapseElem.hasClass('in')) {
				collapseElem.css('height','0');
				collapseElem.collapse('hide')
					.attr('aria-hidden', 'true')
					.attr('hidden', 'hidden');
				toggleElem.removeClass('opened');
				collapseElem.removeClass('in');
				arrowElem.attr("alt","To Open");
			}
			else {
				collapseElem.css('height','auto');
				collapseElem.collapse('show')
					.attr('aria-hidden', 'false')
					.removeAttr('hidden');
				collapseElem.addClass('in');
				toggleElem.addClass('opened');
				arrowElem.attr("alt","To Close");
			}
			return false;
		});

		/* add styles to the 'try this' bold p tags */
		jQuery("p:has(strong:contains(Next Step))").css("margin-top", "30px");
		jQuery("p:has(strong:contains(Try This))").css("margin-top", "30px");

		/**jQuery for MYSmokefree Dashboard radio buttons**/
		$('input:checked').parent().addClass("selected");
        $('input').click(function () {
        $('input:not(:checked)').parent().removeClass("selected");
        $('input:checked').parent().addClass("selected");
      });

		/* Activate first slide in quit notes carousel */
		$('.node-type-cr-article #block-views-quit-notes-carousel .item:first').addClass('active');
		$('.node-type-cr-article #block-views-more-for-you-carousel .item:first').addClass('active');
		
		//Blog entry side bar font size
		$('.node-type-blog-entry #block-views-exp-blog-index-page h2').addClass('h3');
		$('.node-type-blog-entry #block-views-blog-archive-block h2').addClass('h3');

		function homepage_show_default() {
			if ($('body').hasClass('front')) {
              $('.view-home .views-row.content-area').hide();
              $('.view-home .views-row-first.content-area').show();
            }
            else if ($('body').hasClass('page-home-b')) {
              $('.view-home-b .views-row.content-area').hide();
              $('.view-home-b .views-row-first.content-area').show();
              $('.view-home-b.view-id-home_b.view-display-id-block_2 .views-row').hide();
              $('.view-home-b.view-id-home_b.view-display-id-block_2 .views-row-1').show();
			}
		}

		function homepage_toggle_content(nid) {
          if ($('body').hasClass('front')) {
            $('html, body').animate({
              scrollTop: $('.view-home.view-display-id-page_1 > .view-content').offset().top
            });
            currently_visible = $('.view-home .views-row.content-area:visible:first');
            currently_visible.fadeOut(1000, function () {
              $('.view-home .content-area.views-row.' + nid).fadeIn(1000);
            });
          }
          else if ($('body').hasClass('page-home-b')) {
            $('html, body').animate({
              scrollTop: $('.view-home-b.view-display-id-page_1').offset().top
            });
            currently_visible = $('.view-home-b .views-row.content-area:visible:first');
            currently_visible.fadeOut(1000, function () {
              $('.view-home-b .content-area.views-row.' + nid).fadeIn(1000);
            });
            $('.view-home-b.view-id-home_b.view-display-id-block_2 .views-row').hide();
            $('.view-home-b.view-id-home_b.view-display-id-block_2 .views-row.' + nid).show();
          }
		}

		$('.views-field-field-button-link').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			if ($(this).find('.btn-img').hasClass('btn-selected')) {
              if ($('body').hasClass('front')) {
                window.location.href = "/";
              }
              else if ($('body').hasClass('page-home-b')) {
                if (e.target.localName == 'a') {
                  window.location.href = e.target.href;
                }
                else {
                  window.location.href = "/home_b/default-home";
                }
              }
			}
			else {
				var nid = $(this).find('a').attr('data-id');
				homepage_toggle_content(nid);
				$('.views-field-field-button-link .btn-img').removeClass('btn-selected');
				$(this).find('.btn-img').addClass('btn-selected');
				//Show X on btn
				$(".page-home .view-id-home.view-display-id-block_1 .btn-img, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-img").prev().css({"display": "none"});
				$(".page-home .view-id-home.view-display-id-block_1 .btn-selected, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-selected").prev().css({"display": "block"});
			}
		});
		
		$('#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse.collapse.in').removeClass('always-show');
		$('#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse ul li').removeClass('sub-hidden-collapse');
		
		$('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.dropdown-toggle");
		$('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.mega-group-title");
		
		$("#mobile-accordion a.mega-group-title").on("click",function(e){
			e.preventDefault();
			if ($(this).children(".fa-chevron-right").hasClass('menu-item-selected')) {
				$(this).children(".fa-chevron-right").removeClass('menu-item-selected');
			}
			else {
				$(this).children(".fa-chevron-right").addClass('menu-item-selected');
			}
			
			//children(".fa-chevron-right").css("transform", "rotate(90deg)");
			$(this).next(".nav-child").slideToggle("fast");
		});
		
		$("#mobile-accordion a.dropdown-toggle").on("click",function(e){
			e.preventDefault();
			if ($(this).children(".fa-chevron-right").hasClass('menu-item-selected')) {
				$(this).children(".fa-chevron-right").removeClass('menu-item-selected');
			}
			else {
				$(this).children(".fa-chevron-right").addClass('menu-item-selected');
			}
			
			$(this).next(".nav-child").slideToggle("fast");
		});
		
		// $(".page-home .btn-selected").prev().on("click",function(e){
		// 	e.preventDefault();
		// 	if ($(this).next().hasClass('btn-selected')) {
		// 		window.location.href = "/";
		// 	}
		// });

		// On homepage load, hide all views rows except the first.
		homepage_show_default();
        
        //Livechat redirect
		$("#live-chat-bar-link img").click(function() {
            $("#live-chat-bar-form").submit();
            //return false;
        });

	});
}) (jQuery);
;
!function(e){function i(i,s){var o=document.getElementById(i),t=document.getElementById(s);if(""!=s){e("#VETSidebar li").removeClass("active"),e(o).closest("li").addClass("active");var a=e(o).next();a.is("ul")&&!a.is(":visible")&&(e("#VETSidebar ul ul:visible").slideUp("normal"),a.slideDown("normal")),e(t).closest("li").addClass("active")}else e("#VETSidebar li").removeClass("active"),e(o).closest("li").addClass("active")}e(document).ready(function(){e("#VETSidebar ul ul li").addClass("odd"),e("#VETSidebar > ul > li > ul > li > a").click(function(){e("#VETSidebar li").removeClass("active"),e(this).closest("li").addClass("active")});var s=document.location.toString();s.indexOf("why-you-smoke")>=0?i("M1","why-you-smoke"):s.indexOf("why-i-use-tobacco")>=0?i("M1","why-i-use-tobacco"):s.indexOf("why-you-need-to-quit")>=0?i("M2","why-you-need-to-quit"):s.indexOf("physical-health")>=0?i("M2","physical-health"):s.indexOf("mental-health")>=0?i("M2","mental-health"):s.indexOf("disorders")>=0?i("M2","disorders"):s.indexOf("SmokefreeVetTXT")>=0?i("M2","SmokefreeVetTXT"):s.indexOf("how-to-quit")>=0?i("M3","how-to-quit"):s.indexOf("triggers")>=0?i("M3","triggers"):s.indexOf("cravings")>=0?i("M3","cravings"):s.indexOf("addiction")>=0?i("M3","addiction"):s.indexOf("support")>=0?i("M3","support"):s.indexOf("common-questions")>=0?i("M4","common-questions"):s.indexOf("success-tips")>=0?i("M5","success-tips"):s.indexOf("common-problems")>=0?i("M5","common-problems"):s.indexOf("smokefree-break")>=0?i("M5","smokefree-break"):s.indexOf("stress-management")>=0?i("M5","stress-management"):s.indexOf("cognitive-behavioral")>=0&&i("M6","cognitive-behavioral")})}(jQuery);;
