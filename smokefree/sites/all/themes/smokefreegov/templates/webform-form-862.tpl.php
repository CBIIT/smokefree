<?php

/**
 * @file
 * Customize the display of a complete webform.
 *
 * This file may be renamed "webform-form-[nid].tpl.php" to target a specific
 * webform on your site. Or you can leave it "webform-form.tpl.php" to affect
 * all webforms on your site.
 *
 * Available variables:
 * - $form: The complete form array.
 * - $nid: The node ID of the Webform.
 *
 * The $form array contains two main pieces:
 * - $form['submitted']: The main content of the user-created form.
 * - $form['details']: Internal information stored by Webform.
 *
 * If a preview is enabled, these keys will be available on the preview page:
 * - $form['preview_message']: The preview message renderable.
 * - $form['preview']: A renderable representing the entire submission preview.
 */
?>

<?php
  drupal_add_css('https://fonts.googleapis.com/css?family=Kanit:300,600,700,800', 'external');
  define('TEST_QUIZ', 863);
  define('TEST_QUIZ_2', 862);
?>

<?php
  // Print out the progress bar at the top of the page
  print drupal_render($form['progressbar']);
?>

<?php
  // TEST_QUIZ custom header
  if($nid == TEST_QUIZ):
?>
    <div class="quiz-dip-outer">
      <div class="quiz-dip-header">
        <h2 class="quiz-dip-title">Quiz: <strong>Think you know dip?</strong></h2>
        <p class="quiz-dip-question-number">Question <span><?php echo $form['details']['page_num']['#value']; ?></span> of <span><?php echo $form['details']['page_count']['#value']; ?></span></p>
      </div>
    <div class="quiz-dip-inner">

<?php
  endif;
?>

<?php
  // TEST_QUIZ custom header
  if($nid == TEST_QUIZ_2):
?>
    <div class="quiz-dip-outer">
      <div class="quiz-dip-header">
        <h2 class="quiz-dip-title">Dip Quiz: <strong>Myths and Facts</strong></h2>
        <p class="quiz-dip-question-number">Question <span><?php echo $form['details']['page_num']['#value']; ?></span> of <span><?php echo $form['details']['page_count']['#value']; ?></span></p>
      </div>
    <div class="quiz-dip-inner">

<?php
  endif;
?>

<?php
  // Print out the preview message if on the preview page.
  if (isset($form['preview_message'])) {
    print '<div class="messages warning">';
    print drupal_render($form['preview_message']);
    print '</div>';
  }

  // Print out the main part of the form.
  // Feel free to break this up and move the pieces within the array.
  print drupal_render($form['submitted']);
?>

<?php
  // TEST_QUIZ custom feedback
  if($nid == TEST_QUIZ):
?>
  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-1">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-1"><p class="feedback-relative">Nope &mdash; not even close.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-2"><p class="feedback-relative">Nope &mdash; not even close.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-3"><p class="feedback-relative">Not quite.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-4"><p class="feedback-relative">Yep &mdash; that&rsquo;s right.</p></div>
    <div class="quiz-dip-feedback question-1-summary"><p>Dip companies really, really, really want you to buy dip. In 2013, they spent over $503 million on ads that appeared in magazines and websites and promotions at sporting events, like auto races and rodeos. So... did all those ads work on you?</p>
    <p class="quiz-dip-source">Source: <a href="https://www.tobaccofreekids.org/research/factsheets/pdf/0231.pdf" target="_blank">Campaign for Tobacco-Free Kids</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-2">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-1"><p class="feedback-relative">Nope &mdash; it&rsquo;s actually all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-2"><p class="feedback-relative">Nope &mdash; it&rsquo;s actually all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-3"><p class="feedback-relative">Nope &mdash; it&rsquo;s actually all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-4"><p class="feedback-relative">Yep &mdash; you got it.</p></div>
    <div class="quiz-dip-feedback question-2-summary"><p>Boston, Los Angeles, and New York &mdash; along with Chicago and San Francisco &mdash; have all banned dip and other tobacco products in baseball stadiums. And more cities are planning to do the same.</p>
    <p class="quiz-dip-source">Source: <a href="http://tobaccofreebaseball.org/content/wp-content/uploads/2016/07/2016_07_06_ExecSummary.pdf" target="_blank">TobaccoFreeBaseball.org</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-3">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-1"><p class="feedback-relative">Nuh-uh &mdash; you&rsquo;re way off. Dip actually has 3,000 chemicals in it &mdash; or more.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-2"><p class="feedback-relative">Nope. Actually, dip has 3,000 chemicals in it &mdash; or more.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-3"><p class="feedback-relative">That&rsquo;s right. Dip has 3,000 chemicals in it &mdash; or more.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-4"><p class="feedback-relative">Nope. Actually, dip has 3,000 chemicals in it &mdash; or more.</p></div>
    <div class="quiz-dip-feedback question-3-summary"><p>And at least 30 of those chemicals are known to cause cancer &mdash; fun stuff like formaldehyde, arsenic, and cadmium.</p>
    <p class="quiz-dip-source">Sources: <a href="http://www.cancer.org/cancer/cancercauses/tobaccocancer/smokeless-tobacco" target="_blank">American Cancer Society</a>, <a href="http://www.killthecan.org/your-quit/ask-the-experts-faq/whats-so-bad-about-smokeless-tobacco-its-not-as-bad-as-smoking-right/" target="_blank">KillTheCan.org</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-4">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-1"><p class="feedback-relative">Nope &mdash; that&rsquo;s not even a real thing.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-2"><p class="feedback-relative">Bingo.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-3"><p class="feedback-relative">Nope.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-4"><p class="feedback-relative">Nope &mdash; and that&rsquo;s not even a real thing.</p></div>
    <div class="quiz-dip-feedback question-4-summary">
      <p>It&rsquo;s nicotine, the same addictive chemical that&rsquo;s in cigarettes and other tobacco products.</p>
    </div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-5">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-1"><p class="feedback-relative">You got it.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-2"><p class="feedback-relative">Nope &mdash; it&rsquo;s only 5 to 10 minutes.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-3"><p class="feedback-relative">Nope &mdash; it&rsquo;s only 5 to 10 minutes.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-4"><p class="feedback-relative">No, no, no! It&rsquo;s only 5 to 10 minutes.</p></div>
    <div class="quiz-dip-feedback question-5-summary"><p>When you&rsquo;re trying to quit, cravings can come on strong. But they don&rsquo;t last. Watch 3 videos on YouTube and boom, the craving is over.</p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-6">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-1"><p class="feedback-relative">That&rsquo;s partly right &mdash; but the best answer is all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-2"><p class="feedback-relative">Sort of &mdash; but the best answer is all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-3"><p class="feedback-relative">Not quite &mdash; the correct answer is all of the above.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-4"><p class="feedback-relative">That&rsquo;s right.</p></div>
    <div class="quiz-dip-feedback question-6-summary"><p>Using dip can cause all of these amazing things. Not to mention even worse problems, like cancer.</p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-7">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-7-1"><p class="feedback-relative">Nuh-uh. The right answer is gigantic cigarette companies.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-7-2"><p class="feedback-relative">Nope &mdash; it&rsquo;s gigantic cigarette companies.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-7-3"><p class="feedback-relative">Nuh-uh. The right answer is gigantic cigarette companies.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-7-4"><p class="feedback-relative">You got it.</p></div>
    <div class="quiz-dip-feedback question-7-summary"><p>As people were smoking less and less, cigarette companies started buying up dip manufacturers. And they started spending a lot more money on ads for dip too.</p>
    <p class="quiz-dip-source">Source: <a href="https://www.tobaccofreekids.org/research/factsheets/pdf/0003.pdf" target="_blank">Campaign for Tobacco-Free Kids</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-8">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-8-1"><p class="feedback-relative">Nope &mdash; it&rsquo;s actually worse.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-8-2"><p class="feedback-relative">You&rsquo;re right &mdash; it&rsquo;s false.</p></div>
    <div class="quiz-dip-feedback question-8-summary"><p>Tobacco kills more people than AIDS, alcohol, car accidents, murders, suicides, drugs, and fires combined. That&rsquo;s a lot of people.</p></div>
  </div>
<?php endif; ?>

<?php
  // TEST_QUIZ_2 custom feedback
  if($nid == TEST_QUIZ_2):
?>
  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-1">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-1"><p class="feedback-relative">Yup &mdash; it&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-1-2"><p class="feedback-relative">Nuh-uh &mdash; that&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback question-1-summary"><p>Sorry, but dip won&rsquo;t help you run faster, or throw farther, or lift more. This bogus myth has been around for a long time, and scientists have actually studied it. They found exactly zero evidence that using dip makes athletes perform better.</p>
    <p class="quiz-dip-source">Sources: <a href="http://www.cdc.gov/media/releases/2015/p0903-athlete-tobacco.html" target="_blank">Centers for Disease Control and Prevention</a>, <a href="http://www.nidcr.nih.gov/oralhealth/Topics/SmokelessTobacco/SmokelessTobaccoAGuideforQuitting.htm" target="_blank">National Institutes of Health</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-2">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-1"><p class="feedback-relative">Nope &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-2-2"><p class="feedback-relative">Right &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback question-2-summary"><p>Put an average-sized dip in your mouth for half an hour, and you&rsquo;ll get as much nicotine as if you smoked 3 cigarettes. Remember &mdash; nicotine is the stuff in tobacco that gets you addicted.</p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-3">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-1"><p class="feedback-relative">Yup &mdash; it&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-3-2"><p class="feedback-relative">Nope &mdash; that&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback question-3-summary"><p>It might seem like everyone&rsquo;s using dip, but they&rsquo;re not. In fact, 9 out of 10 guys in high school <strong>don&rsquo;t</strong> use dip. It&rsquo;s less common than you think.</p>
    <p class="quiz-dip-source">Source: <a href="http://www.cdc.gov/tobacco/data_statistics/fact_sheets/smokeless/use_us/index.htm" target="_blank">Centers for Disease Control and Prevention</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-4">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-1"><p class="feedback-relative">Nope &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-4-2"><p class="feedback-relative">Yup &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback question-4-summary"><p>If you&rsquo;re already smoking, don&rsquo;t start dipping too. There&rsquo;s no evidence that switching will help you quit smoking cigarettes. All tobacco is harmful, and you could wind up addicted to both.</p>
    <p class="quiz-dip-source">Sources: <a href="http://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/smokeless-fact-sheet" target="_blank">National Cancer Institute</a>, <a href="http://www.cancer.org/cancer/cancercauses/tobaccocancer/smokeless-tobacco" target="_blank">American Cancer Society</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-5">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-1"><p class="feedback-relative">Right &mdash; it&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-5-2"><p class="feedback-relative">Nuh-uh &mdash; that&rsquo;s a myth.</p></div>
    <div class="quiz-dip-feedback question-5-summary"><p>Nothing can really undo the damage that dip does to your mouth, teeth, and gums &mdash; besides quitting. All the brushing and flossing and dental check-ups in the world won&rsquo;t be enough.</p>
    <p class="quiz-dip-source">Source: <a href="http://www.nidcr.nih.gov/oralhealth/Topics/SmokelessTobacco/SmokelessTobaccoAGuideforQuitting.htm" target="_blank">National Institutes of Health</a></p></div>
  </div>

  <div class="quiz-dip-feedback-block quiz-dip-feedback-question-6">
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-1"><p class="feedback-relative">Nope &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback quiz-dip-answer answer-question-6-2"><p class="feedback-relative">Yup &mdash; it&rsquo;s a fact.</p></div>
    <div class="quiz-dip-feedback question-6-summary"><p>What changed? Companies started to spend a lot more money on dip ads and promotions &mdash; and adding sweet, candy flavorings &mdash; to appeal to younger people. Is that what got you started?</p>
    <p class="quiz-dip-source">Source: <a href="https://www.tobaccofreekids.org/research/factsheets/pdf/0003.pdf" target="_blank">Campaign for Tobacco-Free Kids</a></p></div>
  </div>

<?php endif; ?>


<?php
  //order needs to be reversed since btn has float:right;
  print drupal_render($form['actions']['submit']);
  print drupal_render($form['actions']['next']);
  print drupal_render($form['actions']['previous']);

  // Always print out the entire $form. This renders the remaining pieces of the
  // form that haven't yet been rendered above (buttons, hidden elements, etc).
  print drupal_render_children($form);

  // TEST_QUIZ custom footer
  if($nid == TEST_QUIZ):
?>
    </div><!-- / .quiz-dip-inner  -->
    </div><!-- / .quiz-dip-outer  -->
    <script src="/sites/all/themes/smokefreegov/js/quiz-dip.js"></script>
<?php
  endif;

  // TEST_QUIZ custom footer
  if($nid == TEST_QUIZ_2):
?>
    </div><!-- / .quiz-dip-inner  -->
    </div><!-- / .quiz-dip-outer  -->
    <script src="/sites/all/themes/smokefreegov/js/quiz-dip.js"></script>
<?php
  endif;
?>
