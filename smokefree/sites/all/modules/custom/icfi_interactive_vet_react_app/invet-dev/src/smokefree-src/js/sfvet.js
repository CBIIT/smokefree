// JavaScript Document
$(document).ready(function () {
	"use strict";
	
// SELECTION CHECKBOXES
	$(function() {
	  	enable_cb();
	  	$("#nrt-selection").click(enable_cb);
	});

	function enable_cb() {
		// Disable Gum or Lozenge if the other is selected
		if ($('label#gum').find('.nrt-selection-checkbox').prop('checked') === true) {
			$('label#lozenge').find('.nrt-selection-checkbox').attr('disabled', true);
			$('label#lozenge').parent('.nrt-selection').addClass('disabled');
		} else if ($('label#gum').find('.nrt-selection-checkbox').prop('checked') === false) {
			$('label#lozenge').find('.nrt-selection-checkbox').attr('disabled', false);
			$('label#lozenge').parent('.nrt-selection').removeClass('disabled');
		}
		if ($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === true) {
			$('label#gum').find('.nrt-selection-checkbox').attr("disabled", true);
			$('label#gum').parent('.nrt-selection').addClass('disabled');
		} else if ($('label#gum').find('.nrt-selection-checkbox').prop('checked') === false) {
			$('label#gum').find('.nrt-selection-checkbox').attr('disabled', false);
			$('label#gum').parent('.nrt-selection').removeClass('disabled');
		}
		
		// Variables for the Fact Sheet section
		/*
		var testArray = [
			'0- Patch',
			'1- Gum',
			'2- Lozenge',
			'3- Counseling',
			'4- Patch & Gum',
			'5- Patch & Lozenge',
			'6- Patch & Counseling',
			'7- Gum & Counseling',
			'8- Lozenge & Counseling',
			'9- Patch, Gum, & Counseling',
			'10- Patch, Lozenge, & Counseling'
		];
		*/
		var introArray = [
			'<p class="larger">You are up to <b>2 times</b> more likely to stay quit.</p><p class="larger">Try combining with the nicotine gum or lozenge for an even greater chance to stay quit.</p>',
			'<p class="larger">You are more than <b>2 times</b> as likely to stay quit.</p><p class="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
			'<p class="larger">You are up to <b>3 times</b> more likely to stay quit.</p><p class="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
			'<p class="larger">You are up to <b>2 times</b> more likely to stay quit.</p><p class="larger">Add NRT for an even greater chance to stay quit.</p>',
			'<p class="larger">You are up to <b>4 times</b> more likely to stay quit.</p><p class="larger">Add counseling for the best chance to stay quit.</p>',
			'<p class="larger">You are up to <b>4 times</b> more likely to stay quit.</p><p class="larger">Add counseling for the best chance to stay quit.</p>',
			'<p class="larger">You are more than <b>3 times</b> more likely to stay quit.</p><p class="larger">Try adding the nicotine gum or lozenge for an even greater chance to stay quit.</p>',
			'<p class="larger">You are more than <b>3 times</b> more likely to stay quit.</p><p class="larger">Try adding the nicotine patch for an even greater chance to stay quit.</p>',
			'<p class="larger">You are more than <b>3 times</b> more likely to stay quit.</p><p class="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
			'<p class="larger">You are more than <b>4 times</b> more likely to stay quit.</p><p class="larger">Great job! You are maximizing your chances of staying quit.</p>',
			'<p class="larger">You are more than <b>4 times</b> more likely to stay quit.</p><p class="larger">Great job! You are maximizing your chances of staying quit.</p>',
			'<p class="larger">Many people choose to quit without any assistance—also known as “quitting cold turkey.” But data show that you are much more likely to stay quit if you use aids like NRT and counseling.</p><p class="larger"><b>Select one or more</b> of the therapies above to see how your likelihood of staying quit could change.</p>'
		];
		var FactsArray = [
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Nicotine Gum</h4><p>The gum has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one piece every 1–2 hours.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Nicotine Lozenge</h4><p>The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Counseling</h4><p>Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><h4>Gum</h4><p>The gum has nicotine to help decrease withdrawal symptoms.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><h4>Lozenge</h4><p>The lozenge has nicotine to help decrease withdrawal symptoms.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><h4>Counseling</h4><p>Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Nicotine Gum</h4><p>The gum has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one piece every 1–2 hours.</p><h4>Counseling</h4><p>Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Nicotine Lozenge</h4><p>The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.</p><h4>Counseling</h4><p>Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><h4>Gum</h4><p>The gum has nicotine to help decrease withdrawal symptoms.</p><h4>Counseling</h4><p>Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<h4>Patch</h4><p>The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.</p><h4>Lozenge</h4><p>The lozenge has nicotine to help decrease withdrawal symptoms.</p><h4>Counseling</h4><p>Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.</p><a href="#" class="btn btn-default btn-center">Download a Fact Sheet</a>',
			'<p>Make a selection above.</p>'
		];
		var quittipsArray = [
			'<li>Begin using the patch on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Avoid wearing the patch on the same area more than once a week.</li><li>If you have trouble sleeping or vivid dreams, remove the patch before going to sleep.</li>',
			'<li>Begin using the gum on your quit date.</li><li>Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.</li><li>Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.</li><li>Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.</li><li>Do not bite down too quickly or swallow the nicotine; it may make you nauseous or upset your stomach.</li><li>Do not eat or drink 15 minutes before or during use.</li>',
			'<li>Begin using the lozenge on your quit date.</li><li>Let the lozenge slowly dissolve in your mouth near your cheek and gum.</li><li>Use up to 20 pieces per day as needed to reduce cravings.</li><li>Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.</li>',
			'<li>Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.</li><li>Using NRT together with counseling gives you the best chance of quitting smoking.</li><li>Speak with a Quit VET counselor Monday–Friday. Dial 1-855-QUIT-VET (1-855-784-8838).</li><li>Sign up for SmokefreeVET Text. Text VET to 47848 or go to smokefree.gov/vet.</li>',
			'<li>Begin using the patch and gum on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Use a piece of nicotine gum as needed for strong cravings.</li><li>Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth. </li><li>Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.</li><li>Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.</li>',
			'<li>Begin using the patch and lozenge on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Use lozenges as needed to reduce cravings. </li><li>Let the lozenge slowly dissolve in your mouth near your cheek and gum.</li><li>Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.</li>',
			'<li>Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.</li><li>Begin using the patch on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Avoid wearing the patch on the same area more than once a week.</li><li>If you have trouble sleeping or vivid dreams, remove the patch before going to sleep.</li>',
			'<li>Begin using the gum on your quit date.</li><li>Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth. </li><li>Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.</li><li>Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.</li><li>Do not bite down too quickly or swallow the nicotine; it may make you nauseous or upset your stomach.</li><li>Do not eat or drink 15 minutes before or during use.</li>',
			'<li>Begin using the lozenge on your quit date.</li><li>Let the lozenge slowly dissolve in your mouth near your cheek and gum.</li><li>Use up to 20 pieces per day as needed to reduce cravings. </li><li>Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.</li>',
			'<li>Begin using the patch and gum on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Use a piece of nicotine gum as needed for strong cravings.</li><li>Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.</li> <li>Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.</li><li>Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.</li>',
			'<li>Begin using the patch and lozenge on your quit date.</li><li>Each day, remove the old patch when you wake up and apply one new patch.</li><li>Use lozenges as needed to reduce cravings. </li><li>Let the lozenge slowly dissolve in your mouth near your cheek and gum.</li><li>Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.</li>'
		];
		var yourdayArray = [
			'<p class="larger">The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.</p>',
			'<p class="larger">The gum has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.</p>',
			'<p class="larger">The lozenge has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.</p>',
			'<p class="larger">There are lots of ways to get counseling. On a weekly basis, you might try individual counseling one on one, attend a group session at your local VA, or speak with a counselor over the phone. For a daily support in between other counseling sessions, get encouraging and informative messages via text.</p>',
			'<p class="larger">Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.</p>',
			'<p class="larger">Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.</p>',
			'<p class="larger">The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.</p>',
			'<p class="larger">The gum has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.</p>',
			'<p class="larger">The lozenge has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.</p>',
			'<p class="larger">Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.</p>',
			'<p class="larger">Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.</p>'	
		];
		var quoteArray = [
			'No urges today!&#8221;',
			'I’m taking it one craving at a time, one day at a time.&#8221;',
			'I quit today!&#8221;',
			'I am DONE smoking.&#8221;',
			'Doing well with the patch and gum.&#8221;',
			'I’m 9 days cigarette-free!&#8221;',
			'No urges today!&#8221;',
			'I’m taking it one craving at a time, one day at a time.&#8221;',
			'I quit today!&#8221;',
			'Doing well with the patch and gum.&#8221;',
			'I’m 9 days cigarette-free!&#8221;'	
		];
		
		// Change content based on NRT selection
		function reset_nrt() {
			$('#chances').append(introArray[11]);
			$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-1.jpg');
			$('#facts').append(FactsArray[11]);
			$('#quit-tips-content').append(quittipsArray[10]);
			$('#yourday').append(yourdayArray[10]);	
			$('#nrt-quote').append(quoteArray[10]);	
		}
		function clear_nrt() {
			$('#chances').empty();
			$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-1.jpg');
			$('#facts').empty();
			$('#quit-tips-content').empty();
			$('#yourday').empty();	
			$('#nrt-quote').empty();	
		}
		if ($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) {
				// If only Patch
				clear_nrt();	
				$('#chances').append(introArray[0]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-2.jpg');	
                $('#facts').append(FactsArray[0]);
				$('#quit-tips-content').append(quittipsArray[0]);
				$('#yourday').append(yourdayArray[0]);	
				$('#nrt-quote').append(quoteArray[0]);	
		}
		if ($('label#gum').find('.nrt-selection-checkbox').prop('checked') === true) {
				// If only Gum
				clear_nrt();
				$('#chances').append(introArray[1]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-2.jpg');
				$('#facts').append(FactsArray[1]);
				$('#quit-tips-content').append(quittipsArray[1]);
				$('#yourday').append(yourdayArray[1]);	
				$('#nrt-quote').append(quoteArray[1]);
		}
		if ($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === true) {
				// If only Lozenge
				clear_nrt();
				$('#chances').append(introArray[2]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-3.jpg');
				$('#facts').append(FactsArray[2]);
				$('#quit-tips-content').append(quittipsArray[2]);
				$('#yourday').append(yourdayArray[2]);	
				$('#nrt-quote').append(quoteArray[2]);
		}
		if ($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true) {
				// If only Counseling
				clear_nrt();
				$('#chances').append(introArray[3]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-2.jpg');
				$('#facts').append(FactsArray[3]);
				$('#quit-tips-content').append(quittipsArray[3]);
				$('#yourday').append(yourdayArray[3]);	
				$('#nrt-quote').append(quoteArray[3]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#gum').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Patch and Gum
				clear_nrt();
				$('#chances').append(introArray[4]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-4.jpg');
				$('#facts').append(FactsArray[4]);
				$('#quit-tips-content').append(quittipsArray[4]);
				$('#yourday').append(yourdayArray[4]);	
				$('#nrt-quote').append(quoteArray[4]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Patch and Lozenge
				clear_nrt();
				$('#chances').append(introArray[5]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-4.jpg');
				$('#facts').append(FactsArray[5]);
				$('#quit-tips-content').append(quittipsArray[5]);
				$('#yourday').append(yourdayArray[5]);	
				$('#nrt-quote').append(quoteArray[5]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Patch and Counseling
				clear_nrt();
				$('#chances').append(introArray[6]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-3.jpg');
				$('#facts').append(FactsArray[6]);
				$('#quit-tips-content').append(quittipsArray[6]);
				$('#yourday').append(yourdayArray[6]);	
				$('#nrt-quote').append(quoteArray[6]);
		}
		if (($('label#gum').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Gum and Counseling
				clear_nrt();
				$('#chances').append(introArray[7]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-3.jpg');
				$('#facts').append(FactsArray[7]);
				$('#quit-tips-content').append(quittipsArray[7]);
				$('#yourday').append(yourdayArray[7]);	
				$('#nrt-quote').append(quoteArray[7]);
		}
		if (($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Lozenge and Counseling
				clear_nrt();
				$('#chances').append(introArray[8]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-3.jpg');
				$('#facts').append(FactsArray[8]);
				$('#quit-tips-content').append(quittipsArray[8]);
				$('#yourday').append(yourdayArray[8]);	
				$('#nrt-quote').append(quoteArray[8]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#gum').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Patch, Gum, and Counseling
				clear_nrt();
				$('#chances').append(introArray[9]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-4.jpg');
				$('#facts').append(FactsArray[9]);
				$('#quit-tips-content').append(quittipsArray[9]);
				$('#yourday').append(yourdayArray[9]);	
				$('#nrt-quote').append(quoteArray[9]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === true) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === true)) {
				// If Patch, Lozenge, and Counseling
				clear_nrt();
				$('#chances').append(introArray[10]);
				$('#emoji').find('img').attr('src','images/nrt-animation-placeholder-4.jpg');
				$('#facts').append(FactsArray[10]);
				$('#quit-tips-content').append(quittipsArray[10]);
				$('#yourday').append(yourdayArray[10]);	
				$('#nrt-quote').append(quoteArray[10]);
		}
		if (($('label#patch').find('.nrt-selection-checkbox').prop('checked') === false) &&
			($('label#gum').find('.nrt-selection-checkbox').prop('checked') === false) &&
			($('label#lozenge').find('.nrt-selection-checkbox').prop('checked') === false) &&
			($('label#counseling').find('.nrt-selection-checkbox').prop('checked') === false)) {
				// If all are unchecked
				clear_nrt();	
				reset_nrt();
		}
	}
	
// DOSAGE TABS	
	var cigaretteRangeArray = [
		'10 or fewer',
		'11-20',
		'21 or more'
	];
	var cigaretteGumArray = [
		'2mg',
		'2mg',
		'4mg'
	];
	var cigarettePatchArray = [
		'14mg',
		'21mg',
		'21mg'
	];
	var c = 0; // array counter for cigarettes tab
	$('#cigarettes').find('.btn-plus').click(function(){
		if (c === 2 ) {
			c = 0;
		} else {
			c = c+1;
		}
        $('.cigarette-amount').text(cigaretteRangeArray[c]);
        $('.cigarette-solution').find('.gum-amount').fadeOut();
        $('.cigarette-solution').find('.patch-amount').fadeOut();
		$('.cigarette-solution').find('.gum-amount').text(cigaretteGumArray[c]);
        $('.cigarette-solution').find('.patch-amount').text(cigarettePatchArray[c]);
        $('.cigarette-solution').find('.gum-amount').fadeIn();
        $('.cigarette-solution').find('.patch-amount').fadeIn();
	});
	$('#cigarettes').find('.btn-minus').click(function(){
		if (c === 0 ) {
			c = 2;
		} else {
			c = c-1;
		}
        $('.cigarette-amount').text(cigaretteRangeArray[c]);
		$('.cigarette-solution').find('.gum-amount').fadeOut();
        $('.cigarette-solution').find('.patch-amount').fadeOut();
		$('.cigarette-solution').find('.gum-amount').text(cigaretteGumArray[c]);
        $('.cigarette-solution').find('.patch-amount').text(cigarettePatchArray[c]);
        $('.cigarette-solution').find('.gum-amount').fadeIn();
        $('.cigarette-solution').find('.patch-amount').fadeIn();
	});
    
    $(function() {
	  	enable_ptsCheck();
	  	$('#smokeless').click(enable_ptsCheck);
	});
    
    var s = 0; // array counter for smokeless tab
    var smokelessRangeArray = [
		'1',
        '2-3',
		'More than 3'
	];
    var howMany_pts = 0;
    var howSoon_pts = 0;
    var total_points = 0;
	
	$('#smokeless').find('.btn-plus').click(function(){
		if (s === 2 ) {
			s = 0;
		} else {
			s = s+1;
		}
		$('.smokeless-amount').text(smokelessRangeArray[s]);
        if (s === 0) { howMany_pts = 0;}
        if (s === 1) { howMany_pts = 1;}
        if (s === 2) { howMany_pts = 2;}
	});
	$('#smokeless').find('.btn-minus').click(function(){
		if (s === 0 ) {
			s = 1;
		} else {
			s = s-1;
		}
        $('.smokeless-amount').text(smokelessRangeArray[s]);
		if (s === 0) { howMany_pts = 0;}
        if (s === 1) { howMany_pts = 1;}
        if (s === 2) { howMany_pts = 2;}
	});
    function enable_ptsCheck() {
		// Disable Gum or Lozenge if the other is selected
		if ($('#5min').prop('checked') === true) {
            howSoon_pts = 3;
        }
        if ($('#6-30min').prop('checked') === true) {
            howSoon_pts = 2;
        }
        if ($('#31-60min').prop('checked') === true) {
            howSoon_pts = 1;
        }
        if ($('#after-60').prop('checked') === true) {
            howSoon_pts = 0;
        }
        total_points = howMany_pts + howSoon_pts;
        if ((total_points === 0) || (total_points === 1) || (total_points === 2)) {
            $('.smokeless-solution').find('.gum-amount').fadeOut();
            $('.smokeless-solution').find('.patch-amount').fadeOut();
            $('.smokeless-solution').find('.gum-amount').text('2mg');
		    $('.smokeless-solution').find('.patch-amount').text('14mg');
            $('.smokeless-solution').find('.gum-amount').fadeIn();
            $('.smokeless-solution').find('.patch-amount').fadeIn();
        }
        if ((total_points === 3) || (total_points === 4)) {
            $('.smokeless-solution').find('.gum-amount').fadeOut();
            $('.smokeless-solution').find('.patch-amount').fadeOut();
            $('.smokeless-solution').find('.gum-amount').text('2mg');
		    $('.smokeless-solution').find('.patch-amount').text('21mg');
            $('.smokeless-solution').find('.gum-amount').fadeIn();
            $('.smokeless-solution').find('.patch-amount').fadeIn();
        }
        if (total_points === 5) {
            $('.smokeless-solution').find('.gum-amount').fadeOut();
            $('.smokeless-solution').find('.patch-amount').fadeOut();
            $('.smokeless-solution').find('.gum-amount').text('4mg');
		    $('.smokeless-solution').find('.patch-amount').text('21mg');
            $('.smokeless-solution').find('.gum-amount').fadeIn();
            $('.smokeless-solution').find('.patch-amount').fadeIn();
        }
    }
	
// FLIPCARDS	
	// tickerArray = Ticker Array
	var tickerArray = [1,2,3,4,5,6,7];
	// tickerTitleArray = Ticker Title Array
	var tickerTitleArray = [
		'NRT works.',
		'NRT helps with tough cravings.',
		'Combining NRT improves your chances of staying quit.',
		'It’s OK if you slip up.',
		'NRT is safe.',
		'NRT is available over the counter.',
		'NRT is designed to prevent addiction.'
	];
	// tickerContentArray = Ticker Content Array
	var tickerContentArray = [
		'NRT can double a smoker’s chances of quitting smoking for good.',
		'The worst withdrawal symptoms usually last only a few days to a couple of weeks. NRT can help make these symptoms less intense.',
		'NRT products can be used safely together. Try a long-acting patch with a short-acting lozenge or gum to fight off cravings.',
		'It is safe to continue using NRT even if you slip and smoke one or two cigarettes. Staying on NRT increases your chances of getting back on track for quitting.',
		'Research shows that NRT is safe and effective for almost all adults. Pregnant women, teens, and people with serious health issues should talk to their doctor before using NRT.',
		'NRT is so safe, it doesn’t require a doctor’s prescription.',
		'NRT delivers far less nicotine than cigarettes or smokeless tobacco products do, and much more slowly. This makes it less addictive. Most people find it easy to get off nicotine medicines after a few months.'
	];
	$('.flip-card-current').text(tickerArray[0]);
	$('.flip-card-title').text(tickerTitleArray[0]);
	$('.flip-card-content').text(tickerContentArray[0]);
	// card flip
	var j = 0;
	$('.btn-flip').click(function(){
        $('.card').toggleClass('flipped');
        if (j === 5 ) {
            $('.btn-flip').text('START OVER');
        } else {
            $('.btn-flip').text('NEXT FACT');
        }
        if (j === 6 ) {
			j = 0;
		} else {
			j = j+1;
		}
        setTimeout(
            function() { 
                  $('.card').removeClass('flipped');
                  $('.flip-card-current').text(tickerArray[j]);
		          $('.flip-card-title').text(tickerTitleArray[j]);
		          $('.flip-card-content').text(tickerContentArray[j]);
            }, 300);
	});
	

});