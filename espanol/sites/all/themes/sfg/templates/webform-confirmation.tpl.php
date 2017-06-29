<?php

/**
 * @file
 * Customize confirmation screen after successful submission.
 *
 * This file may be renamed "webform-confirmation-[nid].tpl.php" to target a
 * specific webform e-mail on your site. Or you can leave it
 * "webform-confirmation.tpl.php" to affect all webform confirmations on your
 * site.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $confirmation_message: The confirmation message input by the webform author.
 * - $sid: The unique submission ID of this submission.
 */
?>
 <?php //print_r($submission); ?>
<?php

	//this function returns the choices for a given quiz number
	function get_choices($counter){
		if($counter >0){
			$choices = $node->webform['components'][$counter]['extra']['items'];
		}
		return $choices;
	}
	//This function returns the correct answers to each question
	function secondhand_answers($counter, $response){
		//set up a class for correct/incorrect answers
		if($response ==true) {
			$class= 'correct';
			$alt = 'Correct Answer';
		}
		else {
			$class = 'incorrect';
			$alt = 'Incorrect Answer';
		}
		//display answers based on the question being asked
		switch($counter){
			case 1:
				return "<p>
				<ul>
					<li> a) Smoke that is breathed out by the smoker</li>
					<li>b) Pollution from smoke stacks and car exhaust</li>
					<li>c) Smoke that comes from the burning end of a cigarette</li>
					<li>d) a and c </li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. a and c.</strong> Second hand smoke is the combination of smoke from the burning end of a cigarette (sidestream smoke) and the smoke breathed out by the smoker (mainstream smoke). It contains more than 4,000 chemicals, including more than 60 known carcinogens, nicotine, and carbon monoxide.</p></div>";
			break;

			case 2:
				return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>False.</strong> Secondhand smoke is the third leading preventable cause of disability and early death (after smoking and alcohol) in the United States. Secondhand smoke causes 3,000 lung cancer deaths and more than 50,000 coronary heart disease deaths each year in the United States.</p></div>";
			break;

			case 3:
				return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>True.</strong> The Environmental Protection Agency (EPA) classifies secondhand smoke as a Group A carcinogen, a substance known to cause cancer in humans.</p></div>";
			break;

			case 4:
				return "<p>
				<ul>
					<li> a) Ear infections</li>
					<li>b) Severe and frequent asthma attacks</li>
					<li>c) Bronchitis and pneumonia</li>
					<li>d) All of the above </li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. All of the above.</strong> Children exposed to secondhand smoke are more likely to get bronchitis and pneumonia, frequent and severe asthma attacks, and ear infections. Secondhand smoke causes lung problems, including coughing, too much phlegm, wheezing, and breathlessness among school-aged kids.</p></div>";
			break;

			case 5:
				return "<p>
				<ul>
					<li>a) Exhaled toxic cloud</li>
					<li>b) Environmental tobacco smoke</li>
					<li>c) Passive smoke</li>
					<li>d) Involuntary smoking</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>a. Exhaled toxic cloud.</strong> All the others (environmental tobacco smoke, passive smoke, and involuntary smoking) are other names for secondhand smoke.</p></div>";
			break;

			case 6:
				return "<p>
				<ul>
					<li> a) Ammonia</li>
					<li>b) Arsenic</li>
					<li>c) Cyanide</li>
					<li>d) Formaldehyde</li>
					<li>e) All of the above</li>
					<li>f) None of the above </li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>	Correct answer: <strong>e. All of the above.</strong> Ammonia, arsenic, cyanide, and formaldehyde are found in secondhand smoke. These are just some of the harmful ingredients found in secondhand smoke.</p></div>";
			break;

			case 7:
				return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>False.</strong> Ventilation and non-smoking sections do not protect people from the toxic chemicals in secondhand smoke. According to the 2006 US Surgeon General’s report, eliminating smoking in indoor spaces is the ONLY way to completely protect people from secondhand smoke.</p></div>";
			break;

			case 8:
				return "<p>
				<ul>
					<li> a) 5 minutes</li>
					<li>b) 30 minutes</li>
					<li>c) 3 hours</li>
					<li>d) 8 hours </li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>a. 5 minutes.</strong> Within 5 minutes of being exposed, the primary artery (aorta) for blood flow from the heart to the body stiffens as much as it does for a smoker who smokes one cigarette.</p></div>";
			break;

			case 9:
				return "<p>
				<ul>
					<li>a) Hurt only small businesses</li>
					<li>b) Hurt small, medium, and large businesses </li>
					<li>c) Hurt only medium and large businesses</li>
					<li>d) Improve profits for most businesses</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. Improve business profits for most businesses.</strong> Research shows that clean indoor air laws improve business profits for most businesses. And the laws help smokers quit!</p></div>";
			break;

			case 10:
				return "<p>
					<ul>
						<li> a) Lung cancer rates</li>
						<li>b) Pneumonia requiring hospital admission</li>
						<li>c) Heart attacks</li>
						<li>d) Colds and flu in restaurant workers </li>
					</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Correct answer: <strong>c. Heart attacks.</strong> Research shows after smoking bans were put into action the number of heart attacks declined in smokers and the risk of a heart attack decreased for non-smokers.</p></div>";
			break;
		}
	}

	//this function contains code to check the answer for the secondhand quiz.  It looks at the value the user submitted, compares it against the correct answer, and returns either true or false.
	function check_answer_secondhand($counter, $submission){
		if($counter){
			switch($counter){
				case 1:
					if(strtolower($submission->data[$counter]['value'][0])=='d'){
						return true;
					}
					else
						return false;
				break;

				case 2:
					if(strtolower($submission->data[$counter]['value'][0])=='f'){
							return true;
					}
					else
						return false;
				break;

				case 3:
					if(strtolower($submission->data[$counter]['value'][0])=='t'){
							return true;
					}
					else
						return false;
				break;

				case 4:
					if(strtolower($submission->data[$counter]['value'][0])=='d'){
							return true;
					}
					else
						return false;
				break;

				case 5:
					if(strtolower($submission->data[$counter]['value'][0])=='a'){
							return true;
					}
					else
						return false;
				break;

				case 6:
					if(strtolower($submission->data[$counter]['value'][0])=='e'){
							return true;
					}
					else
						return false;
				break;

				case 7:
					if(strtolower($submission->data[$counter]['value'][0])=='f'){
							return true;
					}
					else
						return false;
				break;

				case 8:
					if(strtolower($submission->data[$counter]['value'][0])=='a'){
							return true;
					}
					else
						return false;
				break;

				case 9:
					if(strtolower($submission->data[$counter]['value'][0])=='d'){
							return true;
					}
					else
						return false;
				break;

				case 10:
					if(strtolower($submission->data[$counter]['value'][0])=='c'){
							return true;
					}
					else
						return false;
				break;

				default:
					return false;
				break;
			}
		}
	}

	//calculates interest based on the number of years
	function calculate_interest($years, $price){
		$interest = .06; //default interest
		$i = 1;
		$amount = 0;
		$price = $price * 365;
		$amount = $price;
		while($i <= $years){
			$add = $amount * $interest;
			if ($i>1)
			$amount += $price + $add;
			$i++;
		}
		return $amount;
	}

	//convenience function to keep code legible -- returns the sum of three form values
	function reason_to_use_question_sum($submissionData, $q1, $q2, $q3) {
		return $submissionData[$q1]['value'][0] + $submissionData[$q2]['value'][0] + $submissionData[$q3]['value'][0];
	}
?>
<?php  include_once drupal_get_path('module','webform') . '/includes/webform.submissions.inc';  //include file required to get submission info ?>
<?php $submission = webform_get_submission($node->nid, $sid); //get the current submission data ?>
<?php
	if($node->nid == 37 || $node->nid == 38):
		$quiz = $node->nid; //id of the current webform
		$score = 0;
		//iterate through all the answers, running each answer through the calculate score function and then adding the value to $score
		foreach(array($submission->data) as $data) {
			foreach($data as $question){
				$score += $question['value'][0];
			}
		}

	endif;
//print_r($submission);
 ?>
 <?php
 //The scoring for the depression quiz is wacky.  You can see how it works at http://www.ids-qids.org/index2.html#table2
	if($node->nid==31 || $node->nid == 173) :
		$sleep = 0;
		$weight = 0;
		$psychomotor = 0;
		$mdd = 0;
		$i = 1;
		$j = 0;
		//count the number of events
		foreach(array($submission->data) as $data){
			$count = count($data);
			if($j == 0){
				foreach($data as $question){

					if($i >=1 && $i < 5) {
						if ($question['value'][0] > $sleep) {
							$sleep = $question['value'][0];
						}
					}
					elseif($i >= 6 && $i < 10) {
						if($question['value'][0] > $weight) {
							$weight = $question['value'][0];
						}
					}
					elseif( $i ==($count-1) || $i == $count) {
						if($question['value'][0] > $psychomotor) {
							$psychomotor = $question['value'][0];
						}
					}
					else {
						$mdd += $question['value'][0];
					}
					$i++;
				}
			$j++;
			}
		}
		$depression_score = $sleep + $weight + $psychomotor + $mdd;
	endif;
?>
<div class="webform-confirmation">
	<!-- Markup for Depression quiz -->
	<?php if($node->nid ==31 || $node->nid == 173): ?>	

		<div id="depression">
			<div class="score">
				<p><strong>Your score is: <?php print $depression_score; ?></strong></p>
			</div>
				<?php if ($depression_score <=5): ?>
				<div class="depression-1">
					<p>
						<strong>Score 0-5:  Severity of Depression: None.</strong>
					</p>
					<p>
						This score shows that you are not having any major symptoms of
						depression. If you are feeling down or blue, it may be from having
						a bad couple of days or having mood changes from stopping smoking.
						These feelings should go away in a few days. But if you are
						concerned, or if these symptoms last more than 2 weeks, it makes
						sense for you to share how you are feeling with others.
					</p>
					<p>
						Learn more in the <a href="/depression-and-smoking">Depression Basics section</a>.
					</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >5 && $depression_score <= 10): ?>
				<div class="depression-2">
					<p><strong>Score 6-10: Severity of Depression: Mild.</strong>  This score shows that you are having some symptoms of depression. Right now the symptoms may not be changing your daily life, but they are there, and you are probably aware of them. It is a good idea to start finding ways to help your mood. You should try talking to friends, family, and your doctor.</p>
					<p>You also may want to keep track of how you are feeling and your symptoms. You can do this by writing down how you are feeling or taking this test every 1 or 2 days. If your depression score goes up, if your mood is getting worse, or if these symptoms are causing problems in your life, talk to your doctor and get help to reduce the symptoms.
					</p>
					<p>How you are feeling now is NOT how you will always feel. People do get better. There are many good treatments for depression.  Learn more in the <a href="/depression-and-smoking">Depression Basics section</a>.</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >10 && $depression_score <= 15): ?>
			   <div class="depression-3">
					<p><strong>Score 11-15: Severity of Depression: Moderate.</strong>  This score shows that you are having important symptoms of depression. Don’t let the word "moderate" fool you. Right now the symptoms are probably causing problems in your daily life, maybe even big problems, and making it hard for you to take care of your everyday jobs and enjoy things. You should get help right away. Try talking to your doctor and finding a therapist.</p>
					<p>Also try telling your friends and family how you are feeling. Having support from others can be helpful in finding ways to deal with depression. When you are feeling depressed, it can be hard to get up the energy to even make a call to the doctor. Talking to others is a great way to get help in finding treatment and get support in this difficult time.</p>
					<p>How you are feeling now is NOT how you will always feel. People do get better. There are many good treatments for depression.  Learn more in the <a href="/depression-and-smoking">Depression Basics section</a>.
					</p>
				</div>
			   <?php endif; ?>
			   <?php if($depression_score >15 && $depression_score <=20): ?>
				<div class="depression-4">
					<p><strong>Score 16-20: Severity of Depression: Severe.</strong>  This score shows that you are having very high symptoms of depression; take this seriously. Right now the symptoms may be causing you big problems in your daily life. It is probably very hard for you to take care of everyday jobs and enjoy things. You may even be feeling like you are carrying a heavy weight that makes it almost impossible to get through your day. Even if you don’t feel weighed down by your symptoms, it is important to do something about them as soon as possible.</p>
					<p>At this level of depression, get help right away. When you are feeling depressed, it can be hard to get up the energy to do even small things to take care of yourself. Call your doctor or a mental health professional today. Tell your friends and family how you are feeling.</p>
					<p>How you are feeling now is NOT how you will always feel. People do get better. There are many good treatments for depression.  Learn more in the <a href="/depression-and-smoking">Depression Basics section</a>.
					</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >20): ?>
				<div class="depression-5">
					<p><strong>Score 21-27: Severity of Depression: Very Severe.</strong>  This score shows that you are having very high symptoms of depression; take this seriously. Right now the symptoms may be causing you big problems in your daily life. It is probably very hard for you to take care of everyday jobs and enjoy things. You may even be feeling like you are carrying a heavy weight that makes it almost impossible to get through your day. Even if you don’t feel weighed down by your symptoms, it is important to do something about them as soon as possible.</p>
					<p>At this level of depression, get help right away. When you are feeling depressed, it can be hard to get up the energy to do even small things to take care of yourself. Call your doctor or a mental health professional today. Tell your friends and family how you are feeling.
					</p>
					<p>
						How you are feeling now is NOT how you will always feel. People do get better. There are many good treatments for depression.  Learn more in the <a href="/depression-and-smoking">Depression Basics section</a>.
					</p>
				</div>
				<?php endif; ?>
				<p class="highlightBox">
					<em>NOTE: This information is not meant to tell you if you have major depression. It cannot take the place of seeing a mental health professional.</em>
					<br /><br />
					It is common for people who are feeling bad to think  about hurting themselves or dying.
					<strong class="red">If you or  someone you know is having these feelings, they are in crisis.</strong>
					Get  help now. <span class="red">Call 1-800-273-TALK (8255) or 1-800-SUICIDE (1-800-784-2433)</span>
					to reach a 24-hour  crisis center or <span class="red">dial 911</span>.
					<br /><br />
					Both 1-800 numbers are open all the time to give free, private help to people in crisis.
					The <a href="http://www.samhsa.gov/" target="_blank">Substance Abuse and Mental Health
					Services Administration (SAMHSA)</a>, a part of the U.S. Department of Health and Human Services,
					runs both crisis centers. For more information:
					<a href="http://suicidepreventionlifeline.org/" target="_blank">http://www.suicidepreventionlifeline.org/</a>.
					<br /><br />
					Para obtener asistencia en español durante las 24 horas, llame al <strong>1-888-628-9454</strong>.
				</p>
			</div>
	<!-- End of Depression quiz markup -->
    <?php endif; ?>

	<!-- Medication/ Nicotine quiz markup -->
	<?php if($node->nid == 38): ?>
		<div id="medication">
			<?php if($score <=2): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Very Low Addiction, 0-2 points).</p>
				<p>Your body does not strongly depend on nicotine, so you might think about quitting without using medications. This is because most quit smoking medications are used to help manage nicotine withdrawal. People that aren’t strongly dependent on nicotine may not have many withdrawal symptoms when they stop. To learn more about withdrawal, visit our <a href="/withdrawal"> withdrawal</a> page.</p>
				<p>Even if you do not strongly depend on nicotine, you may still get strong urges to smoke. Smoking is an addiction and people smoke for physical, mental, and emotional reasons. You may be tempted to smoke when you’re bored, on the phone, under stress, visiting with other smokers, or in other everyday situations; knowing your <a href="cravings">smoking triggers</a> can help you prepare for these cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if($score >2 && $score <=4): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Low Addiction, 3-4 points).</p>
				<p>You have a low dependence on nicotine, but should plan ahead to deal with <a href="/cravings">cravings</a> and feelings of nicotine withdrawal. You may want to consider using <a href="/explore-medications">quit smoking medications</a> along with other quit smoking strategies. To learn more about withdrawal, visit our <a href="/withdrawal">withdrawal</a> page.
				</p>
				<p>Smoking is an addiction and people smoke for physical, mental, and emotional reasons. You may be tempted to smoke when you’re bored, on the phone, feeling stressed, visiting with other smokers, or in other everyday situations; knowing your <a href="/cravings">smoking triggers</a> can help you be prepared for cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if($score == 5): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Medium Addiction, 5 points).</p>
				<p>You are moderately dependent on nicotine. Consider using quit smoking medications to help you quit. Quit smoking medications can help ease symptoms of <a href="/withdrawal">withdrawal</a> and <a href="/cravings">cravings</a> while you work on your quit. Using quit smoking medications can also double your chances of quitting successfully. See our <a href="explore-medications">medication guide</a> to learn more about quit smoking medications.</p>
				<p>Even if you use medication, you may still have times when you have the urge to smoke. Make sure you are using other quit smoking strategies along with medications. The combination of the two can help you deal with withdrawal and cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if($score>5 && $score <=7): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (High Addiction, 6-7 points)</p>
				<p>You are highly dependent on nicotine. Look into using quit-smoking medications to help you quit. These medications can ease <a href="/cravings">cravings</a> and double your chances of quitting for good. Most medications are available over the counter. See the <a href="/explore-medications">medication guide</a> to learn about them before you make a trip to the store.</p>
				<p>While medications can help you deal with cravings, it is common to still have times when you crave a cigarette. Smoking is an addiction and people smoke for physical, mental, and emotional reasons. Make sure you are using other quit smoking strategies along with medication. They can help you deal with <a href="/withdrawal">withdrawal</a> and cravings.
				</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if($score >7 && $score <=10): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Very High Addiction, 8-10 points)</p>
				<p>You have a very strong dependence on nicotine.  It is strongly encouraged that you talk to your doctor or pharmacist about using one or more stop-smoking medicines that might be right for you. Medicines help ease cravings while you work on changing behaviors. These medicines are proven to double your chances of quitting successfully. Different products are available to help cut your cravings. See the <a href="/explore-medications">medication guide</a> to learn more before you buy a product.
				</p>
				<p>
					While most people report that the medicines make it easier, it is common to still have times when you crave a cigarette and some other symptoms, so make sure you have other ways to manage <a href="/withdrawal">withdrawal</a> and craving. Getting support from your family, friends, other quitters, or a telephone quit line is important to your success too. To get ready for withdrawal symptoms and cravings, use the <a href="/steps-on-quit-day">quit guide</a> and other resources on this site. Or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit. The person can also help you find a support group in your area.
				</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<!--End of medication quiz markup -->

	<!-- Withdrawal quiz markup -->
	<?php if($node->nid==37): ?>
		<div id="withdrawal">
			<div><p><strong> Your Score: <?php print $score; ?> </p></strong></div>
			<?php if($score<=15): ?>
				<p><strong>Scores 0-15:</strong>  Scores in this range suggest that you have had little to no withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that your symptoms increase over the next couple of days. If you have quit for more than 3 days, you may be moving out of the active withdrawal phase and will keep improving. </p>
				<p>Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens unexpectedly. See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if($score >15 && $score <=30): ?>
				<p><strong>Score 16-30:</strong>  Scores in this range suggest that you have had mild withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that your symptoms increase over the next couple of days. If you have quit for more than 3 days, you may be moving out of the active withdrawal phase and will keep improving.</p>
				<p>Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if($score >30 && $score <=45): ?>
				<p><strong>Score 31-45:</strong>  Scores in this range suggest that you have had moderate withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that you have more symptoms over the next 3 days. Remember that most withdrawal symptoms get much better in 1 or 2 weeks.</p>
				<p>This level of symptoms may be causing you difficulties, and you are probably feeling uncomfortable. If the symptoms are making it hard for you, remember that help is available! You can call a quitline and talk to someone trained to help people like you who are quitting smoking (1-800-QuitNow or 1-800-44U-QUIT). The service is free and has helped many people. Also, if you haven’t already done so, you may want to think about taking <a href="/explore-medications">medication</a> such as nicotine replacement therapy (NRT). NRT has been shown to reduce withdrawal symptoms.</p>
				<p>Again, most of the symptoms will go away! You will feel better. Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if($score >45 && $score <=60): ?>
				<p><strong>Score 46-60:</strong>  Scores in this range suggest that you have had severe withdrawal symptoms during the last day. No matter how bad the symptoms, they will decrease over time. Remember that most withdrawal symptoms get much better in 1 or 2 weeks.</p>
				<p>This level of symptoms is likely causing you difficulties and you are probably feeling quite uncomfortable. Remember that help is available! You can call a quitline and talk to a trained smoking cessation counselor (1-800-QuitNow or 1-800-44U-QUIT). The service is free and has helped many people quit. Also if you haven’t already done so, you may want to think about taking <a href="/explore-medications">medication</a> such as nicotine replacement therapy (NRT). NRT has been shown to reduce withdrawal symptoms (Insert link to medication page).
				</p>
				<p>
					Again, most of your symptoms will go away! You will feel better. Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.
				</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<!-- End of withdrawal quiz markup -->

	<!-- Secondhand quiz markup -->
	<?php if($node->nid == 34): ?>
		<div id="secondhand">
		<?php $i=1;  //Start the counter at 1 since there is no zero value ?>
			<?php foreach($node as $question){ ?>
				<?php if($node->webform['components'][$i]['name']): ?>
					<?php $current_answer = check_answer_secondhand($i, $submission); ?>
					<div class="question-div">
						<strong><?php print $node->webform['components'][$i]['name']; //print the question ?></strong>
					</div>
					<div class="answers">
						<div class="correct-answer">
								<?php print secondhand_answers($i, $current_answer); ?>
						</div>
					</div>
				<?php endif; ?>
		<?php
			$i++;
		}?>
		</div>
	<?php endif; ?>
	<!--End of Secondhand quiz markup -->
	<!-- Stress Quiz Markup -->
	<?php if($node->nid ==36): ?>
	<?php
		$event = 0;
		$impact = 0;
		$i = 1;
		//count the number of events
		foreach(array($submission->data) as $data){
			foreach($data as $question){
				if($i ==1 || $i ==2) {
					$event += count($question['value']);
				}
				else {
					$impact += $question['value'][0];
				}
				$i++;
			}
		}
	?>
		<div id="stress">
			<p>Which of these common pressures do you have? Remember that a few small hassles add up and can be as stressful as a big event.
			</p>
			<p><strong>Your total number of stressful events is: <?php print $event; ?></strong></p>
			<p><strong>Your impact score is: <?php print $impact; ?></strong></p>
			<p>Scores can range from 0 (no impact) to 12 (severe impact). </p>
			<p>Use this information to help figure how much stress you are under and what areas of your life are the most stressful. You can also use this quiz to help in making a plan to improve your stress. The higher the number of life events and level of interference, being bothered or time the stressors have been happening, the more likely it is that stress is a problem you should find ways to address. </p>
			<p>You may want to take this quiz again every week to track how things are changing. You can also share this with close friends or family or a counselor as part of working on reducing your stress. </p>
		</div>
	<?php endif; ?>
	<!-- End of Stress quiz markup -->
	<!-- Savings Calulator  markup -->
	<?php if($node->nid == 35):
		$submission = webform_get_submission($node->nid, $sid); //get the current submission data
		$cost = $submission->data[2]['value'][0];
		$cigarettes = $submission->data[3]['value'][0];

		if($cost <=0) {
			$cost = 5.31; //just in case something goes wrong, use the default value
		}
		$perday = $cigarettes/20;
		$cost = $cost * $perday;
	?>
		<div id="savings-calculator">
			<div>
				<p>Smoking cigarettes is expensive. Use our calculator to find out how much of your money is going up in smoke.</p>
			</div>
			<table id="savings-table" summary ="This table contains data on how much money is saved by quitting cigarettes.">
				<tr>
					<th scope="col">After...</th>
					<th scope="col">You'll Save</th>
				</tr>
				<tr>
					<th scope="row">1 Day</th>
					<td>$<?php print number_format(round($cost * 1,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 Week </th>
					<td>$<?php print number_format(round($cost * 7,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 Month</th>
					<td>$<?php print number_format(round($cost *30,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 year</th>
					<td>$<?php print number_format(round($cost * 365,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">10 Years*</th>
					<td>$<?php print number_format(round(calculate_interest(10,$cost),2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">20 Years*</th>
					<td>$<?php print number_format(round(calculate_interest(20,$cost),2),2); ?></td>
				</tr>
			</table>
			<div>
				<p>* Based on price of cigarettes increasing 6% annually.</p>
			</div>
		</div>
	<?php endif; ?>
	<!-- End of savings calculator markup -->
	<!-- Why I use Tobacco Quiz markup -->
	<?php if($node->nid == 146 || $node->nid == 149): // 146 dev - 149 production
		$s_data = webform_get_submission($node->nid, $sid)->data; //get the current submission data
		//variables below hold TRUE or FALSE if section should, or shouldn't be displayed
		//reason_to_use_question_sum sums the value of the three question indexes provided (convenience function)
		//	no = 1, yes = 2
		//	we want TRUE if 2 or 3 yes, or when sum >= 5 (TTF answers would sum to 5)
		$stimulation = reason_to_use_question_sum($s_data, 1, 7, 3) >= 5 ? TRUE : FALSE;
		$handling = reason_to_use_question_sum($s_data, 2, 8, 4) >= 5 ? TRUE : FALSE;
		$pleasure = reason_to_use_question_sum($s_data, 3, 9, 5) >= 5 ? TRUE : FALSE;
		$relaxation = reason_to_use_question_sum($s_data, 4, 10, 6) >= 5 ? TRUE : FALSE;
		$nicotine = reason_to_use_question_sum($s_data, 5, 11, 7) >= 5 ? TRUE : FALSE;
		$habit = reason_to_use_question_sum($s_data, 6, 12, 8) >= 5 ? TRUE : FALSE;
	?>
		<h1 class="page-header">Why I Use Tobacco Quiz</h1>
		<h3>General Trigger Tips</h3>

		<p>Smoking triggers are "high risk" situations or cues that bring on the urge to smoke.  There are three types and most people have at least one of each type.</p>

		<ul>
			<li><strong>External Situation Triggers</strong>, like being around others who smoke, watching TV, or drinking alcohol or coffee. You may smoke “automatically” in these situations, even though you don’t even really feel like having a cigarette.</li>
			<li><strong>Internal Emotional Triggers</strong>, like feeling depressed, stressed out, or bored. You may smoke as a way of calming down when you’re stressed out or picking yourself up when you’re feeling down.</li>
			<li><strong>Internal Nicotine Craving Triggers</strong>, such as craving the taste of a cigarette or having withdrawal symptoms like restlessness, after not having smoked in a while. Sometimes you may smoke because your body craves nicotine and you respond by telling yourself that you really "need" a cigarette.</li>
		</ul>

		<p>Knowing your triggers is the first step to learning how to deal with them without smoking.</p>
		<?php if ($stimulation || $handling || $pleasure || $relaxation || $nicotine || $habit): ?>
			<p>Based on your answers, you use tobacco for one or more of the following reasons: </p>
			<ul>
				<?php if ($stimulation): ?><li>Stimulation</li><?php endif;?>
				<?php if ($handling): ?><li>Handling</li><?php endif;?>
				<?php if ($pleasure): ?><li>Pleasure</li><?php endif;?>
				<?php if ($relaxation): ?><li>Relaxation</li><?php endif;?>
				<?php if ($nicotine): ?><li>Nicotine</li><?php endif;?>
				<?php if ($habit): ?><li>Habit</li><?php endif;?>
			</ul>
		<?php endif;?>
		<div id="why-i-use">
			<?php if($stimulation):?>
				<h3>Stimulation Tips</h3>
				<p>You may use tobacco like caffeine: to wake up, get moving, or to keep going when you feel worn out. You may think that tobacco helps you get organized and keeps you on your toes during the day. <strong>Nicotine is a stimulant drug!</strong> Here are other ways to get energy. </p>
				<ul>
					<li>Get enough rest and sleep to begin with.</li>
					<li>Get regular exercise.</li>
					<li>When you feel tired, do things around the house to keep busy.</li>
					<li>Keep your mind active. Plan your day ahead of time.</li>
					<li>Think of other things right away when you get a craving.</li>
					<li>Eat regular, healthy meals and snacks for energy.</li>
					<li>Rinse your mouth with mouthwash or brush your teeth to perk up your mouth.</li>
					<li>Drink cold water.</li>
					<li>Use sugar-free hard candy. Cinnamon flavor is good.</li>
				</ul>
			<?php endif;?>
			<?php if($handling):?>
				<h3>Handling Tips</h3>
				<p>You like handling the tobacco, lighters, and matches needed. It just “feels right” to have a cigarette, cigar, or pipe in your hands or mouth. These tips may help keep your hands busy.</p>
				<ul>
					<li>Take up a hobby or sport that keeps your hands busy, such as building models, carpentry, painting, or making bread. Do chores that you have put off.</li>
					<li>Play with a coin, a polished rock, a paper clip, or twist your ring to keep your hands busy.</li>
					<li>Do a crossword or 500 piece puzzle.</li>
					<li>Clean your fingernails.</li>
					<li>Wear a rubber band around your wrist and snap it when you think of using tobacco.</li>
					<li>Eat regular meals to avoid being hungry. Use healthy snacks that are low-fat and sugar-free like carrot sticks, apple slices, or sunflower seeds in the shell</li>
				</ul>
			<?php endif;?>
			<?php if($pleasure):?>
				<h3>Pleasure Tips</h3>
				<p>You enjoy using tobacco and feel better after you use it. This strengthens your habit. <strong>Nicotine IS a drug of pleasure and works on the pleasure center of the brain!</strong> Here are healthier ways to enjoy yourself. </p>
				<ul>
					<li>Remind yourself of all the benefits of quitting: better health for you and your family, easier to breathe, more energy, more money in your pocket, you smell better.</li>
					<li>Keep a list of the pleasures of being tobacco-free in your pocket/purse where you used to keep your tobacco.</li>
					<li>Treat yourself to a different pleasure: a night out or shopping. Save the money that you would have spent on cigarettes for a special vacation.</li>
					<li>Spend time with your friends or faith community, go to the movies, or work on a favorite hobby.</li>
					<li>Enjoy the pleasure of your success in quitting tobacco.</li>
				</ul>
			<?php endif;?>
			<?php if($relaxation):?>
				<h3>Relaxation/Stress Tips</h3>
				<p>You may use tobacco as a crutch to cope with stress. You may find it easy to quit when things are good, but tough when things go wrong. Follow these tips to help cope with problems that create stress and tension.</p>
				<ul>
					<li>Think of the word <strong>HALT</strong>: <strong>H</strong>ungry? <strong>A</strong>ngry? <strong>L</strong>onely? <strong>T</strong>ired? Think of what you really need and treat those issues first.</li>
					<li>When you are upset, talk to a friend, take a walk, or listen to your favorite music.</li>
					<li>Do relaxation exercises like deep breathing, imagine a peaceful place, take a long hot shower,  or get a massage. Take time each day for yourself to relax, no matter how busy you are.</li>
					<li>Avoid stressful situations to begin with, if possible.</li>
					<li>Get enough rest and you will feel less stress.</li>
				</ul>
			<?php endif;?>
			<?php if($nicotine):?>
				<h3>Need for Nicotine Tips</h3>
				<p>Your craving for more tobacco begins to build the moment you stop using it. You feel uncomfortable when the level of nicotine drops in your blood. You may feel irritable, anxious, or restless. Here are ways to help with nicotine withdrawal.</p>
				<ul>
					<li>Use nicotine patches, gum, or lozenges as instructed.</li>
					<li>Learn to recognize when nicotine “talks to you.” Don’t fall for “just one won’t hurt.”</li>
					<li>Stay away from things that are known to cause urges: keeping tobacco around, hanging out with smokers, letting people smoke in your house or car.</li>
					<li>Don’t buy tobacco for others. Ask other smokers at your house to smoke outside and keep tobacco out of sight.</li>
					<li>Change your routine: get up from the table after a meal, drink tea in the living room instead of coffee in the kitchen, or listen to a book-on-tape in the car.</li>
					<li>Tell people firmly, “<strong>I QUIT!</strong>”</li>
				</ul>
			<?php endif;?>
			<?php if($habit):?>
				<h3>Habit Tips</h3>
				<p>Using tobacco may have become automatic. You might not even like it any more or miss it very much when you stop. Here are ways to break the habit.</p>
				<ul>
					<li>Change your tobacco routines. Keep it in a different place. Don’t do any other activity while using it. Limit use to some place that is inconvenient such as outside or a certain room.</li>
					<li>When you want to use tobacco, wait for five minutes. Do something else first. Ask yourself, “Is this what I really need right now?”</li>
					<li>Cutting down gradually may make it easier to stop completely. Change to a brand of tobacco that you don’t like. Then set a Quit Date and stick to it.</li>
					<li>Tell family and friends. Ask for their help in smoking outside and not offering you any tobacco.</li>
					<li>Have the inside of your car and house thoroughly cleaned. Enjoy the fresh smell!</li>
				</ul>
			<?php endif;?>
		</div>
	<?php endif; ?>
	<!-- End Why I use Tobacco Quiz markup-->
</div>
