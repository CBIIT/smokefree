/**
 * Created by snaik on 8/9/17.
 */

function sticky_relocate() {
    var window_top = jQuery(window).scrollTop()+55;
    var div_top = jQuery('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        jQuery('#sticky').addClass('stick');
        jQuery('#sticky-anchor').height(jQuery('#sticky').outerHeight());
    } else {
        jQuery('#sticky').removeClass('stick');
        jQuery('#sticky-anchor').height(0);
    }
}

jQuery(function() {
    jQuery(window).scroll(sticky_relocate);
    sticky_relocate();
});