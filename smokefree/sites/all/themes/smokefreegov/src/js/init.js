( function($) {
	$(document).ready(function() {
        
        $('.page-home .toolsandtips li, .page-home-b .toolsandtips li').each(function () {
            var href = $(this).find('a.ClickClass-ToolsTips').attr('href');
            $(this).find('.col-md-9').wrapInner('<a class="ClickClass-ToolsTips" href="'+href+'"></a>');
        });
        
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
		
		//
        // $('<label for="searchbox-header"></label>').insertBefore("#searchbox-header");

	});
}) (jQuery);
