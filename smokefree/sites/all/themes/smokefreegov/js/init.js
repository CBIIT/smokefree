!function(n){n(document).ready(function(){var t=0;n(window).scroll(function(){var e=n(this).scrollTop();t<e?n("#tophat").addClass("minimized"):n("#tophat").removeClass("minimized"),t=e}),n(".tophat-menu").click(function(){n(".tophat-grid").fadeToggle(),n(".tophat-arrow").toggleClass("rotated"),n(".sf-family").fadeToggle(),n(".close-text").delay(2e3).toggleClass("open"),n("#tophat").toggleClass("in")}),n("ul.nav li.dropdown").hover(function(){n(this).find(".dropdown-menu").stop(!0,!0).fadeIn(200),n(this).toggleClass("open")},function(){n(this).find(".dropdown-menu").stop(!0,!0).fadeOut(200),n(this).toggleClass("open")});var a=0;if(n(".ss-navbar-desktop #superfish-2 > li > a.sf-depth-1:not(:first)").each(function(){a++;var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-"+a).append('<li><a href="'+e+'">'+t+"</a></li>"),n("#navbar-responsive .slide-menu .landingpage-menu").append('<li><a href="'+e+'">'+t+'</a><button class="mobile-subnav submenu-'+a+'-btn"></button></li>')}),n("#navbar-desktop").children("ul.navbar-nav").children("li.active").children("a").append('<span class="on-bar-wrapper"><span class="on-bar"></span></span>'),n("#nav-bar-header .navbar-toggle").click(function(){n(document.createElement("div")).addClass("dark-overlay").appendTo(n(document.body))}),n("#nav-bar-header .nav-close").click(function(){n("#navbar-responsive").collapse("hide"),n(".dark-overlay").remove()}),n(".submenu-1-btn").click(function(){n("ul.landingpage-menu").animate({left:"-310px"}),n("ul.submenu-1").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".submenu-2-btn").click(function(){n("ul.landingpage-menu").animate({left:"-310px"}),n("ul.submenu-2").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".submenu-3-btn").click(function(){n("ul.landingpage-menu").animate({left:"-310px"}),n("ul.submenu-3").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".submenu-4-btn").click(function(){n("ul.landingpage-menu").animate({left:"-310px"}),n("ul.submenu-4").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".submenu-5-btn").click(function(){n("ul.landingpage-menu").animate({left:"-300px"}),n("ul.submenu-5").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".submenu-6-btn").click(function(){n("ul.landingpage-menu").animate({left:"-300px"}),n("ul.submenu-6").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".nav-back").click(function(){n("ul.submenu-1").animate({left:"-310px"}),n("ul.submenu-2").animate({left:"-310px"}),n("ul.submenu-3").animate({left:"-310px"}),n("ul.submenu-4").animate({left:"-310px"}),n("ul.submenu-5").animate({left:"-310px"}),n("ul.submenu-6").animate({left:"-310px"}),n("ul.landingpage-menu").animate({left:"0px"}),n(".nav-back").fadeToggle()}),n(".header-search-form__toggle").click(function(){n(".search-overlay").addClass("open")}),n(".search-overlay .btn-close").click(function(e){e.preventDefault(),n(".search-overlay").removeClass("open")}),n(".ss-navbar-desktop #superfish-2 > .sf-item-2 > ul > li > a").each(function(){var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-1").append('<li><a href="'+e+'">'+t+"</a></li>")}),n(".ss-navbar-desktop #superfish-2 > .sf-item-3 > ul > li > a").each(function(){var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-2").append('<li><a href="'+e+'">'+t+"</a></li>")}),n(".ss-navbar-desktop #superfish-2 > .sf-item-4 > ul > li > a").each(function(){var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-3").append('<li><a href="'+e+'">'+t+"</a></li>")}),n(".ss-navbar-desktop #superfish-2 > .sf-item-5 > ul > li > a").each(function(){var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-4").append('<li><a href="'+e+'">'+t+"</a></li>")}),n(".ss-navbar-desktop #superfish-2 > .sf-item-6 > ul > li > a").each(function(){var e=n(this).attr("href"),t=n(this).text();n("#navbar-responsive .slide-menu .submenu-5").append('<li><a href="'+e+'">'+t+"</a></li>")}),n(".ss-navbar-desktop #superfish-2 > li > a.active").append('<span class="on-bar-wrapper"><span class="on-bar"></span></span>'),n("body").hasClass("sft")){var e=["sft-heroimage-1.jpg","sft-heroimage-2.jpg","sft-heroimage-3.jpg"];n(".homepage__hero").css({"background-image":"url(images/"+e[Math.floor(Math.random()*e.length)]+")"})}n("#btn__i_want_to_quit").click(function(){n(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n(this).toggleClass("open")}),n("#btn__my_quit_day").click(function(){n(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n(this).toggleClass("open")}),n("#btn__i_recently_quit").click(function(){n(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n(this).toggleClass("open")}),n("#btn__staying_quit").click(function(){n(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n(this).toggleClass("open")}),n("#expanded_btn__i_want_to_quit .collapse-box").click(function(){n("#expanded_btn__i_want_to_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n("#btn__i_want_to_quit").toggleClass("open"),n("#expanded_btn__i_want_to_quit").collapse("hide")}),n("#expanded_btn__my_quit_day .collapse-box").click(function(){n("#expanded_btn__my_quit_day").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n("#btn__my_quit_day").toggleClass("open"),n("#expanded_btn__my_quit_day").collapse("hide")}),n("#expanded_btn__i_recently_quit .collapse-box").click(function(){n("#expanded_btn__i_recently_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n("#btn__i_recently_quit").toggleClass("open"),n("#expanded_btn__i_recently_quit").collapse("hide")}),n("#expanded_btn__staying_quit .collapse-box").click(function(){n("#expanded_btn__staying_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),n("#btn__staying_quit").toggleClass("open"),n("#expanded_btn__staying_quit").collapse("hide")}),n("#btn__i_want_to_quit").addClass("section-animation"),setTimeout(function(){n("#btn__i_want_to_quit").removeClass("section-animation")},1200),setTimeout(function(){n("#btn__my_quit_day").addClass("section-animation")},300),setTimeout(function(){n("#btn__my_quit_day").removeClass("section-animation")},1500),setTimeout(function(){n("#btn__i_recently_quit").addClass("section-animation")},600),setTimeout(function(){n("#btn__i_recently_quit").removeClass("section-animation")},1800),setTimeout(function(){n("#btn__staying_quit").addClass("section-animation")},900),setTimeout(function(){n("#btn__staying_quit").removeClass("section-animation")},2100),n(".ttj-1").click(function(){n(".tools_tips_list").find(".active").removeClass("active"),n(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),n(".tools_tips_list").find("li:nth-of-type(1)").addClass("active"),n(".tools_tips_jumpers_wrapper").find("button:nth-of-type(1)").addClass("active"),n(".tools_tips_wrapper").animate({left:"0px"})}),n(".ttj-2").click(function(){n(".tools_tips_list").find(".active").removeClass("active"),n(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),n(".tools_tips_list").find("li:nth-of-type(2)").addClass("active"),n(".tools_tips_jumpers_wrapper").find("button:nth-of-type(2)").addClass("active"),n(".tools_tips_wrapper").animate({left:"-60px"})}),n(".ttj-3").click(function(){n(".tools_tips_list").find(".active").removeClass("active"),n(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),n(".tools_tips_list").find("li:nth-of-type(3)").addClass("active"),n(".tools_tips_jumpers_wrapper").find("button:nth-of-type(3)").addClass("active"),n(".tools_tips_wrapper").animate({left:"-220px"})}),n(".ttj-4").click(function(){n(".tools_tips_list").find(".active").removeClass("active"),n(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),n(".tools_tips_list").find("li:nth-of-type(4)").addClass("active"),n(".tools_tips_jumpers_wrapper").find("button:nth-of-type(4)").addClass("active"),n(".tools_tips_wrapper").animate({left:"-380px"})}),n(".ttj-5").click(function(){n(".tools_tips_list").find(".active").removeClass("active"),n(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),n(".tools_tips_list").find("li:nth-of-type(5)").addClass("active"),n(".tools_tips_jumpers_wrapper").find("button:nth-of-type(5)").addClass("active"),n(".tools_tips_wrapper").animate({left:"-540px"})}),n(".carousel").carousel({interval:2e4}),n(".page-home .toolsandtips li, .page-home-b .toolsandtips li").each(function(){var e=n(this).find("a.ClickClass-ToolsTips").attr("href");n(this).find(".col-md-9").wrapInner('<a class="ClickClass-ToolsTips" href="'+e+'"></a>')}),n("#mobile-accordion section#block-tb-megamenu-main-menu > #tb-megamenu-main-menu > .nav-collapse").addClass("collapse in"),n("body.page-build-your-quit-plan").addClass("bqp-for-stat"),n("body.smokefreegov-build-your-quit-plan.node-type-webform").addClass("bqp-for-stat"),n(".node-webform").hasClass("rm-header-footer")&&(n("body").css("background-image","none"),n("body").css("background-color","#fff"),n(".logo-and-search").css("display","none"),n(".nav-bottom-border").css("display","none"),n(".logo_area").css("display","none"),n(".footer-container").css("display","none")),n("#edit-interest-man").click(function(){window.ga&&window.ga("send","event","Dashboard","Men")}),n("#edit-interest-woman").click(function(){window.ga&&window.ga("send","event","Dashboard","Women")}),n("#edit-interest-pregnant").click(function(){window.ga&&window.ga("send","event","Dashboard","Pregnant")}),n("#edit-interest-teen").click(function(){window.ga&&window.ga("send","event","Dashboard","Teen")}),n("#edit-interest-vet").click(function(){window.ga&&window.ga("send","event","Dashboard","Veteran")}),n("#edit-interest-espanol").click(function(){window.ga&&window.ga("send","event","Dashboard","enEspanol")}),n("#edit-quit-journey-not-ready").click(function(){window.ga&&window.ga("send","event","Dashboard","NotReady")}),n("#edit-quit-journey-preparing-to-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Preparing")}),n("#edit-quit-journey-first-24-hrs").click(function(){window.ga&&window.ga("send","event","Dashboard","24Hours")}),n("#edit-quit-journey-first-two-weeks").click(function(){window.ga&&window.ga("send","event","Dashboard","2Weeks")}),n("#edit-quit-journey-maintaining-your-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Maintaining")}),n("#edit-tried-but-slipped").click(function(){window.ga&&window.ga("send","event","Dashboard","Slipped")}),n(".mobile-btn").click(function(){n("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu button").click()}),n("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("tap",function(e){e.preventDefault(),window.location.href=n(this).attr("href")}),n("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("click",function(e){e.preventDefault(),window.location.href=n(this).attr("href")}),n("#mega-desktop #block-tb-megamenu-main-menu #tb-megamenu-main-menu").removeClass("animate");var i=n(".nav").find("SPAN.caret");i.attr("aria-live","assertive"),i.text("(Collapsed.)"),n(".dropdown-toggle").click(function(){var e=n(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");i.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")}),n(".dropdown-toggle").hover(function(){var e=n(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");i.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")},function(){var e=n(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");i.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")}),n("IMG.arrow[alt='expand/collapse']").attr("alt","To Open"),n("IMG.arrow[alt='open/close']").attr("alt","To Open"),n(".accordion-toggle").click(function(){var e=n(this),t=n(this).parents(".accordion-group").find(".collapse"),a=e.find("IMG.arrow");return t.hasClass("in")?(t.css("height","0"),t.collapse("hide").attr("aria-hidden","true").attr("hidden","hidden"),e.removeClass("opened"),t.removeClass("in"),a.attr("alt","To Open")):(t.css("height","auto"),t.collapse("show").attr("aria-hidden","false").removeAttr("hidden"),t.addClass("in"),e.addClass("opened"),a.attr("alt","To Close")),!1}),jQuery("p:has(strong:contains(Next Step))").css("margin-top","30px"),jQuery("p:has(strong:contains(Try This))").css("margin-top","30px"),n("input:checked").parent().addClass("selected"),n("input").click(function(){n("input:not(:checked)").parent().removeClass("selected"),n("input:checked").parent().addClass("selected")}),n(".node-type-cr-article #block-views-quit-notes-carousel .item:first").addClass("active"),n(".node-type-cr-article #block-views-more-for-you-carousel .item:first").addClass("active"),n(".node-type-blog-entry #block-views-exp-blog-index-page h2").addClass("h3"),n(".node-type-blog-entry #block-views-blog-archive-block h2").addClass("h3"),n(".views-field-field-button-link").on("click",function(e){if(e.preventDefault(),e.stopPropagation(),n(this).find(".btn-img").hasClass("btn-selected"))n("body").hasClass("front")?window.location.href="/":n("body").hasClass("page-home-b")&&("a"==e.target.localName?window.location.href=e.target.href:window.location.href="/home_b/default-home");else{var t=n(this).find("a").attr("data-id");a=t,n("body").hasClass("front")?(n("html, body").animate({scrollTop:n(".view-home.view-display-id-page_1 > .view-content").offset().top}),currently_visible=n(".view-home .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){n(".view-home .content-area.views-row."+a).fadeIn(1e3)})):n("body").hasClass("page-home-b")&&(n("html, body").animate({scrollTop:n(".view-home-b.view-display-id-page_1").offset().top}),currently_visible=n(".view-home-b .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){n(".view-home-b .content-area.views-row."+a).fadeIn(1e3)}),n(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),n(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row."+a).show()),n(".views-field-field-button-link .btn-img").removeClass("btn-selected"),n(this).find(".btn-img").addClass("btn-selected"),n(".page-home .view-id-home.view-display-id-block_1 .btn-img, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-img").prev().css({display:"none"}),n(".page-home .view-id-home.view-display-id-block_1 .btn-selected, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-selected").prev().css({display:"block"})}var a}),n("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse.collapse.in").removeClass("always-show"),n("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse ul li").removeClass("sub-hidden-collapse"),n('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.dropdown-toggle"),n('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.mega-group-title"),n("#mobile-accordion a.mega-group-title").on("click",function(e){e.preventDefault(),n(this).children(".fa-chevron-right").hasClass("menu-item-selected")?n(this).children(".fa-chevron-right").removeClass("menu-item-selected"):n(this).children(".fa-chevron-right").addClass("menu-item-selected"),n(this).next(".nav-child").slideToggle("fast")}),n("#mobile-accordion a.dropdown-toggle").on("click",function(e){e.preventDefault(),n(this).children(".fa-chevron-right").hasClass("menu-item-selected")?n(this).children(".fa-chevron-right").removeClass("menu-item-selected"):n(this).children(".fa-chevron-right").addClass("menu-item-selected"),n(this).next(".nav-child").slideToggle("fast")}),n("body").hasClass("front")?(n(".view-home .views-row.content-area").hide(),n(".view-home .views-row-first.content-area").show()):n("body").hasClass("page-home-b")&&(n(".view-home-b .views-row.content-area").hide(),n(".view-home-b .views-row-first.content-area").show(),n(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),n(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row-1").show()),n("#live-chat-bar-link img").click(function(){n("#live-chat-bar-form").submit()}),n("input.search-bar-input").attr("id","searchbox-header")}),n(".page-home .btn-img-My-Quit-Day img").attr("alt","Bullseye icon"),n(".page-home .btn-img-Newly-Quit img").attr("alt","Hourglass icon"),n(".page-home .btn-img-Staying-Quit img").attr("alt","Progress chart icon"),n(".page-home .tool-tip-3 img").attr("alt","Mobile phone icon"),n(".page-home .tool-tip-4 img").attr("alt","Nicotine patch icon"),n(".page-home .tool-tip-5 img").attr("alt","Online chat icon"),n(".page-home .tool-tip-6 img").attr("alt","Smartphone icon"),n(".page-home .tool-tip-7 img").attr("alt","Pencil and ruler icon"),n(".node-type-page .image-note > img").attr("alt","Page icon"),n(".node-type-cr-landing.smokefreegov-quitting-dip .promo_button img").attr("alt","Go to The Real Cost button"),n(".smokefreegov-build-your-quit-plan.veterans_branded .btn-quit-plan > img").attr("alt","Arrow pointing down"),n(".smokefreegov-build-your-quit-plan.veterans_branded .next-section > img").attr("alt","Arrow pointing down")}(jQuery);