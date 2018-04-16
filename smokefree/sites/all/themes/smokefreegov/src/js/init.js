( function($) {
	$(document).ready(function() {
        
        // Header Affix
        var iScrollPos = 0;
        $(window).scroll(function () {
            var iCurScrollPos = $(this).scrollTop();
            if (iCurScrollPos > iScrollPos) {
                //Scrolling Down
                $('#tophat').addClass('minimized');
            } else {
                //Scrolling Up
                $('#tophat').removeClass('minimized');
            }
            iScrollPos = iCurScrollPos;
        });
// ************** Dark Overlay Functions **************
        function open_overlay() {
            $(document.createElement('div'))
                .addClass('dark-overlay')
                .appendTo($(document.body));
        }
        function close_overlay() {
            $('.dark-overlay').remove();
        }
// ************** Navigation **************
        // TopHat Expand
        $('.tophat-menu').click(function() {
            $('.tophat-grid').fadeToggle();
            $('.tophat-arrow').toggleClass('rotated');
            $('.sf-family').fadeToggle();
            $('.close-text').delay(2000).toggleClass('open');
            $('#tophat').toggleClass('in');
        });
        // Dropdown on Hover
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
            $(this).toggleClass('open');
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
            $(this).toggleClass('open');
        });
        //
        var counter = 0;
        $('.ss-navbar-desktop #superfish-2 > li > a.sf-depth-1:not(:first)').each(function () {
            counter++;
            var phref = $(this).attr('href');
            var ptext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-'+counter).append('<li><a href="'+phref+'">'+ptext+'</a></li>');
            $('#navbar-responsive .slide-menu .landingpage-menu').append('<li><a href="'+phref+'">'+ptext+'</a><button class="mobile-subnav submenu-' + counter + '-btn"></button></li>');
        });
        // Navigation Active Line Above
        $('#navbar-desktop').children('ul.navbar-nav').children('li.active').children('a').append('<span class="on-bar-wrapper"><span class="on-bar"></span></span>');
        // Mobile Menu Open
        $('.navbar-toggle').click(function() {
            open_overlay();
        });
        // Close Mobile Nav
        $('.nav-close').click(function() {
            $('#navbar-responsive').collapse('hide');
            close_overlay();
        });
        // Change Mobile SubNav
        $('.submenu-1-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-310px'});
            $('ul.submenu-1').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.submenu-2-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-310px'});
            $('ul.submenu-2').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.submenu-3-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-310px'});
            $('ul.submenu-3').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.submenu-4-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-310px'});
            $('ul.submenu-4').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.submenu-5-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-300px'});
            $('ul.submenu-5').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.submenu-6-btn').click(function() {
            $('ul.landingpage-menu').animate({left: '-300px'});
            $('ul.submenu-6').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        $('.nav-back').click(function() {
            $('ul.submenu-1').animate({left: '-310px'});
            $('ul.submenu-2').animate({left: '-310px'});
            $('ul.submenu-3').animate({left: '-310px'});
            $('ul.submenu-4').animate({left: '-310px'});
            $('ul.submenu-5').animate({left: '-310px'});
            $('ul.submenu-6').animate({left: '-310px'});
            $('ul.landingpage-menu').animate({left: '0px'});
            $('.nav-back').fadeToggle();
        });
        // Search Button toggle
        $('.header-search-form__toggle').click(function() {
            $('.search-overlay').addClass('open');
        });
        $('.search-overlay .btn-close').click(function(event) {
            event.preventDefault();
            $('.search-overlay').removeClass('open');
        });
		
        $('.ss-navbar-desktop #superfish-2 > .sf-item-2 > ul > li > a').each(function () {
            var href = $(this).attr('href');
            var mtext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-1').append('<li><a href="'+href+'">'+mtext+'</a></li>');
        });
        $('.ss-navbar-desktop #superfish-2 > .sf-item-3 > ul > li > a').each(function () {
            var href = $(this).attr('href');
            var mtext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-2').append('<li><a href="'+href+'">'+mtext+'</a></li>');
        });
        $('.ss-navbar-desktop #superfish-2 > .sf-item-4 > ul > li > a').each(function () {
            var href = $(this).attr('href');
            var mtext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-3').append('<li><a href="'+href+'">'+mtext+'</a></li>');
        });
        $('.ss-navbar-desktop #superfish-2 > .sf-item-5 > ul > li > a').each(function () {
            var href = $(this).attr('href');
            var mtext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-4').append('<li><a href="'+href+'">'+mtext+'</a></li>');
        });
        $('.ss-navbar-desktop #superfish-2 > .sf-item-6 > ul > li > a').each(function () {
            var href = $(this).attr('href');
            var mtext = $(this).text();
            $('#navbar-responsive .slide-menu .submenu-5').append('<li><a href="'+href+'">'+mtext+'</a></li>');
        });
        $('.ss-navbar-desktop #superfish-2 > li > a.active').append('<span class="on-bar-wrapper"><span class="on-bar"></span></span>');
        
        //Smokefree Teen Homepage Hero Image Random
        if ($('body').hasClass('sft')) {
            var sft_heroimg = ['sft-heroimage-1.jpg', 'sft-heroimage-2.jpg', 'sft-heroimage-3.jpg'];
            $('.homepage__hero').css({'background-image': 'url(images/' + sft_heroimg[Math.floor(Math.random() * sft_heroimg.length)] + ')'});
        }
        // Smokefree.gov Homepage 4 Boxes
        $('#btn__i_want_to_quit').click(function() {
            $(this).parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $(this).toggleClass('open');
        });
        $('#btn__my_quit_day').click(function() {
            $(this).parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $(this).toggleClass('open');
        });
        $('#btn__i_recently_quit').click(function() {
            $(this).parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $(this).toggleClass('open');
        });
        $('#btn__staying_quit').click(function() {
            $(this).parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $(this).toggleClass('open');
        });
        $('#expanded_btn__i_want_to_quit .collapse-box').click(function() {
            $('#expanded_btn__i_want_to_quit').parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $('#btn__i_want_to_quit').toggleClass('open');
            $('#expanded_btn__i_want_to_quit').collapse('hide');
        });
        $('#expanded_btn__my_quit_day .collapse-box').click(function() {
            $('#expanded_btn__my_quit_day').parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $('#btn__my_quit_day').toggleClass('open');
            $('#expanded_btn__my_quit_day').collapse('hide');
        });
        $('#expanded_btn__i_recently_quit .collapse-box').click(function() {
            $('#expanded_btn__i_recently_quit').parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $('#btn__i_recently_quit').toggleClass('open');
            $('#expanded_btn__i_recently_quit').collapse('hide');
        });
        $('#expanded_btn__staying_quit .collapse-box').click(function() {
            $('#expanded_btn__staying_quit').parent('.sf_homepage_4boxes__wrapper').toggleClass('open');
            $('#btn__staying_quit').toggleClass('open');
            $('#expanded_btn__staying_quit').collapse('hide');
        });
        // Homepage 4 boxes document load animation
        $('#btn__i_want_to_quit').addClass('section-animation');
        setTimeout(function() { $('#btn__i_want_to_quit').removeClass('section-animation'); }, 1200);
        setTimeout(function() { $('#btn__my_quit_day').addClass('section-animation'); }, 300);
        setTimeout(function() { $('#btn__my_quit_day').removeClass('section-animation'); }, 1500);
        setTimeout(function() { $('#btn__i_recently_quit').addClass('section-animation'); }, 600);
        setTimeout(function() { $('#btn__i_recently_quit').removeClass('section-animation'); }, 1800);
        setTimeout(function() { $('#btn__staying_quit').addClass('section-animation'); }, 900);
        setTimeout(function() { $('#btn__staying_quit').removeClass('section-animation'); }, 2100);
        // Tools and Tips Mobile
        $('.ttj-1').click(function() {
            $('.tools_tips_list').find('.active').removeClass('active');
            $('.tools_tips_jumpers_wrapper').find('.active').removeClass('active');
            $('.tools_tips_list').find('li:nth-of-type(1)').addClass('active');
            $('.tools_tips_jumpers_wrapper').find('button:nth-of-type(1)').addClass('active');
            $('.tools_tips_wrapper').animate({left: '0px'});
        });
        $('.ttj-2').click(function() {
            $('.tools_tips_list').find('.active').removeClass('active');
            $('.tools_tips_jumpers_wrapper').find('.active').removeClass('active');
            $('.tools_tips_list').find('li:nth-of-type(2)').addClass('active');
            $('.tools_tips_jumpers_wrapper').find('button:nth-of-type(2)').addClass('active');
            $('.tools_tips_wrapper').animate({left: '-60px'});
        });
        $('.ttj-3').click(function() {
            $('.tools_tips_list').find('.active').removeClass('active');
            $('.tools_tips_jumpers_wrapper').find('.active').removeClass('active');
            $('.tools_tips_list').find('li:nth-of-type(3)').addClass('active');
            $('.tools_tips_jumpers_wrapper').find('button:nth-of-type(3)').addClass('active');
            $('.tools_tips_wrapper').animate({left: '-220px'});
        });
        $('.ttj-4').click(function() {
            $('.tools_tips_list').find('.active').removeClass('active');
            $('.tools_tips_jumpers_wrapper').find('.active').removeClass('active');
            $('.tools_tips_list').find('li:nth-of-type(4)').addClass('active');
            $('.tools_tips_jumpers_wrapper').find('button:nth-of-type(4)').addClass('active');
            $('.tools_tips_wrapper').animate({left: '-380px'});
        });
        $('.ttj-5').click(function() {
            $('.tools_tips_list').find('.active').removeClass('active');
            $('.tools_tips_jumpers_wrapper').find('.active').removeClass('active');
            $('.tools_tips_list').find('li:nth-of-type(5)').addClass('active');
            $('.tools_tips_jumpers_wrapper').find('button:nth-of-type(5)').addClass('active');
            $('.tools_tips_wrapper').animate({left: '-540px'});
        });
        // Mobile Quit Notes Carousel
        $('.carousel').carousel({
            interval: 20000
        });
        
        $('.page-home .toolsandtips li, .page-home-b .toolsandtips li').each(function () {
            var href = $(this).find('a.ClickClass-ToolsTips').attr('href');
            $(this).find('.col-md-9').wrapInner('<a class="ClickClass-ToolsTips" href="'+href+'"></a>');
        });
        
		$('#mobile-accordion section#block-tb-megamenu-main-menu > #tb-megamenu-main-menu > .nav-collapse').addClass('collapse in');
        
        // For stat purpose
		$('body.page-build-your-quit-plan').addClass('bqp-for-stat');
        $('body.smokefreegov-build-your-quit-plan.node-type-webform').addClass('bqp-for-stat');
		
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
        
        // 508 search input
		$('input.search-bar-input').attr('id', 'searchbox-header');

	});
	   // homepage btns 508 fix
       $('.page-home .btn-img-My-Quit-Day img').attr('alt', 'Bullseye icon');
       $('.page-home .btn-img-Newly-Quit img').attr('alt', 'Hourglass icon');
       $('.page-home .btn-img-Staying-Quit img').attr('alt', 'Progress chart icon');
       $('.page-home .tool-tip-3 img').attr('alt', 'Mobile phone icon');
       $('.page-home .tool-tip-4 img').attr('alt', 'Nicotine patch icon');
	   $('.page-home .tool-tip-5 img').attr('alt', 'Online chat icon');
       $('.page-home .tool-tip-6 img').attr('alt', 'Smartphone icon');
       $('.page-home .tool-tip-7 img').attr('alt', 'Pencil and ruler icon');

       // basic page 508 fix
       $('.node-type-page .image-note > img').attr('alt', 'Page icon');

       // cr_landing 508 fix
       $('.node-type-cr-landing.smokefreegov-quitting-dip .promo_button img').attr('alt', 'Go to The Real Cost button');

	   // Vet 508 fix
	   $('.smokefreegov-build-your-quit-plan.veterans_branded .btn-quit-plan > img').attr('alt', 'Arrow pointing down');
	   $('.smokefreegov-build-your-quit-plan.veterans_branded .next-section > img').attr('alt', 'Arrow pointing down');
}) (jQuery);
