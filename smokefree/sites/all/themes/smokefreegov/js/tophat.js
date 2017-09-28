/**
 * Created by snaik on 8/31/17.
 */

// If the tophat exists, add a margin to the navigation
jQuery(document).ready(function() {
    if (jQuery(".scrollmenu").length > 0) {
        jQuery('#main-nav').css('margin-top', "49px");
    }
});