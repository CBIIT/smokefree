<div id="quit-plan">
  <div id="get-quit-plan" class="quit-plan-output">
    <div class="output_intro">Get a PDF of your quit plan to save or print. Keep it where you can use it when you have cravings or need some motivation. You may want to cut it into smaller pieces and put the different sections in the places where they will be most helpful.
    </div>
    <div class="edit-print-btn clearfix">
      <h2 tabindex="-1" id="get-quit-plan-header">My Quit Plan</h2>
      <?php print render($form['print_pdf_top']); ?>
      <?php print render($form['edit_my_quit_plan_top']); ?>    </div>
    <?php if (!empty($form['choices']['#value']['quit_day'])) : ?>
    <section class="clearfix">
      <div class="plan-quit-date">
        <h3>My Quit Date</h3>
        <p id="get-quit-day" class="plan-input"><?php print $form['choices']['#value']['quit_day']; ?></p>
      </div>
    </section>
    <?php endif; ?>
    <?php if(!empty($form['choices']['#value']['milestones_24hours'])
    || !empty($form['choices']['#value']['milestones_48hours'])
    || !empty($form['choices']['#value']['milestones_oneWeek'])
    || !empty($form['choices']['#value']['milestones_twoWeeks'])
    || !empty($form['choices']['#value']['milestones_oneMonth'])): ?>
    <section id="get.mark">
      <?php if(!empty($form['choices']['#value']['milestones_24hours'])
        || !empty($form['choices']['#value']['milestones_oneWeek'])
        || !empty($form['choices']['#value']['milestones_oneMonth'])): ?>
      <div id="get.milestones.rewards">
        <h3>My Smokefree Rewards</h3>
        <ol class="unstyled">
        <?php if(!empty($form['choices']['#value']['milestones_24hours'])): ?>
          <li id="get.milestones._24HoursDate">
            <h4>24 Hours Smokefree:</h4>
            <ul class="milestone-selections">
              <?php
              foreach(json_decode($form['choices']['#value']['milestones_24hours'], TRUE) as $milestone) {
                print '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
              }
              ?>
            </ul>
          </li>
        <?php endif; ?>
        <?php if(!empty($form['choices']['#value']['milestones_oneWeek'])): ?>
          <li id="get.milestones.oneWeekDate">
            <h4>1 Week Smokefree:</h4>
            <ul class="milestone-selections">
              <?php
              foreach(json_decode($form['choices']['#value']['milestones_oneWeek'], TRUE) as $milestone) {
                print '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
              }
              ?>
            </ul>
          </li>
        <?php endif; ?>
        <?php if(!empty($form['choices']['#value']['milestones_oneMonth'])): ?>
          <li id="get.milestones.oneMonthDate">
            <h4>1 Month Smokefree:</h4>
            <ul class="milestone-selections">
              <?php
              foreach(json_decode($form['choices']['#value']['milestones_oneMonth'], TRUE) as $milestone) {
                print '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
              }
              ?>
            </ul>
          </li>
        <?php endif; ?>
        </ol>
      </div>
      <?php endif; ?>
      <?php if(!empty($form['choices']['#value']['milestones_48hours'])
      || !empty($form['choices']['#value']['milestones_twoWeeks'])): ?>
      <div id="get.milestones.activites">
        <h3>My Feel-Good Activities</h3>
        <ol class="unstyled">
        <?php if(!empty($form['choices']['#value']['milestones_48hours'])): ?>
          <li id="get.milestones._48HoursDate">
            <h4>First 24-48 hours:</h4>
            <ul class="milestone-selections">
              <?php
              foreach(json_decode($form['choices']['#value']['milestones_48hours'], TRUE) as $milestone) {
                print '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
              }
              ?>
            </ul>
          </li>
        <?php endif; ?>
          <?php if(!empty($form['choices']['#value']['milestones_twoWeeks'])): ?>
          <li id="get.milestones.twoWeeksDate">
            <h4>First 2 Weeks:</h4>
            <ul class="milestone-selections">
              <?php
              foreach(json_decode($form['choices']['#value']['milestones_twoWeeks'], TRUE) as $milestone) {
                print '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
              }
              ?>
            </ul>
          </li>
        <?php endif; ?>
        </ol>
      </div>
      <?php endif; ?>
      <hr>
    </section>
    <?php endif; ?>

    <?php if (!empty($form['choices']['#value']['reasons_for_quitting'])) : ?>
    <section id="get.reasons">
      <h3>My Reasons for Quitting</h3>
      <p>Review your reasons for quitting whenever you need a boost of inspiration.</p>
      <div class="reason-options-wrap plan">
        <?php if (in_array('reasons.liveLonger', $form['choices']['#value']['reasons_for_quitting'])) : ?>
          <div class="reason-options" id="get.reasons.liveLonger">
            <img class="reasons-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Reasons_LiveLonger.png" alt="healthy person" />
            <p>Live longer</p>
          </div>
        <?php endif; ?>
        <?php if (in_array('reasons.breathEasier', $form['choices']['#value']['reasons_for_quitting'])) : ?>
          <div class="reason-options" id="get.reasons.breathEasier">
            <img class="reasons-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Reasons_BreatheEasier.png" alt="lungs" />
            <p>Be healthier</p>
          </div>
        <?php endif; ?>
        <?php if (in_array('reasons.saveMoney', $form['choices']['#value']['reasons_for_quitting'])) : ?>
          <div class="reason-options" id="get.reasons.saveMoney">
            <img class="reasons-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Reasons_MoreMoney.png" alt="dollar bills" />
            <p>Save money</p>
          </div>
        <?php endif; ?>
        <?php if (in_array('reasons.smellBetter', $form['choices']['#value']['reasons_for_quitting'])) : ?>
          <div class="reason-options" id="get.reasons.smellBetter">
            <img class="reasons-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Reasons_SenseSmell.png" alt="a nose" />
            <p>Smell better</p>
          </div>
        <?php endif; ?>
        <?php if (in_array('reasons.myLovedOnes', $form['choices']['#value']['reasons_for_quitting'])) : ?>
          <div class="reason-options" id="get.reasons.myLovedOnes">
            <img class="reasons-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Reasons_MakeOthersProud.png" alt="people high fiving" />
            <p>My loved ones</p>
          </div>
        <?php endif; ?>
      </div>
      <hr>
    </section>
    <?php endif; ?>
    <?php if (!empty($form['choices']['#value']['triggers_emotional'])
        || !empty($form['choices']['#value']['triggers_habitual'])
        || !empty($form['choices']['#value']['triggers_social'])) : ?>
    <section id="get.identify">
      <h3>My Smoking Triggers</h3>
      <p>Knowing your triggers helps you stay in control. When you first quit, you might want to avoid triggers altogether. After staying smoke-free for a while, you may be able to find other ways to handle your triggers.</p>
      <div class="row">
        <div class="triggers span4">
          <h4>Emotional Triggers</h4>
          <ul class="unstyled">
            <?php if (in_array('emotional.stressed', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.stressed">Feeling stressed</li>
            <?php endif; ?>
            <?php if (in_array('emotional.anxious', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.anxious">Feeling anxious</li>
            <?php endif; ?>
            <?php if (in_array('emotional.down', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.down">Feeling down</li>
            <?php endif; ?>
            <?php if (in_array('emotional.lonely', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.lonely">Feeling lonely</li>
            <?php endif; ?>
            <?php if (in_array('emotional.bored', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.bored">Feeling bored</li>
            <?php endif; ?>
            <?php if (in_array('emotional.afterFight', $form['choices']['#value']['triggers_emotional'])) : ?>
              <li id="get.triggers.emotional.afterFight">Cooling off after a fight</li>
            <?php endif; ?>
          </ul>
        </div>
        <div class="triggers span4">
          <h4>Habitual Triggers</h4>
          <ul class="unstyled">
            <?php if (in_array('habitual.phone', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.phone">Talking on the phone</li>
            <?php endif; ?>
            <?php if (in_array('habitual.alcohol', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.alcohol">Drinking alcohol</li>
            <?php endif; ?>
            <?php if (in_array('habitual.tv', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.tv">Watching TV</li>
            <?php endif; ?>
            <?php if (in_array('habitual.driving', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.driving">Driving</li>
            <?php endif; ?>
            <?php if (in_array('habitual.afterMeal', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.afterMeal">Finishing a meal</li>
            <?php endif; ?>
            <?php if (in_array('habitual.coffee', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.coffee">Drinking coffee</li>
            <?php endif; ?>
            <?php if (in_array('habitual.workBreak', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.workBreak">Taking a work break</li>
            <?php endif; ?>
            <?php if (in_array('habitual.afterSex', $form['choices']['#value']['triggers_habitual'])) : ?>
              <li id="get.triggers.habitual.afterSex">After having sex</li>
            <?php endif; ?>
          </ul>
        </div>
        <div class="triggers span4">
          <h4>Social Triggers</h4>
          <ul class="unstyled">
            <?php if (in_array('social.bar', $form['choices']['#value']['triggers_social'])) : ?>
              <li id="get.triggers.social.bar">Going to a bar</li>
            <?php endif; ?>
            <?php if (in_array('social.event', $form['choices']['#value']['triggers_social'])) : ?>
              <li id="get.triggers.social.event">Going to a social event</li>
            <?php endif; ?>
            <?php if (in_array('social.othersSmoking', $form['choices']['#value']['triggers_social'])) : ?>
              <li id="get.triggers.social.othersSmoking">Seeing someone else smoke</li>
            <?php endif; ?>
          </ul>
        </div>
      </div>
      <hr>
    </section>
    <?php endif; ?>
    <?php if (!empty($form['choices']['#value']['fight_cravings'])) : ?>
    <section id="get.cravings">
      <h3>My Quit Kit</h3>
      <p>Not all cravings are the same. Prepare yourself with the tools and skills you will need to fight the different types of cravings you experience.</p>
      <?php if (in_array('cravings.keepBusy', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.keepBusy">
          <h4>Do you need to keep your hands and mouth busy?</h4>
          <div class="row-fluid">
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Straw.png" alt="a couple straws">
              <p>Hold a straw in your hand and breathe through it.</p>
            </div>
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Coin.png" alt="hand holding coin">
              <p>Play with a coin or paperclip to keep your hands busy.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if (in_array('cravings.relieveStress', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.relieveStress">
          <h4>Do you smoke to relieve stress or improve your mood?</h4>
          <div class="row-fluid">
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Breath.png" alt="yoga icon">
              <p>Practice deep breathing to calm down or do some pushups to blow off steam.</p>
            </div>
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Talk.png" alt="two people icon">
              <p>Turn to friends, family, and counselors when you need someone to talk to.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if (in_array('cravings.mindOccupied', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.mindOccupied">
          <h4>Do you have trouble keeping yourself busy and your mind occupied?</h4>
          <div class="row-fluid">
            <div class="span12 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Checklist.png" alt="checklist icon">
              <p>Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if (in_array('cravings.pleasurable', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.pleasurable">
          <h4>Do you smoke because it’s pleasurable and relaxing?</h4>
          <div class="row-fluid">
            <div class="span12 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Purchase.png" alt="movie tickets">
              <p>Treat yourself to a different pleasure. Listen to your favorite songs, plan a movie night with friends, or save up your cigarette money for a special treat when you reach a smokefree milestone.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if (in_array('cravings.irritable', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.irritable">
          <h4>Do you get irritable and anxious without cigarettes?</h4>
          <div class="row-fluid">
            <div class="span12 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Gum.png" alt="gum">
              <p>Nicotine replacement therapy (NRT), such as patches, gum, or lozenges, can help relieve your withdrawal symptoms. Talk to your doctor to see which type of NRT is right for you.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if (in_array('cravings.energyBoost', $form['choices']['#value']['fight_cravings'])) : ?>
        <div id="get.cravings.energyBoost">
          <h4>Do you smoke for an energy boost?</h4>
          <div class="row-fluid">
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Checklist.png" alt="checklist icon">
              <p>Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day.</p>
            </div>
            <div class="span6 clearfix crave-tip">
              <img class="crave-img" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Cravings_Sleep.png" alt="sleep cloud">
              <p>Make sure you’re getting plenty of sleep at night to help you from feeling slow during the day.</p>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <hr>
    </section>
    <?php endif; ?>
    <section id="get.reminders">
      <h3>Get Rid of Smoking Reminders</h3>
      <p>Get ready for your quit day by clearing your spaces of anything associated with smoking.</p>

      <div>
        <h4>To Do List!</h4>
        <ul class="smoking-reminders">
          <li>Wash your clothing, especially the jacket you wear to take smoke breaks.</li>
          <li>Clean your car.</li>
          <li>Get rid of matches, ashtrays, and any cigarette butts that may be outside your home.</li>
          <li>Put your quit kit items in the places where you kept your cigarettes, ashtrays, matches, and lighters.</li>
        </ul>
      </div>
      <hr>
    </section>
    <?php if (!empty($form['choices']['#value']['extra_help'])) : ?>
    <section id="get.help">
      <h3>
        Need Some Extra Help?
        <img class="plan-help-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Help_TXT.png" alt="text message icon">
        <img class="plan-help-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Help_Apps.png" alt="phone apps icon">
        <img class="plan-help-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Help_Groups.png" alt="people group icon">
      </h3>

      <p>There are lots of tools available to make quitting more manageable. Explore these resources to find what is right for you.</p>
      <?php if (in_array('help.medication', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.medication">
          <h4>Medications and Nicotine Replacement Therapy (NRT)</h4>
          <p>Using medications and/or nicotine replacement therapy (NRT) can improve your chances of quitting for good (<a href="http://smokefree.gov/explore-medications" target="_blank">http://smokefree.gov/explore-medications</a>). Make an appointment with your health care provider to find out which options are best for you.</p>
        </div>
      <?php endif; ?>
      <?php if (in_array('help.smokefreeVet', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.smokefreeVet">
          <h4>SmokefreeTXT Text Message Program</h4>
          <p>SmokefreeTXT is a mobile text messaging service designed for adults and young adults across the United States who are trying to quit smoking. Sign up online (<a href="http://smokefree.gov/smokefreetxt" target="_blank">http://smokefree.gov/smokefreetxt</a>) or send a text message with the word QUIT to 47848.</p>
        </div>
      <?php endif; ?>
      <?php if (in_array('help.apps', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.apps">
          <h4>Apps</h4>
          <p>
            <strong>Smokefree Apps</strong> (<a href="http://smokefree.gov/apps" target="_blank">http://smokefree.gov/apps</a>) help you track cravings, monitor progress, and give you strategies to help you become smokefree.
          </p>
        </div>
      <?php endif; ?>
      <?php if (in_array('help.facebook', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.facebook">
          <h4>SmokefreeUS Facebook</h4>
          <p>Get extra support and information by checking out Smokefree on Facebook (<a href="https://www.facebook.com/SmokefreeUS" target="_blank">https://www.facebook.com/SmokefreeUS</a>). </p>
        </div>
      <?php endif; ?>
      <?php if (in_array('help.quitlines', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.quitlines">
          <h4>Quitlines</h4>

          <p>Consider calling either the National Cancer Institute or state quitlines to get information and help with quitting:</p>
          <ul>
            <li><strong><a href="http://smokefree.gov/talk-to-an-expert/" target="_blank">The National Cancer Institute quitline:</a></strong> 1-877-44U-QUIT (1-877-448-7848)</li>
            <li><strong><a href="http://smokefree.gov/talk-to-an-expert/" target="_blank">Find your state’s quitline: </a></strong>1-800-QUIT-NOW (1-800-784-8669) </li>
          </ul>
        </div>
      <?php endif; ?>
      <?php if (in_array('help.livehelp', $form['choices']['#value']['extra_help'])) : ?>
        <div id="get.help.livehelp">
          <h4>NCI LiveHelp</h4>
          <p>Get help quitting through an online chat with a smoking cessation counselor. LiveHelp (<a href="https://livehelp.cancer.gov/app/chat/chat_launch" target="_blank">https://livehelp.cancer.gov/app/chat/chat_launch</a>) is offered Monday through Friday, 8:00 a.m. to 11:00 p.m. Eastern Time. Visit the NCI LiveHelp page to chat with a counselor. </p>
        </div>
      <?php endif; ?>
    </section>
    <?php endif; ?>
    <div class="edit-print-btn clearfix">
      <div class="print-quit-plan-blue-line"></div>
      <?php print render($form['print_pdf_bottom']); ?>
      <?php print render($form['edit_my_quit_plan_bottom']); ?>    </div>
  </div>
</div>
<?php
print render($form['choices']);
print render($form['form_id']);
print render($form['form_build_id']);
print render($form['form_token']);
?>
