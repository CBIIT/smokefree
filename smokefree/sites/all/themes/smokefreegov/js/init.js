!function(e){e(document).ready(function(){function i(i){e("body").hasClass("front")?(e("html, body").animate({scrollTop:e(".view-home.view-display-id-page_1 > .view-content").offset().top}),currently_visible=e(".view-home .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){e(".view-home .content-area.views-row."+i).fadeIn(1e3)})):e("body").hasClass("page-home-b")&&(e("html, body").animate({scrollTop:e(".view-home-b.view-display-id-page_1").offset().top}),currently_visible=e(".view-home-b .views-row.content-area:visible:first"),currently_visible.fadeOut(1e3,function(){e(".view-home-b .content-area.views-row."+i).fadeIn(1e3)}),e(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),e(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row."+i).show())}e(".page-home .toolsandtips li, .page-home-b .toolsandtips li").each(function(){var i=e(this).find("a.ClickClass-ToolsTips").attr("href");e(this).find(".col-md-9").wrapInner('<a class="ClickClass-ToolsTips" href="'+i+'"></a>')}),e("#mobile-accordion section#block-tb-megamenu-main-menu > #tb-megamenu-main-menu > .nav-collapse").addClass("collapse in"),e("body.page-build-your-quit-plan").addClass("bqp-for-stat"),e("body.smokefreegov-build-your-quit-plan.node-type-webform").addClass("bqp-for-stat"),e(".node-webform").hasClass("rm-header-footer")&&(e("body").css("background-image","none"),e("body").css("background-color","#fff"),e(".logo-and-search").css("display","none"),e(".nav-bottom-border").css("display","none"),e(".logo_area").css("display","none"),e(".footer-container").css("display","none")),e("#edit-interest-man").click(function(){window.ga&&window.ga("send","event","Dashboard","Men")}),e("#edit-interest-woman").click(function(){window.ga&&window.ga("send","event","Dashboard","Women")}),e("#edit-interest-pregnant").click(function(){window.ga&&window.ga("send","event","Dashboard","Pregnant")}),e("#edit-interest-teen").click(function(){window.ga&&window.ga("send","event","Dashboard","Teen")}),e("#edit-interest-vet").click(function(){window.ga&&window.ga("send","event","Dashboard","Veteran")}),e("#edit-interest-espanol").click(function(){window.ga&&window.ga("send","event","Dashboard","enEspanol")}),e("#edit-quit-journey-not-ready").click(function(){window.ga&&window.ga("send","event","Dashboard","NotReady")}),e("#edit-quit-journey-preparing-to-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Preparing")}),e("#edit-quit-journey-first-24-hrs").click(function(){window.ga&&window.ga("send","event","Dashboard","24Hours")}),e("#edit-quit-journey-first-two-weeks").click(function(){window.ga&&window.ga("send","event","Dashboard","2Weeks")}),e("#edit-quit-journey-maintaining-your-quit").click(function(){window.ga&&window.ga("send","event","Dashboard","Maintaining")}),e("#edit-tried-but-slipped").click(function(){window.ga&&window.ga("send","event","Dashboard","Slipped")}),e(".mobile-btn").click(function(){e("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu button").click()}),e("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("tap",function(i){i.preventDefault(),window.location.href=e(this).attr("href")}),e("#mega-mobile #block-tb-megamenu-main-menu #tb-megamenu-main-menu ul li a").on("click",function(i){i.preventDefault(),window.location.href=e(this).attr("href")}),e("#mega-desktop #block-tb-megamenu-main-menu #tb-megamenu-main-menu").removeClass("animate");var n=e(".nav").find("SPAN.caret");n.attr("aria-live","assertive"),n.text("(Collapsed.)"),e(".dropdown-toggle").click(function(){var i=e(this),o=i.next("UL.dropdown-menu"),a=i.find("SPAN.caret");n.text("(Collapsed.)"),o.is(":visible")&&a.text("(Expanded.)")}),e(".dropdown-toggle").hover(function(){var i=e(this),o=i.next("UL.dropdown-menu"),a=i.find("SPAN.caret");n.text("(Collapsed.)"),o.is(":visible")&&a.text("(Expanded.)")},function(){var i=e(this),o=i.next("UL.dropdown-menu"),a=i.find("SPAN.caret");n.text("(Collapsed.)"),o.is(":visible")&&a.text("(Expanded.)")}),e("IMG.arrow[alt='expand/collapse']").attr("alt","To Open"),e("IMG.arrow[alt='open/close']").attr("alt","To Open"),e(".accordion-toggle").click(function(){var i=e(this),n=e(this).parents(".accordion-group").find(".collapse"),o=i.find("IMG.arrow");return n.hasClass("in")?(n.css("height","0"),n.collapse("hide").attr("aria-hidden","true").attr("hidden","hidden"),i.removeClass("opened"),n.removeClass("in"),o.attr("alt","To Open")):(n.css("height","auto"),n.collapse("show").attr("aria-hidden","false").removeAttr("hidden"),n.addClass("in"),i.addClass("opened"),o.attr("alt","To Close")),!1}),jQuery("p:has(strong:contains(Next Step))").css("margin-top","30px"),jQuery("p:has(strong:contains(Try This))").css("margin-top","30px"),e("input:checked").parent().addClass("selected"),e("input").click(function(){e("input:not(:checked)").parent().removeClass("selected"),e("input:checked").parent().addClass("selected")}),e(".node-type-cr-article #block-views-quit-notes-carousel .item:first").addClass("active"),e(".node-type-cr-article #block-views-more-for-you-carousel .item:first").addClass("active"),e(".node-type-blog-entry #block-views-exp-blog-index-page h2").addClass("h3"),e(".node-type-blog-entry #block-views-blog-archive-block h2").addClass("h3"),e(".views-field-field-button-link").on("click",function(n){n.preventDefault(),n.stopPropagation(),e(this).find(".btn-img").hasClass("btn-selected")?e("body").hasClass("front")?window.location.href="/":e("body").hasClass("page-home-b")&&("a"==n.target.localName?window.location.href=n.target.href:window.location.href="/home_b/default-home"):(i(e(this).find("a").attr("data-id")),e(".views-field-field-button-link .btn-img").removeClass("btn-selected"),e(this).find(".btn-img").addClass("btn-selected"),e(".page-home .view-id-home.view-display-id-block_1 .btn-img, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-img").prev().css({display:"none"}),e(".page-home .view-id-home.view-display-id-block_1 .btn-selected, .page-home-b .view-id-home_b.view-display-id-block_1 .btn-selected").prev().css({display:"block"}))}),e("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse.collapse.in").removeClass("always-show"),e("#mobile-accordion section#block-tb-megamenu-main-menu #tb-megamenu-main-menu > .nav-collapse ul li").removeClass("sub-hidden-collapse"),e('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.dropdown-toggle"),e('<i class="fa fa-chevron-right" aria-hidden="true"></i>').appendTo("#mobile-accordion a.mega-group-title"),e("#mobile-accordion a.mega-group-title").on("click",function(i){i.preventDefault(),e(this).children(".fa-chevron-right").hasClass("menu-item-selected")?e(this).children(".fa-chevron-right").removeClass("menu-item-selected"):e(this).children(".fa-chevron-right").addClass("menu-item-selected"),e(this).next(".nav-child").slideToggle("fast")}),e("#mobile-accordion a.dropdown-toggle").on("click",function(i){i.preventDefault(),e(this).children(".fa-chevron-right").hasClass("menu-item-selected")?e(this).children(".fa-chevron-right").removeClass("menu-item-selected"):e(this).children(".fa-chevron-right").addClass("menu-item-selected"),e(this).next(".nav-child").slideToggle("fast")}),e("body").hasClass("front")?(e(".view-home .views-row.content-area").hide(),e(".view-home .views-row-first.content-area").show()):e("body").hasClass("page-home-b")&&(e(".view-home-b .views-row.content-area").hide(),e(".view-home-b .views-row-first.content-area").show(),e(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row").hide(),e(".view-home-b.view-id-home_b.view-display-id-block_2 .views-row-1").show()),e("#live-chat-bar-link img").click(function(){e("#live-chat-bar-form").submit()})})}(jQuery);