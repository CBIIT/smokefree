/* Set path for Smokefree Teens site */
var teenSmokefreeGov = 'http://sft.mmgct.int';

/* Universal Analytics (Test Account) */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-15354704-2', {
   'cookieDomain': 'none'
});
ga('send', 'pageview');;
( function($) {
	$(document).ready(function() {
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
			$('.front .view-home .views-row.content-area').hide();
			$('.front .view-home .views-row-first.content-area').show();
		}

		function homepage_toggle_content(nid) {
			$('html, body').animate({
				scrollTop: $('.front .view-home.view-display-id-page_1 > .view-content').offset().top
			});
			currently_visible = $('.front .view-home .views-row.content-area:visible:first');
			currently_visible.fadeOut(1000, function() {
				$('.front .view-home .content-area.views-row.' + nid).fadeIn(1000);
			});
		}

		$('.views-field-field-button-link').on('click', function(e) {
			e.preventDefault();
			if ($(this).find('.btn-img').hasClass('btn-selected')) {
				window.location.href = "/";
			}
			else {
				var nid = $(this).find('a').attr('data-id');
				homepage_toggle_content(nid);
				$('.views-field-field-button-link .btn-img').removeClass('btn-selected');
				$(this).find('.btn-img').addClass('btn-selected');
				//Show X on btn
				$(".page-home .view-id-home.view-display-id-block_1 .btn-img").prev().css({"display": "none"});
				$(".page-home .view-id-home.view-display-id-block_1 .btn-selected").prev().css({"display": "block"});
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



	});
}) (jQuery);
;
(function($){
    $(document).ready(function(){

		$('#VETSidebar ul ul li').addClass('odd');
		//$('#VETSidebar ul ul li:odd').addClass('odd');
		//$('#VETSidebar ul ul li:even').addClass('even');

		//$('#VETSidebar1 > ul > li > a').click(function() {
		//	
		//	
		//  $('#VETSidebar li').removeClass('active');
		//  $(this).closest('li').addClass('active');	
		//  var checkElement = $(this).next();  
		//  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		//    $(this).closest('li').removeClass('active');
		//    checkElement.slideUp('normal');
		//  }
		//  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		//    $('#VETSidebar ul ul:visible').slideUp('normal');
		//    checkElement.slideDown('normal');
		//  }
		//  if($(this).closest('li').find('ul').children().length == 0) {
		//    return true;
		//  } else {
		//    return true;	
		//  }		
		//  
		//  
		//});


		$('#VETSidebar > ul > li > ul > li > a').click(function() {
		   $('#VETSidebar li').removeClass('active');
		   $(this).closest('li').addClass('active');		
		});

		var currentURL = document.location.toString();

		if (currentURL.indexOf("why-you-smoke") >= 0) {
			setMenu('M1','why-you-smoke');
		}
		else if (currentURL.indexOf("why-i-use-tobacco") >= 0) {
			setMenu('M1','why-i-use-tobacco');
		}
		else if (currentURL.indexOf("why-you-need-to-quit") >= 0) {
			setMenu('M2','why-you-need-to-quit');
		}
		else if (currentURL.indexOf("physical-health") >= 0) {
			setMenu('M2','physical-health');
		}
		else if (currentURL.indexOf("mental-health") >= 0) {
			setMenu('M2','mental-health');
		}
		else if (currentURL.indexOf("disorders") >= 0) {
			setMenu('M2','disorders');
		}
		else if (currentURL.indexOf("SmokefreeVetTXT") >= 0) {
			setMenu('M2','SmokefreeVetTXT');
		}
		else if (currentURL.indexOf("how-to-quit") >= 0) {
			setMenu('M3','how-to-quit');
		}
		else if (currentURL.indexOf("triggers") >= 0) {
			setMenu('M3','triggers');
		}
		else if (currentURL.indexOf("cravings") >= 0) {
			setMenu('M3','cravings');
		}
		else if (currentURL.indexOf("addiction") >= 0) {
			setMenu('M3','addiction');
		}
		else if (currentURL.indexOf("support") >= 0) {
			setMenu('M3','support');
		}
		else if (currentURL.indexOf("common-questions") >= 0) {
			setMenu('M4','common-questions');
		}
		else if (currentURL.indexOf("success-tips") >= 0) {
			setMenu('M5','success-tips');
		}
		else if (currentURL.indexOf("common-problems") >= 0) {
			setMenu('M5','common-problems');
		}
		else if (currentURL.indexOf("smokefree-break") >= 0) {
			setMenu('M5','smokefree-break');
		}
		else if (currentURL.indexOf("stress-management") >= 0) {
			setMenu('M5','stress-management');
		}
		else if (currentURL.indexOf("cognitive-behavioral") >= 0) {
			setMenu('M6','cognitive-behavioral');
		}
    });
    function setMenu(m, n) {

	var mn = document.getElementById(m);
	var itm = document.getElementById(n);
	   if (n != '') {

		$('#VETSidebar li').removeClass('active');
		$(mn).closest('li').addClass('active');	
		var checkElement = $(mn).next();  
	  
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#VETSidebar ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
		}    
	   
		$(itm).closest('li').addClass('active');	
		}
		
		else {
		  $('#VETSidebar li').removeClass('active');
		  $(mn).closest('li').addClass('active');	  
		}
    }
})(jQuery);




;
