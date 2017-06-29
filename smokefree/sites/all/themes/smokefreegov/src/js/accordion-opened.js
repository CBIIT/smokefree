// JavaScript Document
$(function() {

	$('.accordion-body').on('show', function () {
		$(this).siblings('.accordion-heading').find('.accordion-toggle')
		.addClass('opened');
	});
	$('.accordion-body').on('hide', function () {
		$(this).siblings('.accordion-heading').find('.accordion-toggle')
		.removeClass('opened');
	});
	$('.accordion-body').on('show', function () {
		$(this).siblings('.accordion-headingAlt').find('.accordion-toggle')
		.addClass('opened');
	});
	$('.accordion-body').on('hide', function () {
		$(this).siblings('.accordion-headingAlt').find('.accordion-toggle')
		.removeClass('opened');
	});

})(jquery);