/**
 * Created by snaik on 8/31/17.
 */

// If the tophat exists, add a margin to the navigation
// Automatically add margin to nav based on the state of key pressed
jQuery(document).ready(function() {
    if (jQuery(".scrollmenu").length > 0) {
        jQuery('#main-nav').css('margin-top', "49px");
    }
    jQuery('a').on( 'keyup', function( e ) {
        if( e.which == 9 ) {
            jQuery(".scrollmenu").removeClass('tophat-508-margin');
        }
    } );
    jQuery('#skip-link > a').on( 'keyup', function( e ) {
        if( e.which == 9 ) {
            jQuery(".scrollmenu").addClass('tophat-508-margin');
        }
    } );
});