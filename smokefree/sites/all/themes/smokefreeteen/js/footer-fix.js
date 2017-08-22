/**
 * Created by snaik on 8/16/17.
 */


//Prevents footer from being a dropdown
jQuery(document).ready(function() {
    jQuery("#footer-menu li").removeClass("dropdown");
    jQuery("#footer-menu ul").removeClass("dropdown-menu");
    jQuery("#footer-menu ul li ul").addClass("menu nav");
});