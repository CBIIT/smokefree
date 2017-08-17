/**
 * Created by snaik on 8/17/17.
 */

/**
 * Adds sliding functionality to tools and tips carousel on mobile view
 */
jQuery(document).ready(function() {
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