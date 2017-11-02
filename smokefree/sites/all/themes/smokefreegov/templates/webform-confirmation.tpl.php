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

<?php
define('TEST_QUIZ', 863);
define('TEST_QUIZ_2', 862);
define('NICOTINE_WITHDRAWAL_SYMPTOMS_QUIZ', 37);
define('NICOTINE_ADDICTION_QUIZ', 38);
define('DEPRESSION_QUIZ', 31);
define('DEPRESSION_QUIZ_2', 173);
define('SECOND_HAND_SMOKE_QUIZ', 34);
define('SAVINGS_CALCULATOR', 35);
define('SAVINGS_CALCULATOR_vet', 755);
define('WHY_I_USE_TOBACCO_QUIZ', 149);

/**
 * This function returns the correct answers to each question.
 */
  function secondhand_answers($question, $response) {
    // Set up a class for correct/incorrect answers.
    if($response == TRUE) {
      $class = 'correct';
      $alt = 'Correct Answer';
    }
    else {
      $class = 'incorrect';
      $alt = 'Incorrect Answer';
    }
    // Display answers based on the question being asked.
    switch($question) {
      case 'secondhand_smoke_is':
        return "<p>
				<ul>
					<li> a) Smoke that is breathed out by the smoker</li>
					<li>b) Pollution from smoke stacks and car exhaust</li>
					<li>c) Smoke that comes from the burning end of a cigarette</li>
					<li>d) a and c </li>
				</ul></p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. a and c.</strong> Second hand smoke is the combination of smoke from the burning end of a cigarette (sidestream smoke) and the smoke breathed out by the smoker (mainstream smoke). It contains more than 4,000 chemicals, including more than 60 known carcinogens, nicotine, and carbon monoxide.</p></div>";

        break;

      case 'secondhand_smoke_is_annoying_but_it_is_not_really_a_health_concern':
        return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul></p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>False.</strong> Secondhand smoke is the third leading preventable cause of disability and early death (after smoking and alcohol) in the United States. Secondhand smoke causes 3,000 lung cancer deaths and more than 50,000 coronary heart disease deaths each year in the United States.</p></div>";

        break;

      case 'secondhand_smoke_contains_more_than_4000_chemicals_including_some_that_cause_cancer_in_humans':
        return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul></p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>True.</strong> The Environmental Protection Agency (EPA) classifies secondhand smoke as a Group A carcinogen, a substance known to cause cancer in humans.</p></div>";

        break;

      case 'children_exposed_to_secondhand_smoke_are_more_likely_to_have_which_of_the_following_illnesses':
        return "<p>
				<ul>
					<li> a) Ear infections</li>
					<li>b) Severe and frequent asthma attacks</li>
					<li>c) Bronchitis and pneumonia</li>
					<li>d) All of the above </li>
				</ul></p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. All of the above.</strong> Children exposed to secondhand smoke are more likely to get bronchitis and pneumonia, frequent and severe asthma attacks, and ear infections. Secondhand smoke causes lung problems, including coughing, too much phlegm, wheezing, and breathlessness among school-aged kids.</p></div>";

        break;

      case 'which_one_of_the_following_is_not_another_name_for_secondhand_smoke':
        return "<p>
				<ul>
					<li>a) Exhaled toxic cloud</li>
					<li>b) Environmental tobacco smoke</li>
					<li>c) Passive smoke</li>
					<li>d) Involuntary smoking</li>
				</ul>
				</p>
        <div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>a. Exhaled toxic cloud.</strong> All the others (environmental tobacco smoke, passive smoke, and involuntary smoking) are other names for secondhand smoke.</p></div>";

        break;

      case 'which_of_the_following_chemicals_does_secondhand_smoke_contain':
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
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>	Correct answer: <strong>e. All of the above.</strong> Ammonia, arsenic, cyanide, and formaldehyde are found in secondhand smoke. These are just some of the harmful ingredients found in secondhand smoke.</p></div>";

        break;

      case 'ventilation_and_separate_non_smoking_sections_can_eliminate_secondhand_smoke_exposure':
        return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul>
				</p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>False.</strong> Ventilation and non-smoking sections do not protect people from the toxic chemicals in secondhand smoke. According to the 2006 US Surgeon General’s report, eliminating smoking in indoor spaces is the ONLY way to completely protect people from secondhand smoke.</p></div>";

        break;

      case 'a_healthy_non_smoker_must_be_exposed_to_secondhand_smoke_for_what_amount_of_time_before_experiencing_negative_health_effects':
        return "<p>
				<ul>
					<li> a) 5 minutes</li>
					<li>b) 30 minutes</li>
					<li>c) 3 hours</li>
					<li>d) 8 hours </li>
				</ul></p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>a. 5 minutes.</strong> Within 5 minutes of being exposed, the primary artery (aorta) for blood flow from the heart to the body stiffens as much as it does for a smoker who smokes one cigarette.</p></div>";

        break;

      case 'laws_that_limit_where_a_person_can_smoke_and_reduce_secondhand_smoke_exposure':
        return "<p>
				<ul>
					<li>a) Hurt only small businesses</li>
					<li>b) Hurt small, medium, and large businesses </li>
					<li>c) Hurt only medium and large businesses</li>
					<li>d) Improve profits for most businesses</li>
				</ul>
				</p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>d. Improve business profits for most businesses.</strong> Research shows that clean indoor air laws improve business profits for most businesses. And the laws help smokers quit!</p></div>";

        break;

      case 'research_has_shown_that_after_laws_were_passed_banning':
        return "<p>
					<ul>
						<li> a) Lung cancer rates</li>
						<li>b) Pneumonia requiring hospital admission</li>
						<li>c) Heart attacks</li>
						<li>d) Colds and flu in restaurant workers </li>
					</ul>
				</p>
				<div class='answer-image " . $class . "'> <img src='/" . path_to_theme() . "/images/content/spacer.png' alt='" . $alt . "' /></div>
				<div class='real-answer'><p>Correct answer: <strong>c. Heart attacks.</strong> Research shows after smoking bans were put into action the number of heart attacks declined in smokers and the risk of a heart attack decreased for non-smokers.</p></div>";

        break;
    }
  }

/**
 * This function contains code to check the answer for the secondhand quiz.
 *
 * It looks at the value the user submitted, compares it against the correct
 * answer, and returns either true or false.
 */
  function check_answer_secondhand($question_key, $response) {
      $answer_array = array(
        'secondhand_smoke_is' => 'd',
        'secondhand_smoke_is_annoying_but_it_is_not_really_a_health_concern' => 'f',
        'secondhand_smoke_contains_more_than_4000_chemicals_including_some_that_cause_cancer_in_humans' => 't',
        'children_exposed_to_secondhand_smoke_are_more_likely_to_have_which_of_the_following_illnesses' => 'd',
        'which_one_of_the_following_is_not_another_name_for_secondhand_smoke' => 'a',
        'which_of_the_following_chemicals_does_secondhand_smoke_contain' => 'e',
        'ventilation_and_separate_non_smoking_sections_can_eliminate_secondhand_smoke_exposure' => 'f',
        'a_healthy_non_smoker_must_be_exposed_to_secondhand_smoke_for_what_amount_of_time_before_experiencing_negative_health_effects' => 'a',
        'laws_that_limit_where_a_person_can_smoke_and_reduce_secondhand_smoke_exposure' => 'd',
        'research_has_shown_that_after_laws_were_passed_banning' => 'c',
      );
      if ($answer_array[$question_key] == $response) {
        return TRUE;
      } else {
        return FALSE;
      }
  }

/**
 * Calculates interest based on the number of years.
 */
  function calculate_interest($years, $price) {
    // Default interest.
    $interest = .06;
    $i = 1;
    $price = $price * 365;
    $amount = $price;
    while($i <= $years) {
      $add = $amount * $interest;
      if ($i > 1) {
        $amount += $price + $add;
      }
      $i++;
    }
    return $amount;
  }

/**
 * Convenience function to keep code legible -- returns the sum of three form values.
 */
  function reason_to_use_question_sum($submission_data, $q1, $q2, $q3) {
    return $submission_data[$q1][0] + $submission_data[$q2][0] + $submission_data[$q3][0];
  }

  // Include file required to get submission info.
  include_once drupal_get_path('module', 'webform') . '/includes/webform.submissions.inc';

  // Get the current submission data and put it in an array keyed by form_key
  // values.
  $submission = webform_get_submission($node->nid, $sid);
  $submission_by_form_key = array();
  foreach($submission->data as $cid => $data) {
    $submission_by_form_key[$node->webform['components'][$cid]['form_key']] = $data;
  }

  if($node->nid == NICOTINE_WITHDRAWAL_SYMPTOMS_QUIZ || $node->nid == NICOTINE_ADDICTION_QUIZ) {
    // Id of the current webform.
    $quiz = $node->nid;
    $score = 0;
    // Iterate through all the answers, running each answer through the
    // calculate score function and then adding the value to $score.
    foreach(array($submission->data) as $data) {
      foreach($data as $question) {
        $score += $question[0];
      }
    }
  }

    if($node->nid == NICOTINE_WITHDRAWAL_SYMPTOMS_QUIZ || $node->nid == NICOTINE_ADDICTION_QUIZ || $node->nid == TEST_QUIZ || $node->nid == TEST_QUIZ_2) {
        // Id of the current webform.
        $quiz = $node->nid;
        $score = 0;
        // Iterate through all the answers, running each answer through the
        // calculate score function and then adding the value to $score.
        foreach(array($submission->data) as $data) {
            foreach($data as $question) {
                $score += $question[0];
            }
        }
    }

  // The scoring for the depression quiz is wacky.  You can see how it works at
  // http://www.ids-qids.org/index2.html#table2.
  if($node->nid == DEPRESSION_QUIZ || $node->nid == DEPRESSION_QUIZ_2) {
    $sleep = 0;
    $weight = 0;
    $psychomotor = 0;
    $mdd = 0;
    $sleep_questions = array(
      'falling_asleep',
      'sleep_during_the_night',
      'waking_up_too_early',
      'sleeping_too_much',
    );
    $weight_questions = array(
      'appetite',
      'decreased_appetite',
      'increased_appetite',
      'weight',
      'decreased_weight_within_the_last_2_weeks',
      'increased_weight_within_the_last_2_weeks',
    );
    $psychomotor_questions = array(
      'feeling_restless',
      'feeling_slowed_down',
    );
    $mdd_questions = array(
      'feeling_sad',
      'concentration_decision_making',
      'view_of_myself',
      'thoughts_of_death_or_suicide',
      'general_interest',
      'energy_level',
    );
    foreach ($submission_by_form_key as $form_key => $data) {
      if (in_array($form_key, $sleep_questions)) {
        if (!empty($data[0]) && $data[0] > $sleep) {
          $sleep = $data[0];
        }
      }
      if (in_array($form_key, $weight_questions)) {
        if (!empty($data[0]) && $data[0] > $weight) {
          $weight = $data[0];
        }
      }
      if (in_array($form_key, $psychomotor_questions)) {
        if (!empty($data[0]) && $data[0] > $psychomotor) {
          $psychomotor = $data[0];
        }
      }
      if (in_array($form_key, $mdd_questions)) {
        if (!empty($data[0])) {
          $mdd += $data[0];
        }
      }
    }
    $depression_score = $sleep + $weight + $psychomotor + $mdd;
  }
?>


<div class="webform-confirmation">
    <!-- Test quiz markup -->
    <?php if($node->nid == TEST_QUIZ): ?>
        <div class="quiz-dip-outer">
            <div class="quiz-dip-header">
                <h2 class="quiz-dip-title">Quiz: <strong>Think you know dip?</strong></h2>
                <p class="quiz-dip-question-number">Your <span>Results</span></p>
            </div>
            <div class="quiz-dip-inner">
                <div class="quiz-dip-scoring-block">
                    <?php if($score <= 3): ?>
                        <div class="score score-low">
                            <h3>Not so great.</h3>
                            <p>Want to try again?</p>
                            <p><a href="/content/quiz-think-you-know-dip" class="btn-retry">Try again</a></p>
                        </div>
                    <?php endif; ?>
                    <?php if ($score > 3 && $score <= 6): ?>
                        <div class="score score-medium">
                            <h3>Not bad &mdash; but not amazing.</h3>
                            <p>Read more on the site and try again.</p>
                            <p><a href="/content/quiz-think-you-know-dip" class="btn-retry">Try again</a></p>
                        </div>
                    <?php endif; ?>
                    <?php if ($score > 6): ?>
                        <div class="score score-high">
                            <h3>Nice!</h3>
                            <p>You seem to know your stuff.</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div><!-- / .quiz-dip-inner  -->
        </div><!-- / .quiz-dip-outer  -->
    <?php endif; ?>
    <!--End of Test quiz 2 markup -->
    <!-- Test quiz 2 markup -->
    <?php if($node->nid == TEST_QUIZ_2): ?>
        <div class="quiz-dip-outer">
            <div class="quiz-dip-header">
                <h2 class="quiz-dip-title">Dip Quiz: <strong>Myths and Facts</strong></h2>
                <p class="quiz-dip-question-number">Your <span>Results</span></p>
            </div>
            <div class="quiz-dip-inner">
                <div class="quiz-dip-scoring-block">
                    <?php if($score <= 2): ?>
                        <div class="score score-low">
                            <h3>Come on! You can do better than that.</h3>
                            <p>Read up more and try again.</p>
                            <p><a href="/content/dip-quiz-myths-and-facts" class="btn-retry">Try again</a></p>
                        </div>
                    <?php endif; ?>
                    <?php if ($score == 3): ?>
                        <div class="score score-medium">
                            <h3>Not terrible, but you could have done better.</h3>
                            <p>Read up more and try again.</p>
                            <p><a href="/content/dip-quiz-myths-and-facts" class="btn-retry">Try again</a></p>
                        </div>
                    <?php endif; ?>
                    <?php if ($score > 3): ?>
                        <div class="score score-high">
                            <h3>You seem to know the facts.</h3>
                            <p>Does that mean you’re <a href="/quit-plan">ready to quit</a>?</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div><!-- / .quiz-dip-inner  -->
        </div><!-- / .quiz-dip-outer  -->
    <?php endif; ?>
    <!--End of Test quiz 2 markup -->

    <!-- Markup for Depression quiz -->
	<?php if($node->nid == DEPRESSION_QUIZ || $node->nid == DEPRESSION_QUIZ_2): ?>

		<div id="depression">
			<div class="score">
				<p><strong>Your score is: <?php print $depression_score; ?></strong></p>
			</div>
				<?php if ($depression_score <= 5): ?>
				<div class="depression-1">
					<p>
						<strong>This score shows you are likely not depressed.</strong>
					</p>
					<p>
						You aren't having any major symptoms of depression. If you’re feeling down, you may just be having a few bad days or mood changes if you recently stopped smoking. These feelings should go away in a few days.
            <br />
            If you are concerned about your feelings or are still feeling sad after 2 weeks, you might want to talk to someone about how you're feeling. <a href="/depression-and-smoking">Depression Basics</a> has more information.
					</p>
					<p>
             <strong>Smoking and Mood: They're Linked</strong>
          </p>
          <p>
						It's common for smokers to use cigarettes to deal with emotions. Find out why <a href="/4-Reasons-Not-to-Use-Cigarettes">you shouldn't rely on cigarettes to cope with your feelings</a> and get <a href="/cope-with-emotions-without-cigarettes">smokefree tips for coping with stress and emotions.</a> Then learn how to <a href="/ways-to-boost-your-mood-after-quitting">boost your mood after you've quit.</a>
					</p>
				</div>
				<?php endif; ?>
				<?php if ($depression_score > 5 && $depression_score <= 10): ?>
				<div class="depression-2">
					<p><strong>This score shows you might be mildly depressed.</strong></p>
          <p>You have a few symptoms of depression. Right now, these symptoms may not be changing your daily life, but you’re probably aware of them. You might start looking for ways to help your mood. </p>
          <p><strong>Manage Your Mood</strong></p>
					<p>You could try talking to friends, family, or your doctor. You also might keep track of your symptoms. You could write down how you are feeling or take this quiz every 1 or 2 days. If your score goes up, your mood worsens, or the symptoms are causing problems in your life, talk to your doctor and get help.
          <br />
          How you're feeling now isn’t how you'll always feel. People do get better. There are many good treatments for depression. <a href="/depression-and-smoking">Depression Basics</a> has more information.
					</p>
					<p><strong>Smoking and Mood: They're Linked</strong></p>
          <p>
            It's common for smokers to use cigarettes to deal with emotions. Find out why <a href="/4-Reasons-Not-to-Use-Cigarettes">you shouldn't rely on cigarettes to cope with your feelings</a> and get <a href="/cope-with-emotions-without-cigarettes">smokefree tips for coping with stress and emotions.</a> Then learn how to <a href="/ways-to-boost-your-mood-after-quitting">boost your mood after you've quit.</a>
          </p>
				</div>
				<?php endif; ?>
				<?php if ($depression_score > 10 && $depression_score <= 15): ?>
			   <div class="depression-3">
					<p><strong>This score shows you might be moderately depressed.</strong></p>
          <p>You have some symptoms of depression. Right now, these symptoms are likely causing problems in your daily life. These problems may be big, like making it hard for you to take care of everyday activities and enjoy the things you usually do. You should get help right away. </p>
          <p><strong>Find Help</strong></p>
					<p>When you're feeling depressed, it can be hard to have energy to make a phone call. But having support from others can be helpful. Try talking to your doctor or a therapist. They can help you get treatment to deal with depression. You can also try telling family and friends how you’re feeling.
          <br />
          How you’re feeling now isn't how you’ll always feel. People do get better. There are many good treatments for depression. <a href="/depression-and-smoking">Depression Basics</a> has more information.
          </p>
          <p><strong>Smoking and Mood: They're Linked</strong></p>
          <p>
            It's common for smokers to use cigarettes to deal with emotions. Find out why <a href="/4-Reasons-Not-to-Use-Cigarettes">you shouldn't rely on cigarettes to cope with your feelings</a> and get <a href="/cope-with-emotions-without-cigarettes">smokefree tips for coping with stress and emotions.</a> Then learn how to <a href="/ways-to-boost-your-mood-after-quitting">boost your mood after you've quit.</a>
          </p>

				</div>
			   <?php endif; ?>
			   <?php if ($depression_score > 15 && $depression_score <= 20): ?>
				<div class="depression-4">
					<p><strong>This score shows you might be severely depressed.</strong></p>
          <p>You have many symptoms of depression. Right now, the symptoms may be causing big problems in your daily life. It is probably very hard for you to take care of everyday activities and enjoy the things you usually do. You may even feel like you’re carrying a heavy weight that makes it almost impossible to get through your day.</p>
          <p><strong>Take This Seriously</strong></p>
					<p>Even if you don't feel weighed down by your symptoms, try to do something about them as soon as possible. When you're feeling depressed, it can be hard to even do small things to take care of yourself. But you should call your doctor or a mental health professional today. And try to tell family and friends how you’re feeling.
          <br />
          How you're feeling now isn't how you'll always feel. People do get better. There are many good treatments for depression. <a href="/depression-and-smoking">Depression Basics</a> has more information.
					</p>
          <p><strong>Smoking and Mood: They're Linked</strong></p>
          <p>
            It's common for smokers to use cigarettes to deal with emotions. Find out why <a href="/4-Reasons-Not-to-Use-Cigarettes">you shouldn't rely on cigarettes to cope with your feelings</a> and get <a href="/cope-with-emotions-without-cigarettes">smokefree tips for coping with stress and emotions.</a> Then learn how to <a href="/ways-to-boost-your-mood-after-quitting">boost your mood after you've quit.</a>
          </p>
				</div>
				<?php endif; ?>
				<?php if ($depression_score > 20): ?>
				<div class="depression-5">
					<p><strong>This score shows you might be very severely depressed.</strong></p>
          <p>You have very significant symptoms of depression. Right now, the symptoms may be causing you big problems in your daily life. It is probably very hard for you to take care of everyday activities and enjoy the things you usually do. You may even feel like you’re carrying a heavy weight that makes it almost impossible to get through your day.
					</p>
					<p><strong>Get Help Right Away</strong></p>
          <p>Even if you don't feel weighed down by your symptoms, it is important to do something about them right now. When you’re feeling depressed, it can be hard to even do small things to take care of yourself. But you should call your doctor or a mental health professional today. And try to tell family and friends how you’re feeling.
          <br />
          How you're feeling now isn't how you'll always feel. People do get better. There are many good treatments for depression. <a href="/depression-and-smoking">Depression Basics</a> has more information.
          </p>
          <p><strong>Smoking and Mood: They're Linked</strong></p>
          <p>
            It's common for smokers to use cigarettes to deal with emotions. Find out why <a href="/4-Reasons-Not-to-Use-Cigarettes">you shouldn't rely on cigarettes to cope with your feelings</a> and get <a href="/cope-with-emotions-without-cigarettes">smokefree tips for coping with stress and emotions.</a> Then learn how to <a href="/ways-to-boost-your-mood-after-quitting">boost your mood after you've quit.</a>
          </p>
				</div>
				<?php endif; ?>
				<p class="highlightBox">
					<em>This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis.</em>
					<br /><br />
          <strong class="red">Find Help 24/7</strong>
          <br />
					It is common for people who are feeling depressed to think about hurting themselves or dying.
					<strong class="red">If you or someone you know is having these feelings, get help now. </strong>
          <br /><br />
					<span class="red">
          Call a 24-hour crisis center at 1-800-273-TALK (8255) or 1-800-SUICIDE (1-800-784-2433) for free, private help or dial 911.
          </span>
					<br /><br />
					The <a href="http://www.samhsa.gov/" target="_blank">Substance Abuse and Mental Health
					Services Administration (SAMHSA)</a> - a part of the U.S. Department of Health and Human Services -
					runs both crisis centers. For more information:
					<a href="http://suicidepreventionlifeline.org/" target="_blank">National Suicide Prevention Lifeline</a> website.
					<br /><br />
					Para obtener asistencia en español durante las 24 horas, llame al <strong>1-888-628-9454</strong>.
				</p>
			</div>
	<!-- End of Depression quiz markup -->

	<!-- Medication/ Nicotine quiz markup -->
	<?php elseif($node->nid == NICOTINE_ADDICTION_QUIZ): ?>
		<div id="medication">
			<?php if($score <= 2): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Very Low Addiction, 0-2 points).</p>
				<p>Your body does not strongly depend on nicotine, so you might think about quitting without using medications. This is because most quit smoking medications are used to help manage nicotine withdrawal. People that aren’t strongly dependent on nicotine may not have many withdrawal symptoms when they stop. To learn more about withdrawal, visit our <a href="/withdrawal"> withdrawal</a> page.</p>
				<p>Even if you do not strongly depend on nicotine, you may still get strong urges to smoke. Smoking is an addiction and people smoke for physical, mental, and emotional reasons. You may be tempted to smoke when you’re bored, on the phone, under stress, visiting with other smokers, or in other everyday situations; knowing your <a href="cravings">smoking triggers</a> can help you prepare for these cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if ($score > 2 && $score <= 4): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Low Addiction, 3-4 points).</p>
				<p>You have a low dependence on nicotine, but should plan ahead to deal with <a href="/cravings">cravings</a> and feelings of nicotine withdrawal. You may want to consider using <a href="/explore-medications">quit smoking medications</a> along with other quit smoking strategies. To learn more about withdrawal, visit our <a href="/withdrawal">withdrawal</a> page.
				</p>
				<p>Smoking is an addiction and people smoke for physical, mental, and emotional reasons. You may be tempted to smoke when you’re bored, on the phone, feeling stressed, visiting with other smokers, or in other everyday situations; knowing your <a href="/cravings">smoking triggers</a> can help you be prepared for cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if ($score == 5): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Medium Addiction, 5 points).</p>
				<p>You are moderately dependent on nicotine. Consider using quit smoking medications to help you quit. Quit smoking medications can help ease symptoms of <a href="/withdrawal">withdrawal</a> and <a href="/cravings">cravings</a> while you work on your quit. Using quit smoking medications can also double your chances of quitting successfully. See our <a href="explore-medications">medication guide</a> to learn more about quit smoking medications.</p>
				<p>Even if you use medication, you may still have times when you have the urge to smoke. Make sure you are using other quit smoking strategies along with medications. The combination of the two can help you deal with withdrawal and cravings.</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if ($score > 5 && $score <= 7): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (High Addiction, 6-7 points)</p>
				<p>You are highly dependent on nicotine. Look into using quit-smoking medications to help you quit. These medications can ease <a href="/cravings">cravings</a> and double your chances of quitting for good. Most medications are available over the counter. See the <a href="/explore-medications">medication guide</a> to learn about them before you make a trip to the store.</p>
				<p>While medications can help you deal with cravings, it is common to still have times when you crave a cigarette. Smoking is an addiction and people smoke for physical, mental, and emotional reasons. Make sure you are using other quit smoking strategies along with medication. They can help you deal with <a href="/withdrawal">withdrawal</a> and cravings.
				</p>
				<p><a href="getting-support">Getting support</a> from your family, friends, or a quit smoking experts is also important to your success. If you need support right away, sign up for <a href="smokefreetxt-about">SmokefreeTXT</a> or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit.</p>
			<?php endif; ?>
			<?php if ($score > 7 && $score <= 10): ?>
				<p>Your total score is <strong><?php print $score; ?> points</strong> (Very High Addiction, 8-10 points)</p>
				<p>You have a very strong dependence on nicotine.  It is strongly encouraged that you talk to your doctor or pharmacist about using one or more stop-smoking medicines that might be right for you. Medicines help ease cravings while you work on changing behaviors. These medicines are proven to double your chances of quitting successfully. Different products are available to help cut your cravings. See the <a href="/explore-medications">medication guide</a> to learn more before you buy a product.
				</p>
				<p>
					While most people report that the medicines make it easier, it is common to still have times when you crave a cigarette and some other symptoms, so make sure you have other ways to manage <a href="/withdrawal">withdrawal</a> and craving. Getting support from your family, friends, other quitters, or a telephone quit line is important to your success too. To get ready for withdrawal symptoms and cravings, use the <a href="/steps-on-quit-day">quit guide</a> and other resources on this site. Or call 1-800-QUIT-NOW to talk with someone who is trained to help you quit. The person can also help you find a support group in your area.
				</p>
			<?php endif; ?>
		</div>
	<!--End of medication quiz markup -->

	<!-- Withdrawal quiz markup -->
	<?php elseif($node->nid == NICOTINE_WITHDRAWAL_SYMPTOMS_QUIZ): ?>
		<div id="withdrawal">
			<div><p><strong> Your Score: <?php print $score; ?> </p></strong></div>
			<?php if ($score <= 15): ?>
				<p><strong>Scores 0-15:</strong>  Scores in this range suggest that you have had little to no withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that your symptoms increase over the next couple of days. If you have quit for more than 3 days, you may be moving out of the active withdrawal phase and will keep improving. </p>
				<p>Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens unexpectedly. See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if ($score > 15 && $score <= 30): ?>
				<p><strong>Score 16-30:</strong>  Scores in this range suggest that you have had mild withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that your symptoms increase over the next couple of days. If you have quit for more than 3 days, you may be moving out of the active withdrawal phase and will keep improving.</p>
				<p>Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if ($score > 30 && $score <= 45): ?>
				<p><strong>Score 31-45:</strong>  Scores in this range suggest that you have had moderate withdrawal symptoms in the last day. If you have only quit smoking in the last 1 or 2 days, you may find that you have more symptoms over the next 3 days. Remember that most withdrawal symptoms get much better in 1 or 2 weeks.</p>
				<p>This level of symptoms may be causing you difficulties, and you are probably feeling uncomfortable. If the symptoms are making it hard for you, remember that help is available! You can call a quitline and talk to someone trained to help people like you who are quitting smoking (1-800-QuitNow or 1-800-44U-QUIT). The service is free and has helped many people. Also, if you haven’t already done so, you may want to think about taking <a href="/explore-medications">medication</a> such as nicotine replacement therapy (NRT). NRT has been shown to reduce withdrawal symptoms.</p>
				<p>Again, most of the symptoms will go away! You will feel better. Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.</p>
			<?php endif; ?>
			<?php if ($score > 45 && $score <= 60): ?>
				<p><strong>Score 46-60:</strong>  Scores in this range suggest that you have had severe withdrawal symptoms during the last day. No matter how bad the symptoms, they will decrease over time. Remember that most withdrawal symptoms get much better in 1 or 2 weeks.</p>
				<p>This level of symptoms is likely causing you difficulties and you are probably feeling quite uncomfortable. Remember that help is available! You can call a quitline and talk to a trained smoking cessation counselor (1-800-QuitNow or 1-800-44U-QUIT). The service is free and has helped many people quit. Also if you haven’t already done so, you may want to think about taking <a href="/explore-medications">medication</a> such as nicotine replacement therapy (NRT). NRT has been shown to reduce withdrawal symptoms (Insert link to medication page).
				</p>
				<p>
					Again, most of your symptoms will go away! You will feel better. Cravings can stick around for quite a while. Be sure to have a plan for how you will deal with a craving, especially if it happens without notice.  See the <a href="/cravings">cravings page</a> for ideas to help you.
				</p>
			<?php endif; ?>
		</div>
	<!-- End of withdrawal quiz markup -->

	<!-- Secondhand quiz markup -->
	<?php
    elseif($node->nid == SECOND_HAND_SMOKE_QUIZ) : {
      print '<div id="secondhand">';
      // Start the counter at 1 since there is no zero value.
      foreach ($submission_by_form_key as $form_key => $data) {
        $current_answer = check_answer_secondhand($form_key, $data[0]);
        print '<div class="question-div"><strong>';
        // Print the question.
        $name = '';
        foreach ($node->webform['components'] as $component) {
          if ($component['form_key'] == $form_key) {
            $name = $component['name'];
          }
        }
        print $name;
        print '</strong></div>';
        print '<div class="answers"><div class="correct-answer">';
        print secondhand_answers($form_key, $current_answer);
        print '</div></div>';
      }
      print '</div>';
    }
  ?>
	<!--End of Secondhand quiz markup -->

	<!-- Stress Quiz Markup -->
	<?php elseif($node->title == 'Stress Quiz'): ?>
	<?php
    $impact = 0;
    // Score the test
    foreach (array($submission->data) as $data){
      foreach ($data as $question) {
        $impact += $question[0];
      }
    }
    ?>
		<div id="stress">
			<p><strong>Your score is: <?php print $impact; ?></strong></p>
			<?php
				//determine which result to display
				if ($impact <= 4) {
					echo "<h2>This score shows your stress levels are low.</h2>
					<p>There may be some things that occasionally upset you or are difficult to deal with, but overall you are handling your stress.</p>
					<p>Everybody’s stressors are different. Certain events—even happy ones—can trigger stress. If you’re concerned about stress in your life, you might want to talk to a friend or family member about how you’re feeling.</p>";
				} elseif ($impact <= 10) {
					echo "<h2>This score shows your stress levels are moderate.</h2>
					<p>The stress you’re having probably isn’t overwhelming, but it might be causing problems in your daily life. These problems may be making you feel down, anxious, or nervous.</p>
					<p>If you’re concerned about stress in your life, you might want to talk to a friend or family member about how you’re feeling.</p>
					<h2>Manage Your Stress</h2>
					<p>There may be some things that occasionally upset you or are difficult to deal with, but overall you are handling your stress. </p>
					<p>It’s important to find healthy ways to reduce stress and take care of yourself without smoking. There are many smokefree ways to relax your mind and body to help you <a href='/challenges-when-quitting/stress-mood/coping-emotions-without-smoking'>cope with stress</a>.</p>";
				} else {
					echo "<h2>This score shows your stress levels are high.</h2>
					<p>You’ve got a lot going on right now. Whether the problems and stressors are at home, at work, or in your social circle, you’re probably feeling overwhelmed.</p>
					<p>Everybody’s stressors are different. Certain events—even happy ones—can trigger stress. If you’re concerned about stress in your life, you might want to talk to a friend or family member about how you’re feeling.</p>
					<h2>Take Stress Seriously</strong></h2>
					<p>Stress can affect your body, your thoughts, and your feelings. Long-term stress can lead to health problems. Understanding the causes of your stress <a href='/challenges-when-quitting/stress-mood/causes-stress'>causes of your stress</a> is an important first step in dealing with it. If you’re feeling high levels of stress, try talking to a friend, family member, or your doctor. And find ways to <a href='/challenges-when-quitting/stress-mood/coping-emotions-without-smoking'>reduce stress</a> and take care of yourself without smoking.</p>";
				}
			?>
			<h2>Smoking and Stress: They’re Linked</h2>
			<p>Many people who feel stressed turn to smoking to make them feel better. Understanding the relationship between <a href="/challenges-when-quitting/stress-mood/stress-smoking">smoking and stress</a> can help you deal with stress and become or stay smokefree.</p>
		</div>
	<!-- End of Stress quiz markup -->


  <?php elseif($node->title == 'Yale Text Program') : ?>
      <p>Congrats! You have successfully signed up for SmokefreeTXT! *</p>
      <p>You will receive a welcome message on your mobile phone in a few minutes. If you do not receive this message, your mobile carrier may not support Smokefree text messaging programs. Please visit our Frequently Asked Questions for additional information and the list of supported carriers.</p>
      <p>What to expect:</p>
      <li>Text messages to help you quit smoking. Messages will begin right away and last for 6 weeks after your quit date.</li>
      <li>Extra help at any time you need it. Text one of these keywords anytime to receive a special message: CRAVE, MOOD, SLIP</li>
      <li>This is an automated service. You may not receive a reply to a message sent without a keyword.</li>
      <li>At any time you may text STOP to opt-out or HELP for technical support. </li>

	<!-- Savings Calulator  markup -->
	<?php elseif($node->nid == SAVINGS_CALCULATOR || $node->nid == SAVINGS_CALCULATOR_vet): ?>
    <?php
      // Get the current submission data.
      $cost = $submission_by_form_key['how_much_do_you_pay_per_pack'][0];
      $cigarettes = $submission_by_form_key['how_many_cigarettes_do_you_smoke_per_day'][0];

      // Just in case something goes wrong, use the default value.
      if($cost <= 0) {
        $cost = 6.28;
      }
      $perday = $cigarettes / 20;
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
					<td>$<?php print number_format(round($cost * 1, 2), 2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 Week </th>
					<td>$<?php print number_format(round($cost * 7, 2), 2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 Month</th>
					<td>$<?php print number_format(round($cost * 30, 2), 2); ?></td>
				</tr>
				<tr>
					<th scope="row">1 year</th>
					<td>$<?php print number_format(round($cost * 365, 2), 2); ?></td>
				</tr>
				<tr>
					<th scope="row">10 Years*</th>
					<td>$<?php print number_format(round(calculate_interest(10, $cost), 2), 2); ?></td>
				</tr>
				<tr>
					<th scope="row">20 Years*</th>
					<td>$<?php print number_format(round(calculate_interest(20, $cost), 2), 2); ?></td>
				</tr>
			</table>
			<div>
				<p>* Based on price of cigarettes increasing 6% annually.</p>
			</div>
		</div>
	<!-- End of savings calculator markup -->

	<!-- Why I use Tobacco Quiz markup -->
	<?php elseif($node->nid == WHY_I_USE_TOBACCO_QUIZ): ?>
    <?php
    $stimulation_total = 0;
    $handling_total = 0;
    $pleasure_total = 0;
    $relaxation_total = 0;
    $nicotine_total = 0;
    $habit_total = 0;

    $stimulation_questions = array(
      'i_use_tobacco_to_keep_from_slowing_down',
      'i_use_tobacco_to_perk_myself_up',
      'i_use_tobacco_to_give_myself_a_lift',
    );
    $handling_questions = array(
      'handling_tobacco_is_part_of_the_enjoyment_of_using_it',
      'part_of_the_enjoyment_of_tobacco_comes_from_the_steps_i_take_to_use_it',
      'part_of_the_enjoyment_is_in_watching_the_smoke_i_exhale_or_looking_at_my_spit_can',
    );
    $pleasure_questions = array(
      'using_tobacco_is_pleasant_and_relaxing',
      'i_find_tobacco_pleasurable',
      'i_want_tobacco_most_when_i_am_comfortable_and_relaxed',
    );
    $relaxation_questions = array(
      'i_use_tobacco_when_im_upset_about_something',
      'when_i_feel_uncomfortable_about_something_i_use_tobacco',
      'when_i_feel_sad_or_want_to_take_my_mind_off_my_worries_i_use_tobacco',
    );
    $nicotine_questions = array(
      'when_i_run_out_of_tobacco_i_find_it_almost_unbearable',
      'i_am_very_much_aware_of_the_fact_when_i_am_not_using_tobacco',
      'i_get_a_real_craving_for_tobacco_when_i_havent_used_any_for_a_while',
    );
    $habit_questions = array(
      'i_use_tobacco_automatically_without_even_being_aware_of_it',
      'i_start_to_use_tobacco_without_realizing_i_am_already_using_it',
      'ive_found_myself_using_tobacco_and_i_didnt_even_remember_doing_it',
    );
    for ($i = 0; $i < 3; $i++) {
      if (!empty($submission_by_form_key[$stimulation_questions[$i]][0])) {
        $stimulation_total += $submission_by_form_key[$stimulation_questions[$i]][0];
      }
      if (!empty($submission_by_form_key[$handling_questions[$i]][0])) {
        $handling_total += $submission_by_form_key[$handling_questions[$i]][0];
      }
      if (!empty($submission_by_form_key[$pleasure_questions[$i]][0])) {
        $pleasure_total += $submission_by_form_key[$pleasure_questions[$i]][0];
      }
      if (!empty($submission_by_form_key[$relaxation_questions[$i]][0])) {
        $relaxation_total += $submission_by_form_key[$relaxation_questions[$i]][0];
      }
      if (!empty($submission_by_form_key[$nicotine_questions[$i]][0])) {
        $nicotine_total += $submission_by_form_key[$nicotine_questions[$i]][0];
      }
      if (!empty($submission_by_form_key[$habit_questions[$i]][0])) {
        $habit_total += $submission_by_form_key[$habit_questions[$i]][0];
      }
    }
      // Variables below hold TRUE or FALSE if section should, or shouldn't be
      // displayed.
      // Reason_to_use_question_sum sums the value of the three question indexes
      // provided (convenience function).
      // No = 1, yes = 2.
      // We want TRUE if 2 or 3 yes, or when sum >= 5 (TTF answers would sum to 5).
      $stimulation = $stimulation_total >= 5 ? TRUE : FALSE;
      $handling = $handling_total >= 5 ? TRUE : FALSE;
      $pleasure = $pleasure_total >= 5 ? TRUE : FALSE;
      $relaxation = $relaxation_total >= 5 ? TRUE : FALSE;
      $nicotine = $nicotine_total >= 5 ? TRUE : FALSE;
      $habit = $habit_total >= 5 ? TRUE : FALSE;
    ?>
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

  <!-- No header/footer confirmation page markup for forms used in iframes on other sites -->
  <?php elseif($node->title == 'SmokefreeTXT-Teen' || $node->title == 'SmokefreeTXT-Women' || $node->title == 'HealthyYouTXT - Physical Activity Program' || $node->title == 'HealthyYouTXT - Diet Program'): ?>
    <div id="SmokefreeTXT" class="node-webform rm-header-footer">
      <h2>Congratulations!</h2>
      <p>Thanks for signing up. You should receive a welcome message on your smartphone in the next few minutes. This will confirm you have successfully enrolled. Please visit <a href="/smokefree-text-messaging-programs">smokefree.gov/smokefree-text-messaging-programs</a> for additional information.<p>
    </div>

  <?php else: ?>
    <?php print $progressbar; ?>

    <div class="webform-confirmation">
      <?php if ($confirmation_message): ?>
        <?php print $confirmation_message ?>
      <?php else: ?>
        <p><?php print t('Thank you, your submission has been received.'); ?></p>
      <?php endif; ?>
    </div>

    <div class="links">
      <a href="<?php print $url; ?>"><?php print t('Go back to the form') ?></a>
    </div>

  <?php endif; ?>
	<!-- End Why I use Tobacco Quiz markup-->



</div>
