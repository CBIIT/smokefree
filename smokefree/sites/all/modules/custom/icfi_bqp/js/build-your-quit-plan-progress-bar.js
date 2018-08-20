(function ($) {
    Drupal.behaviors.buildYourQuitPlan = {
        attach: function () {
            window.onhashchange = function() {
                $(window).scrollTop($(window).scrollTop()+50);
            };


            function make_active(elementid) {
                $("#progress_bar .page-nav-item a").each(function() {
                    if ($(this).attr('data-target') == elementid) {
                        $(this).addClass("active");
                        $(this).prev().css('display','inline-block');
                        var label = $(this).prev();
                        setTimeout(function() { $(label).css('display','none'); }, 500);
                    }
                    else {
                        $(this).removeClass("active");
                    }
                });
            }

            var top = new Waypoint({
                element: document.getElementById('top_trigger'),
                handler: function(direction) {
                    if (direction == "down" && $(window).width() >= 800) {
                        $("#progress_bar").show();
                    }
                    else {
                        $("#progress_bar").hide();
                    }

                }
            });

            var step1 = new Waypoint({
                element: document.getElementById('mark'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step2 = new Waypoint({
                element: document.getElementById('reasons'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step3 = new Waypoint({
                element: document.getElementById('identify'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step4 = new Waypoint({
                element: document.getElementById('cravings'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step5 = new Waypoint({
                element: document.getElementById('reminders'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step6 = new Waypoint({
                element: document.getElementById('help'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: "-5px",
                continuous: false
            });
            var step7 = new Waypoint({
                element: document.getElementById('show'),
                handler: function(direction) {
                    make_active(this.element.id)
                },
                offset: 'bottom-in-view'
            });
        }
    }
}(jQuery));
