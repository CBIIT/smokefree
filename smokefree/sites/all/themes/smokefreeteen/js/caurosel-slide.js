/**
 * Created by snaik on 8/17/17.
 */

/**
 * Adds sliding functionality to tools and tips carousel on mobile view
 */
jQuery(document).ready(function() {
    // Instantiate the Bootstrap carousel
    jQuery('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    jQuery('.multi-item-carousel .item').each(function(){
        var next = jQuery(this).next();
        if (!next.length) {
            next = jQuery(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo(jQuery(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo(jQuery(this));
        } else {
            jQuery(this).siblings(':first').children(':first-child').clone().appendTo(jQuery(this));
        }
    });

    jQuery(".carousel").on("touchstart", function(event) {
        var xClick = event.originalEvent.touches[0].pageX;
        jQuery(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                jQuery(".carousel").carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -5) {
                jQuery(".carousel").carousel('prev');
            }
        });
        jQuery(".carousel").on("touchend", function () {
            jQuery(this).off("touchmove");
        });
    });
});