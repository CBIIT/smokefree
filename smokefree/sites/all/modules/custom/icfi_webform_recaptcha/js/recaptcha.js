/**
 * Created by snaik on 6/13/17.
 */

jQuery(document).ready(function() {
    var captcha = jQuery('.captcha');
    jQuery(".node-webform .webform-submit.button-primary.btn.form-submit").before(captcha);
});

window.reCaptchaPos = false;

function attachEvent(element, event, callbackFunction) {
    if (element.addEventListener) {
        element.addEventListener(event, callbackFunction, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, callbackFunction);
    }
};

function isScrolledIntoView(el) {
    var theTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    if(isVisible) { window.reCaptchaPos = theTop;  }
    return isVisible;
}

window.onscroll = function() { isScrolledIntoView(document.getElementsByClassName("captcha")); };

focusWhatever = function (response) {
    if(window.reCaptchaPos) { $("html, body").scrollTop(window.reCaptchaPos); }
};
