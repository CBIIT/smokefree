$(document).ready(function () {
	"use strict";
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
	$('.search-overlay .btn-close').click(function() {
		$('.search-overlay').removeClass('open');
	});
	// LiveHelp Popup Window 
	if ($(window).width() > 960) {
	  	// Desktop view, the modal window appears
		setTimeout(function(){ 
		$('#popup-message-window').toggleClass('in');
			open_overlay();
		}, 36000);
	}
	else {
	   	// Mobile view, the sticky footer appears
	}
	if ($('#popup-message-window').hasClass('in')) {
		$(document).keyup(function(e) {
			 if (e.keyCode === 27) {
				$('#popup-message-window').toggleClass('in');
				close_overlay();
			}
		});
	}
	$('#popup-message-window .btn-close').click(function() {
		$('#popup-message-window').toggleClass('in');
		close_overlay();
	});
	// Sidebar Navigation options in Blog (ie Index and Archive) 
	$('.truncate button').click(function() {
		$(this).parent('.truncate').toggleClass('open');
		if ($('.truncate').hasClass('open')) {
			$(this).html('<span class="glyphicon glyphicon-menu-up"></span> Show Less');
		} else {
			$(this).html('<span class="glyphicon glyphicon-menu-down"></span> Show More');
		}
	});
	// Form Focus
	$('.form-group').focusin(function(){
        $(this).toggleClass('outline');
    });
    $('.form-group').focusout(function(){
        $(this).toggleClass('outline');
    });
	//Smokefree Homepage Hero Image Random for Teen, Vet, and Women
	if ($('body').hasClass('sft')) {
		var sft_heroimg = ['sft-heroimage-1.jpg', 'sft-heroimage-2.jpg', 'sft-heroimage-3.jpg'];
 		$('.homepage__hero').css({'background-image': 'url(images/' + sft_heroimg[Math.floor(Math.random() * sft_heroimg.length)] + ')'});
	}
	if ($('body').hasClass('sfv')) {
		var sfv_heroimg = ['sfv-heroimage2.jpg', 'sfv-heroimage3.jpg'];
 		$('.homepage__hero').css({'background-image': 'url(images/' + sfv_heroimg[Math.floor(Math.random() * sfv_heroimg.length)] + ')'});
	}
	if ($('body').hasClass('sfw')) {
		var sfw_heroimg = ['sfw-heroimage.jpg', 'sfw-heroimage2.jpg', 'sfw-heroimage3.jpg'];
 		$('.homepage__hero').css({'background-image': 'url(images/' + sfw_heroimg[Math.floor(Math.random() * sfw_heroimg.length)] + ')'});
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
});

