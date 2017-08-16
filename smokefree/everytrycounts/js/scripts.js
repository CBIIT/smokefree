// JavaScript Document
$(document).ready(function () {
	"use strict";
	// try something new programs appear/disappear
	$('#programChallengeButton').click(function() {
		$('#programChallenge').slideToggle(200);
		$('#programChallenge').find('.titleArea').delay(400).toggleClass('active');
	});
	$('#programChallengeClose').click(function() {
		$('#programChallenge').find('.titleArea').toggleClass('active');
		$('#programChallenge').slideToggle(200);
	});
	$('#programPracticeButton').click(function() {
		$('#programPractice').slideToggle(200);
		$('#programPractice').find('.titleArea').delay(400).toggleClass('active');
	});
	$('#programPracticeClose').click(function() {
		$('#programPractice').find('.titleArea').toggleClass('active');
		$('#programPractice').slideToggle();
	});
	$('#programQuitButton').click(function() {
		$('#programQuit').slideToggle(200);
		$('#programQuit').find('.titleArea').delay(400).toggleClass('active');
	});
	$('#programQuitClose').click(function() {
		$('#programQuit').find('.titleArea').toggleClass('active');
		$('#programQuit').slideToggle();
	});
	// Stop tip carousel from auto scrolling
	$('.carousel').carousel({
    	interval: false
	});
	// set the tip text
	var tipArray = [
		'Use deep breathing to fight cravings and stressful situations. Try 10 slow, deep breaths.',
		'Keep your hands busy when a craving hits. Play with a coin, straw, or rubber band.',
		'Distract yourself. Clean out your car, desk, or junk drawer until the craving passes.',
		'Talk through it. Call or text a friend when you’re stressed out or sad.',
		'Use exercise to get in a better mood. Physical activity is a natural mood booster.'
	];
	$('.tipContent').text(tipArray[0]);
	// change tip ticker up and down and the tip text underneath the carousel
	$('.carousel-control.right').click(function() {
    	$('#tipCurrent').html(function(i, val) { 
			if (val === '5') { 
				val = 1;
				$('.tipContent').text(tipArray[0]);
				return val;
			} else {
				val = parseInt(val);
				$('.tipContent').text(tipArray[val]);
				val = val+1;
				return val;
			}
		});
	});
	$('.carousel-control.left').click(function() {
    	$('#tipCurrent').html(function(i, val) { 
			if (val === '1') { 
				val = 5;
				$('.tipContent').text(tipArray[4]);
				return val;
			} else {
				val = parseInt(val);
				val = val-2;
				$('.tipContent').text(tipArray[val]);
				val = val+1;
				return val;
			}
		});
	});
	// ctickerArray = Challenge ticker Array
	var ctickerArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	// ctArray = Challenge Title Array
	var ctArray = [
		'Delay a Cigarette',
		'Have Smokefree Coffee',
		'Take a Smokefree Ride',
		'Choose Water',
		'Delay a Cigarette',
		'Conquer a Triggers',
		'Be Social',
		'Delay Each Cigarette',
		'Do the Math',
		'Distract Yourself',
		'Skip the Smoke',
		'Resist 3 Cravings',
		'Set Goals',
		'Find Your Reasons',
		'Skip the 1st Smoke',
		'Overcome Obstacles',
		'Skip the Smoke',
		'Resist 2 Cravings',
		'Reflect on Goals',
		'Find the Negatives'
	];
	// ccArray = Challenge Content Array
	var ccArray = [
		'Delay your 1st cigarette by 1.5 hours today. Make a plan for that time and stick to it. If you already smoked today, delay the next cigarette for 1.5 hours.',
		'Try having your morning coffee without a cigarette.',
		'The next time you drive to and from work have a smokefree ride.',
		'Drink water the next time a craving hits instead of smoking a cigarette.',
		'Choose one cigarette that you normally smoke and delay it for 2 hours. The craving may come and go, so practice different distractions to get through it.',
		'What is one trigger that is particularly hard for you? Visualize yourself overcoming it to stay smoke free.',
		'Think of social situations where you missed out by smoking. Tell yourself "it can wait" when you get an urge today around other people.',
		'Try to delay each cigarette today by at least 2 minutes. While you&#8217;re waiting, drink some water, take 10 deep breaths.',
		'Calculate how much money you spend per week on cigarettes. Think of what else you could do with that money if you quit!',
		'Pick one cigarette today and resist the craving for a full hour. Find something else to do, like playing a game, calling a friend, or taking a walk.',
		'Do something else instead of having that post-meal cigarette. Try doing the dishes, brushing your teeth, or chewing some gum.',
		'Try to resist 3 cigarette cravings today for 10 minutes each. Play a game or have a healthy snack. Cravings usually last only 5 to 10 minutes.',
		'What&#8217;s really important in your life? Does smoking help you reach your goals? Think about this when you have cravings today.',
		'Make a list of reasons you want to quit smoking someday. Put it somewhere you see it often, like your mirror or where you keep your cigarettes.',
		'Delay your 1st cigarette by an hour today. Make a plan for that hour and stick to it. If you already smoked today, delay the next smoke for an hour.',
		'What is the main thing that prevents you from completely quitting smoking? Visualize yourself overcoming this obstacle.',
		'Instead of smoking after you eat, try taking a 10 minute walk instead, or brushing your teeth after a meal.',
		'Try to resist 2 cigarette cravings today for 10 minutes each. Go for a walk or call someone. Cravings usually last only 5 to 10 minutes.',
		'When you think about your life goals, how does smoking help or not help you get there? Reflect on this idea today whenever you have a craving.',
		'Make a list of what you dislike about smoking and post it somewhere you can see it often, such as your bathroom mirror or refrigerator.'
	];
	$('.challengeCurrent').text(ctickerArray[0]);
	$('.challengeTitle h3').text(ctArray[0]);
	$('.challengeContent').text(ccArray[0]);
	// challenge card flip
	var j = 0;
	$('.btn-challenge').click(function(){
		$('.card').toggleClass('flipped');
		if (j === 19 ) {
			j = 0;
		} else {
			j = j+1;
		}
		$('.challengeCurrent').text(ctickerArray[j]);
		$('.challengeTitle h3').text(ctArray[j]);
		$('.challengeContent').text(ccArray[j]);
	});
});