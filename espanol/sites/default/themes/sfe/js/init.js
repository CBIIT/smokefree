( function($) {
	$(document).ready(function() {
		
		/* Mobile drop-down menu */
		$('.mobile-btn').click(function() {
			var collapseElem = $(this).next('.collapse');
			if (collapseElem.hasClass('in')) {
				collapseElem.css('height','0');
				collapseElem.collapse('hide');
				collapseElem.removeClass('in');
			}
			else {
				collapseElem.css('height','auto');
				collapseElem.collapse('show');
				collapseElem.addClass('in');
			}
			return false;
		});
		
		/* Accordion effect */
		$("IMG.arrow[alt='expand/collapse']").attr("alt","Abrir");
		$("IMG.arrow[alt='abrir/cerrar']").attr("alt","Abrir");
		$('.accordion-toggle').click(function() {
			var toggleElem = $(this);
			var collapseElem = toggleElem.parents('.accordion-group').find('.collapse');
			var arrowElem = toggleElem.find("IMG.arrow");
			if (collapseElem.hasClass('in')) {
				collapseElem.css('height','0');
				collapseElem.collapse('hide');
				toggleElem.removeClass('opened');
				collapseElem.removeClass('in');
				arrowElem.attr("alt","Abrir");
			}
			else {
				collapseElem.css('height','auto');
				collapseElem.collapse('show');
				collapseElem.addClass('in');
				toggleElem.addClass('opened');
				arrowElem.attr("alt","Cerrar");
			}
			return false;
		});
        //Livechat redirect
        $("#live-chat-bar-link img").click(function() {
            $("#live-chat-bar-form").submit();
        });
	});
}) (jQuery);