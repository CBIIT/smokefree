(function($){
    $(document).ready(function(){

		$('#VETSidebar ul ul li').addClass('odd');
		//$('#VETSidebar ul ul li:odd').addClass('odd');
		//$('#VETSidebar ul ul li:even').addClass('even');

		//$('#VETSidebar1 > ul > li > a').click(function() {
		//	
		//	
		//  $('#VETSidebar li').removeClass('active');
		//  $(this).closest('li').addClass('active');	
		//  var checkElement = $(this).next();  
		//  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		//    $(this).closest('li').removeClass('active');
		//    checkElement.slideUp('normal');
		//  }
		//  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		//    $('#VETSidebar ul ul:visible').slideUp('normal');
		//    checkElement.slideDown('normal');
		//  }
		//  if($(this).closest('li').find('ul').children().length == 0) {
		//    return true;
		//  } else {
		//    return true;	
		//  }		
		//  
		//  
		//});


		$('#VETSidebar > ul > li > ul > li > a').click(function() {
		   $('#VETSidebar li').removeClass('active');
		   $(this).closest('li').addClass('active');		
		});

		var currentURL = document.location.toString();

		if (currentURL.indexOf("why-you-smoke") >= 0) {
			setMenu('M1','why-you-smoke');
		}
		else if (currentURL.indexOf("why-i-use-tobacco") >= 0) {
			setMenu('M1','why-i-use-tobacco');
		}
		else if (currentURL.indexOf("why-you-need-to-quit") >= 0) {
			setMenu('M2','why-you-need-to-quit');
		}
		else if (currentURL.indexOf("physical-health") >= 0) {
			setMenu('M2','physical-health');
		}
		else if (currentURL.indexOf("mental-health") >= 0) {
			setMenu('M2','mental-health');
		}
		else if (currentURL.indexOf("disorders") >= 0) {
			setMenu('M2','disorders');
		}
		else if (currentURL.indexOf("SmokefreeVetTXT") >= 0) {
			setMenu('M2','SmokefreeVetTXT');
		}
		else if (currentURL.indexOf("how-to-quit") >= 0) {
			setMenu('M3','how-to-quit');
		}
		else if (currentURL.indexOf("triggers") >= 0) {
			setMenu('M3','triggers');
		}
		else if (currentURL.indexOf("cravings") >= 0) {
			setMenu('M3','cravings');
		}
		else if (currentURL.indexOf("addiction") >= 0) {
			setMenu('M3','addiction');
		}
		else if (currentURL.indexOf("support") >= 0) {
			setMenu('M3','support');
		}
		else if (currentURL.indexOf("common-questions") >= 0) {
			setMenu('M4','common-questions');
		}
		else if (currentURL.indexOf("success-tips") >= 0) {
			setMenu('M5','success-tips');
		}
		else if (currentURL.indexOf("common-problems") >= 0) {
			setMenu('M5','common-problems');
		}
		else if (currentURL.indexOf("smokefree-break") >= 0) {
			setMenu('M5','smokefree-break');
		}
		else if (currentURL.indexOf("stress-management") >= 0) {
			setMenu('M5','stress-management');
		}
		else if (currentURL.indexOf("cognitive-behavioral") >= 0) {
			setMenu('M6','cognitive-behavioral');
		}
    });
    function setMenu(m, n) {

	var mn = document.getElementById(m);
	var itm = document.getElementById(n);
	   if (n != '') {

		$('#VETSidebar li').removeClass('active');
		$(mn).closest('li').addClass('active');	
		var checkElement = $(mn).next();  
	  
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#VETSidebar ul ul:visible').slideUp('normal');
		checkElement.slideDown('normal');
		}    
	   
		$(itm).closest('li').addClass('active');	
		}
		
		else {
		  $('#VETSidebar li').removeClass('active');
		  $(mn).closest('li').addClass('active');	  
		}
    }
})(jQuery);




