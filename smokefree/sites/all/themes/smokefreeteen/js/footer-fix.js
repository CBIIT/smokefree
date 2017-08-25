/**
 * Created by snaik on 8/16/17.
 */


jQuery(document).ready(function() {
    //Prevents footer from being a dropdown
    jQuery("#footer-menu li").removeClass("dropdown");
    jQuery("#footer-menu ul").removeClass("dropdown-menu");
    jQuery("#footer-menu ul li ul").addClass("menu nav");

    // Adds the "expanded" class to the "Above Smokefree Teen" menu item in the footer
    var about = 'About Smokefree Teen';
    jQuery("#footer-menu ul li:nth-last-child(1)").each(function() {
        if(this.innerText.trim() === about) {
            jQuery(this).addClass("expanded");
        }
    });
});