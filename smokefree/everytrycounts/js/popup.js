/**************************
 Author: Adrian yEnS Mato Gondelle
 website: www.yensdesign.com
 email: yensamg@gmail.com
 license: Feel free to use it, but keep this credits please!
 **************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//Time after page load that the popup should load.
var trigger_time = 90;

//loading popup with jQuery magic!
function loadPopup(){
    //loads popup only if it is disabled
    if(popupStatus==0){
        $("#backgroundPopup").css({
            "opacity": "0.8"
        });
        $("#backgroundPopup").fadeIn("slow");
        $("#popupContact").fadeIn("slow");
        popupStatus = 1;
    }
}

//disabling popup with jQuery magic!
function disablePopup(){
    //disables popup only if it is enabled
    if(popupStatus==1){
        $("#backgroundPopup").fadeOut("slow");
        $("#popupContact").fadeOut("slow");
        popupStatus = 0;
    }
}

//centering popup
function centerPopup(){
    //request data for centering
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = 350;
    var popupWidth = 300;
    //centering
    $("#popupContact").css({
        "position": "absolute",
        "width": "300px",
        "height": "350px",
        "top": windowHeight/2-popupHeight/2,
        "left": windowWidth/2-popupWidth/2
    });
    //only need force for IE6

    $("#backgroundPopup").css({
        "height": windowHeight
    });

}

function run_popup() {
    //centering with css
    centerPopup();
    //load popup
    loadPopup();
}

//CONTROLLING EVENTS IN jQuery
jQuery(document).ready(function(){
    console.log(trigger_time);
    setTimeout(run_popup, trigger_time * 1000);

    //LOADING POPUP
    //Click the button event!
    jQuery("#popup-trigger").click(function(){
        //centering with css
        centerPopup();
        //load popup
        loadPopup();
    });

    //CLOSING POPUP
    //Click the x event!
    jQuery("#popupContactClose").click(function(){
        disablePopup();
    });
    //Click out event!
    jQuery("#backgroundPopup").click(function(){
        disablePopup();
    });
    //Press Escape event!
    jQuery(document).keypress(function(e){
        if(e.keyCode==27 && popupStatus==1){
            disablePopup();
        }
    });

});