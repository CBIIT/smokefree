!function(i){i(document).ready(function(){var t=0;i(window).scroll(function(){var e=i(this).scrollTop();t<e?i("#tophat").addClass("minimized"):i("#tophat").removeClass("minimized"),t=e}),i(".tophat-menu").click(function(){i(".tophat-grid").fadeToggle(),i(".tophat-arrow").toggleClass("rotated"),i(".sf-family").fadeToggle(),i(".close-text").delay(2e3).toggleClass("open"),i("#tophat").toggleClass("in")}),i("ul.nav li.dropdown").hover(function(){i(this).find(".dropdown-menu").stop(!0,!0).fadeIn(200),i(this).toggleClass("open")},function(){i(this).find(".dropdown-menu").stop(!0,!0).fadeOut(200),i(this).toggleClass("open")}),i(window).scroll(function(){47<i(window).scrollTop()&&i("#sfg-nav-bar-menu").addClass("sf-navbar-fixed"),i(window).scrollTop()<48&&i("#sfg-nav-bar-menu").removeClass("sf-navbar-fixed")}),i("#sfg-nav-bar-menu .ss-navbar-desktop ul#superfish-2 > li").hover(function(){i(this).children("ul").css({display:"block"}),i(this).children("ul").removeClass("sf-hidden")},function(){i(this).children("ul").css({display:"none"}),i(this).children("ul").addClass("sf-hidden")});var a=0;if(i(".ss-navbar-desktop #superfish-2 > li > a.sf-depth-1:not(:first)").each(function(){a++;var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-"+a).append('<li><a href="'+e+'">'+t+"</a></li>"),i("#navbar-responsive .slide-menu .landingpage-menu").append('<li><a href="'+e+'">'+t+'</a><button class="mobile-subnav submenu-'+a+'-btn"></button></li>')}),i("#navbar-desktop").children("ul.navbar-nav").children("li.active").children("a").append('<span class=""><span class="on-bar"></span></span>'),i("#nav-bar-header .navbar-toggle").click(function(){i(document.createElement("div")).addClass("dark-overlay").appendTo(i(document.body))}),i("#navbar-responsive .nav-close").click(function(){i("#navbar-responsive").collapse("hide"),i(".dark-overlay").remove()}),i(".submenu-1-btn").click(function(){i("ul.landingpage-menu").animate({left:"-310px"}),i("ul.submenu-1").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".submenu-2-btn").click(function(){i("ul.landingpage-menu").animate({left:"-310px"}),i("ul.submenu-2").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".submenu-3-btn").click(function(){i("ul.landingpage-menu").animate({left:"-310px"}),i("ul.submenu-3").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".submenu-4-btn").click(function(){i("ul.landingpage-menu").animate({left:"-310px"}),i("ul.submenu-4").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".submenu-5-btn").click(function(){i("ul.landingpage-menu").animate({left:"-300px"}),i("ul.submenu-5").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".submenu-6-btn").click(function(){i("ul.landingpage-menu").animate({left:"-300px"}),i("ul.submenu-6").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".nav-back").click(function(){i("ul.submenu-1").animate({left:"-310px"}),i("ul.submenu-2").animate({left:"-310px"}),i("ul.submenu-3").animate({left:"-310px"}),i("ul.submenu-4").animate({left:"-310px"}),i("ul.submenu-5").animate({left:"-310px"}),i("ul.submenu-6").animate({left:"-310px"}),i("ul.landingpage-menu").animate({left:"0px"}),i(".nav-back").fadeToggle()}),i(".header-search-form__toggle").click(function(){i(".search-overlay").addClass("open")}),i(".search-overlay .btn-close").click(function(e){e.preventDefault(),i(".search-overlay").removeClass("open")}),i(".ss-navbar-desktop #superfish-2 > .sf-item-2 > ul > li > a").each(function(){var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-1").append('<li><a href="'+e+'">'+t+"</a></li>")}),i(".ss-navbar-desktop #superfish-2 > .sf-item-3 > ul > li > a").each(function(){var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-2").append('<li><a href="'+e+'">'+t+"</a></li>")}),i(".ss-navbar-desktop #superfish-2 > .sf-item-4 > ul > li > a").each(function(){var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-3").append('<li><a href="'+e+'">'+t+"</a></li>")}),i(".ss-navbar-desktop #superfish-2 > .sf-item-5 > ul > li > a").each(function(){var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-4").append('<li><a href="'+e+'">'+t+"</a></li>")}),i(".ss-navbar-desktop #superfish-2 > .sf-item-6 > ul > li > a").each(function(){var e=i(this).attr("href"),t=i(this).text();i("#navbar-responsive .slide-menu .submenu-5").append('<li><a href="'+e+'">'+t+"</a></li>")}),i(".ss-navbar-desktop #superfish-2 > li.active-trail > a").append('<span class="on-bar-wrapper"><span class="on-bar"></span></span>'),i("body").hasClass("sft")){var e=["sft-heroimage-1.jpg","sft-heroimage-2.jpg","sft-heroimage-3.jpg"];i(".homepage__hero").css({"background-image":"url(images/"+e[Math.floor(Math.random()*e.length)]+")"})}i("#btn__i_want_to_quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__my_quit_day").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__i_recently_quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__staying_quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#expanded_btn__i_want_to_quit .collapse-box").click(function(){i("#expanded_btn__i_want_to_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__i_want_to_quit").toggleClass("open"),i("#expanded_btn__i_want_to_quit").collapse("hide")}),i("#expanded_btn__my_quit_day .collapse-box").click(function(){i("#expanded_btn__my_quit_day").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__my_quit_day").toggleClass("open"),i("#expanded_btn__my_quit_day").collapse("hide")}),i("#expanded_btn__i_recently_quit .collapse-box").click(function(){i("#expanded_btn__i_recently_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__i_recently_quit").toggleClass("open"),i("#expanded_btn__i_recently_quit").collapse("hide")}),i("#expanded_btn__staying_quit .collapse-box").click(function(){i("#expanded_btn__staying_quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__staying_quit").toggleClass("open"),i("#expanded_btn__staying_quit").collapse("hide")}),i("#btn__i_want_to_quit").addClass("section-animation"),setTimeout(function(){i("#btn__i_want_to_quit").removeClass("section-animation")},1200),setTimeout(function(){i("#btn__my_quit_day").addClass("section-animation")},300),setTimeout(function(){i("#btn__my_quit_day").removeClass("section-animation")},1500),setTimeout(function(){i("#btn__i_recently_quit").addClass("section-animation")},600),setTimeout(function(){i("#btn__i_recently_quit").removeClass("section-animation")},1800),setTimeout(function(){i("#btn__staying_quit").addClass("section-animation")},900),setTimeout(function(){i("#btn__staying_quit").removeClass("section-animation")},2100),i(".ttj-1").click(function(){i(".tools_tips_list").find(".active").removeClass("active"),i(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),i(".tools_tips_list").find("li:nth-of-type(1)").addClass("active"),i(".tools_tips_jumpers_wrapper").find("button:nth-of-type(1)").addClass("active"),i(".tools_tips_wrapper").animate({left:"0px"})}),i(".ttj-2").click(function(){i(".tools_tips_list").find(".active").removeClass("active"),i(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),i(".tools_tips_list").find("li:nth-of-type(2)").addClass("active"),i(".tools_tips_jumpers_wrapper").find("button:nth-of-type(2)").addClass("active"),i(".tools_tips_wrapper").animate({left:"-60px"})}),i(".ttj-3").click(function(){i(".tools_tips_list").find(".active").removeClass("active"),i(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),i(".tools_tips_list").find("li:nth-of-type(3)").addClass("active"),i(".tools_tips_jumpers_wrapper").find("button:nth-of-type(3)").addClass("active"),i(".tools_tips_wrapper").animate({left:"-220px"})}),i(".ttj-4").click(function(){i(".tools_tips_list").find(".active").removeClass("active"),i(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),i(".tools_tips_list").find("li:nth-of-type(4)").addClass("active"),i(".tools_tips_jumpers_wrapper").find("button:nth-of-type(4)").addClass("active"),i(".tools_tips_wrapper").animate({left:"-380px"})}),i(".ttj-5").click(function(){i(".tools_tips_list").find(".active").removeClass("active"),i(".tools_tips_jumpers_wrapper").find(".active").removeClass("active"),i(".tools_tips_list").find("li:nth-of-type(5)").addClass("active"),i(".tools_tips_jumpers_wrapper").find("button:nth-of-type(5)").addClass("active"),i(".tools_tips_wrapper").animate({left:"-540px"})}),i(".carousel").carousel({interval:2e4}),i(".page-home .toolsandtips li, .page-home-b .toolsandtips li").each(function(){var e=i(this).find("a.ClickClass-ToolsTips").attr("href");i(this).find(".col-md-9").wrapInner('<a class="ClickClass-ToolsTips" href="'+e+'"></a>')}),i("#mobile-accordion section#block-tb-megamenu-main-menu > #tb-megamenu-main-menu > .nav-collapse").addClass("collapse in"),i("body.page-build-your-quit-plan").addClass("bqp-for-stat"),i("body.smokefreegov-build-your-quit-plan.node-type-webform").addClass("bqp-for-stat"),i(".node-webform").hasClass("rm-header-footer")&&(i("body").css("background-image","none"),i("body").css("background-color","#fff"),i(".logo-and-search").css("display","none"),i(".nav-bottom-border").css("display","none"),i(".logo_area").css("display","none"),i(".footer-container").css("display","none")),i("#edit-interest-man").click(function(){window.ga&&window.ga("send","event","Dashboard","Men")}),i("#edit-interest-woman").click(function(){window.ga&&window.ga("send","event","Dashboard","Women")}),i("#edit-interest-pregnant").click(function(){window.ga&&window.ga("send","event","Dashboard","Pregnant")}),i("#edit-interest-teen").click(function(){window.ga&&window.ga("send","event","Dashboard","Teen")}),i("#edit-interest-vet").click(function(){window.ga&&window.ga("send","event","Dashboard","Veteran")}),i("#edit-interest-espanol").click(function(){window.ga&&window.ga("send","event","Dashboard","enEspanol")}),i("#edit-quit-journey-not-ready").click(function(){window.ga&&window.ga("send","event","Dashboard","NotReady")}),i("#edit-quit-journey-preparing-to-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Preparing")}),i("#edit-quit-journey-first-24-hrs").click(function(){window.ga&&window.ga("send","event","Dashboard","24Hours")}),i("#edit-quit-journey-first-two-weeks").click(function(){window.ga&&window.ga("send","event","Dashboard","2Weeks")}),i("#edit-quit-journey-maintaining-your-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Maintaining")}),i("#edit-tried-but-slipped").click(function(){window.ga&&window.ga("send","event","Dashboard","Slipped")}),i(".mobile-btn").click(function(){i("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu button").click()}),i("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("tap",function(e){e.preventDefault(),window.location.href=i(this).attr("href")}),i("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("click",function(e){e.preventDefault(),window.location.href=i(this).attr("href")}),i("#mega-desktop #block-tb-megamenu-main-menu #tb-megamenu-main-menu").removeClass("animate");var n=i(".nav").find("SPAN.caret");n.attr("aria-live","assertive"),n.text("(Collapsed.)"),i(".dropdown-toggle").click(function(){var e=i(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");n.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")}),i(".dropdown-toggle").hover(function(){var e=i(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");n.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")},function(){var e=i(this),t=e.next("UL.dropdown-menu"),a=e.find("SPAN.caret");n.text("(Collapsed.)"),t.is(":visible")&&a.text("(Expanded.)")}),i("IMG.arrow[alt='expand/collapse']").attr("alt","To Open"),i("IMG.arrow[alt='open/close']").attr("alt","To Open"),i(".accordion-toggle").click(function(){var e=i(this),t=i(this).parents(".accordion-group").find(".collapse"),a=e.find("IMG.arrow");return t.hasClass("in")?(t.css("height","0"),t.collapse("hide").attr("aria-hidden","true").attr("hidden","hidden"),e.removeClass("opened"),t.removeClass("in"),a.attr("alt","To Open")):(t.css("height","auto"),t.collapse("show").attr("aria-hidden","false").removeAttr("hidden"),t.addClass("in"),e.addClass("opened"),a.attr("alt","To Close")),!1}),jQuery("p:has(strong:contains(Next Step))").css("margin-top","30px"),jQuery("p:has(strong:contains(Try This))").css("margin-top","30px"),i("input:checked").parent().addClass("selected"),i("input").click(function(){i("input:not(:checked)").parent().removeClass("selected"),i("input:checked").parent().addClass("selected")}),i(".node-type-cr-article #block-views-quit-notes-carousel .item:first").addClass("active"),i(".node-type-cr-article #block-views-more-for-you-carousel .item:first").addClass("active"),i(".node-type-blog-entry #block-views-exp-blog-index-page h2").addClass("h3"),i(".node-type-blog-entry #block-views-blog-archive-block h2").addClass("h3"),i(".views-field-field-button-link").on("click",function(e){if(e.preventDefault(),e.stopPropagation(),i(this).find(".btn-img").hasClass("btn-selected"))i("body").hasClass("front")?window.location.href="/":i("body").hasClass("page-home-b")&&("a"==e.target.localName?window.location.href=e.target.href:window.location.href="/home_b/default-home");else{var t=i(this).find("a").attr("data-id");a=t,i("body").hasClass("front")?(i("html, body").animate({scrollTop:i(".view-home.view-display-id-page_1 > .view-content").offset().top}),currently_visible=i(".view-home .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){i(".view-home .content-area.views-row."+a).fadeIn(1e3)})):i("body").hasClass("page-home-b")&&(i("html, body").animate({scrollTop:i(".view-home-b.view-display-id-page_1").offset().top}),currently_visible=i(".view-home-b .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){i(".view-home-b .content-area.views-row."+a).fadeIn(1e3)}),i(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),i(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row."+a).show()),i(".views-field-field-button-link .btn-img").removeClass("btn-selected"),i(this).find(".btn-img").addClass("btn-selected"),i(".page-home .view-id-home.view-display-id-block_1 .btn-img, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-img").prev().css({display:"none"}),i(".page-home .view-id-home.view-display-id-block_1 .btn-selected, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-selected").prev().css({display:"block"})}var a}),i("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse.collapse.in").removeClass("always-show"),i("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse ul li").removeClass("sub-hidden-collapse"),i('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.dropdown-toggle"),i('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.mega-group-title"),i("#mobile-accordion a.mega-group-title").on("click",function(e){e.preventDefault(),i(this).children(".fa-chevron-right").hasClass("menu-item-selected")?i(this).children(".fa-chevron-right").removeClass("menu-item-selected"):i(this).children(".fa-chevron-right").addClass("menu-item-selected"),i(this).next(".nav-child").slideToggle("fast")}),i("#mobile-accordion a.dropdown-toggle").on("click",function(e){e.preventDefault(),i(this).children(".fa-chevron-right").hasClass("menu-item-selected")?i(this).children(".fa-chevron-right").removeClass("menu-item-selected"):i(this).children(".fa-chevron-right").addClass("menu-item-selected"),i(this).next(".nav-child").slideToggle("fast")}),i("body").hasClass("front")?(i(".view-home .views-row.content-area").hide(),i(".view-home .views-row-first.content-area").show()):i("body").hasClass("page-home-b")&&(i(".view-home-b .views-row.content-area").hide(),i(".view-home-b .views-row-first.content-area").show(),i(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),i(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row-1").show()),i("#live-chat-bar-link img").click(function(){i("#live-chat-bar-form").submit()}),i("input.search-bar-input").attr("id","searchbox-header"),i("#btn__I-Want-to-Quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__My-Quit-Day").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__Newly-Quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#btn__Staying-Quit").click(function(){i(this).parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i(this).toggleClass("open")}),i("#expanded_btn__I-Want-to-Quit .collapse-box").click(function(){i("#expanded_btn__I-Want-to-Quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__I-Want-to-Quit").toggleClass("open"),i("#expanded_btn__I-Want-to-Quit").collapse("hide")}),i("#expanded_btn__My-Quit-Day .collapse-box").click(function(){i("#expanded_btn__My-Quit-Day").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__My-Quit-Day").toggleClass("open"),i("#expanded_btn__My-Quit-Day").collapse("hide")}),i("#expanded_btn__Newly-Quit .collapse-box").click(function(){i("#expanded_btn__Newly-Quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__Newly-Quit").toggleClass("open"),i("#expanded_btn__Newly-Quit").collapse("hide")}),i("#expanded_btn__Staying-Quit .collapse-box").click(function(){i("#expanded_btn__Staying-Quit").parent(".sf_homepage_4boxes__wrapper").toggleClass("open"),i("#btn__Staying-Quit").toggleClass("open"),i("#expanded_btn__Staying-Quit").collapse("hide")}),i("#btn__I-Want-to-Quit").addClass("section-animation"),setTimeout(function(){i("#btn__I-Want-to-Quit").removeClass("section-animation")},1200),setTimeout(function(){i("#btn__My-Quit-Day").addClass("section-animation")},300),setTimeout(function(){i("#btn__My-Quit-Day").removeClass("section-animation")},1500),setTimeout(function(){i("#btn__Newly-Quit").addClass("section-animation")},600),setTimeout(function(){i("#btn__Newly-Quit").removeClass("section-animation")},1800),setTimeout(function(){i("#btn__Staying-Quit").addClass("section-animation")},900),setTimeout(function(){i("#btn__Staying-Quit").removeClass("section-animation")},2100)}),i(".page-home .btn-img-My-Quit-Day img").attr("alt","Bullseye icon"),i(".page-home .btn-img-Newly-Quit img").attr("alt","Hourglass icon"),i(".page-home .btn-img-Staying-Quit img").attr("alt","Progress chart icon"),i(".page-home .tool-tip-3 img").attr("alt","Mobile phone icon"),i(".page-home .tool-tip-4 img").attr("alt","Nicotine patch icon"),i(".page-home .tool-tip-5 img").attr("alt","Online chat icon"),i(".page-home .tool-tip-6 img").attr("alt","Smartphone icon"),i(".page-home .tool-tip-7 img").attr("alt","Pencil and ruler icon"),i(".node-type-page .image-note > img").attr("alt","Page icon"),i(".node-type-cr-landing.smokefreegov-quitting-dip .promo_button img").attr("alt","Go to The Real Cost button"),i(".smokefreegov-build-your-quit-plan.veterans_branded .btn-quit-plan > img").attr("alt","Arrow pointing down"),i(".smokefreegov-build-your-quit-plan.veterans_branded .next-section > img").attr("alt","Arrow pointing down")}(jQuery);