/* Mobile Menu */
function openNav() {
	document.getElementById("mobile-nav").style.height = "100%";
}

function closeNav() {
	document.getElementById("mobile-nav").style.height = "0%";
}


/* Alias jQuery as "$" using anonymous function */
( function($) {

	/* Load script only after DOM is ready */
	$(document).ready(function() {

		/* Search Bar */
		$(".nav-search").click(function () {
		  $(".search-bar-form .search-bar-group").height("45px");
		  $(".nav-search").css("opacity", 0);
		  $("#block-boxes-vet-search").removeClass('hide');
		});
		$(".search-bar-form .closebtn").click(function(){
		  $(".nav-search").css("opacity", 1);
			$(".search-bar-form .search-bar-group").height("0px");
            $("#block-boxes-vet-search").addClass('hide');
		});
        $("#block-boxes-vet-search").addClass('hide');


		/* Click to slide to subhomepage */
		$('A.homelink').mousedown(function () {
			thisNode      = $(this);
			targetNodeRef = $(this).attr('href');
			targetNode    = $(targetNodeRef);
			thisNode.attr('href','javascript:void(0);');
			if ($(window).width() > 480) {
				$('#wrapper').scrollTo(targetNodeRef, 0, {
					onAfter:function(){
						targetNode.focus();
						thisNode.attr('href',targetNodeRef);
						return true;
					}
				});
			}
			else {
				targetNode.focus();
				thisNode.attr('href',targetNodeRef);
				return true;
			}
			/* Move background */
			moveBackground(targetNodeRef, '0%','20%', '26%', '32%','38%','44%', '50%');
			return false;
		});

		/* Implement "on click" poll submission
		$('INPUT.form-radio').click(function () {
			$(this).parents('FORM').submit();
		});*/

		/* Show message box */
		var _hide = 'false';
		if ($.cookie("hide-message-bar") === 'true') {
			_hide = $.cookie("hide-message-bar");
			$('#message-bar')
				.hide()
				.attr('aria-hidden', 'true')
				.attr('hidden', 'hidden')
				.css('display', 'none');
		}
		$('#close-message-bar').attr('href','#');
		$('#close-message-bar')
			.bind('click', function() {
				$('#message-bar')
					.animate({
							'display' : 'none',
							'height'  : '0px',
							'opacity' : 0,
						}, {
							duration: 750,
							specialEasing: {
								width: "swing",
								height: "easeOutBounce"
							}
						}
					)
					.attr('aria-hidden', 'true')
					.attr('hidden', 'hidden');
				$.cookie('hide-message-bar', 'true', {expires: 7});
			});

		/* Check to see if the survey needs to be displayed
		testSurveyPopup = false;
		var socket = new easyXDM.Socket({
			remote: teenSmokefreeGov + '/survey-sfg.aspx',
			onMessage: function(message, origin) {
				if (testSurveyPopup) { alert(teenSmokefreeGov); };
				if (testSurveyPopup) { alert("Received '" + message + "' from '" + origin + "'"); };

				if ($.cookie('the_cookie')=="1") {
					if (testSurveyPopup) { alert($.cookie('the_cookie')); };
				}
				else if (message=="Incomplete") {
					if (testSurveyPopup) { alert($.cookie('the_cookie')); };
					startTimer(testSurveyPopup);
				}
				else if (message=="Done") {
					if (testSurveyPopup) { alert('Done on the client side'); };
				}
			},
			onReady: function() {
				socket.postMessage("Yay, it works!");
			}
		});*/

	//Bottom row slider CSS initialization to allow graceful degradation if no JS present
	$('.cs-style-3 figcaption').addClass('slideUp');

	});

	/* Timer to show the survey dialogue box */
	function startTimer(testSurveyPopup) {
		if (testSurveyPopup) { alert('Starting timer.'); };
		$("#dialog-modal").removeClass('offscreen');
		$("#dialog-modal").dialog({
			resizable: true,
			height: 250,
			width: 290,
			modal: true,
			buttons: {
				"Yes, I'll give feedback": function() {
					callFunc();
					$.cookie('the_cookie', '1', {expires: 365});
					$( this ).dialog( "close" );
				},
				"No": function() {
					$.cookie('the_cookie', '1', {expires: 365});
					$( this ).dialog( "close" );
				}
			}
		});
	}

	/* Function to display the survey */
	function callFunc(testSurveyPopup){
		$.fancybox({
			'type': 'iframe',
			'href': teenSmokefreeGov + '/survey-sfg.aspx?embedded=true',
			'title':'Smokefree.gov User Survey',
			'width':'98%'
		});
	};

	/* Moves background in sync with the homepage contents */
	function moveBackground(slide, p0, p1, p2, p3, p4, p5, p6)
	{
		if(slide==='#main') {
			$('#bg-container').scrollTo(p0, 800);
		}
		else if(slide==='#box1') {
			$('#bg-container').scrollTo(p1, 800);
		}
		else if(slide==='#box2') {
			$('#bg-container').scrollTo(p2, 800);
		}
		else if(slide==='#box3') {
			$('#bg-container').scrollTo(p3, 800);
		}
		else if(slide==='#box4') {
			$('#bg-container').scrollTo(p4, 800);
		}
		else if(slide==='#box5') {
			$('#bg-container').scrollTo(p5, 800);
		}
		else {
			$('#bg-container').scrollTo(p6, 800);
		}
	};


	/*$(document).ready(function() {
			$( "#block-views-home-block-1 img.img-responsive" ).wrap(function() {
  				return "<div class='home-icon-wrapper'></div>";
			});

	});*/

}) (jQuery);
