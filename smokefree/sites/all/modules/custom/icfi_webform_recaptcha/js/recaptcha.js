/**
 * Created by snaik on 6/13/17.
 */

jQuery(document).ready(function() {
    var captcha = jQuery('.captcha');
    jQuery(".node-webform .webform-submit.button-primary.btn.form-submit").before(captcha);
});

if (window.innerWidth < 768 && (/iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)) {
    var destElementOffset = jQuery('.g-recaptcha').position().top - window.innerWidth;
    jQuery('html, body').animate({ scrollTop: destElementOffset }, 0);
}