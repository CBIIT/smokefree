<?php
global $base_url;
$html = '';
$rewardStyle = '';
if (!empty($form['choices']['#value']['milestones_24hours'])
  && !empty($form['choices']['#value']['milestones_oneWeek'])
  && !empty($form['choices']['#value']['milestones_oneMonth'])) {
  $rewardStyle = ' class="collapse"';
}
$activityStyle = '';
if (!empty($form['choices']['#value']['milestones_48hours'])
  && !empty($form['choices']['#value']['milestones_twoWeeks'])) {
  $activityStyle = ' class="collapse"';
}

//Let's add stylesheets
$html .= '<link rel="stylesheet" type="text/css" href="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/css/quit-plan-pdf.css' . '" />';
$html .= '<div id="get-quit-plan" class="quit-plan-pdf">

        <h2 tabindex="-1" id="get-quit-plan-header">My Quit Plan</h2>

        <table>
            <tr>
            <td>
            <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Calendars_Calendar.png" align="texttop" alt="pencil and calendar" />
            </td>
            <td>
            <h3 style="margin-left: 15px; line-height: 1.2em;">
                My Quit Date<br />
                ' . check_plain($form['choices']['#value']['quit_day']) . '
            </h3>
            </td>
            </tr>
        </table>

        <section id="get.mark">
            <div'. $rewardStyle .'>
                <h3>My Smokefree Rewards</h3>

                <ol class="list-milestones list-unstyled">';
if(!empty($form['choices']['#value']['milestones_24hours'])) {
  $html .= '<li><h4>24 Hours Smokefree:</h4>';
  foreach(json_decode($form['choices']['#value']['milestones_24hours'], TRUE) as $milestone) {
    $html .= '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
  }
  $html .= '</li>';
}
if(!empty($form['choices']['#value']['milestones_oneWeek'])) {
  $html = $html . '<li>
                        <h4>1 Week Smokefree:</h4>
                        ';
  foreach(json_decode($form['choices']['#value']['milestones_oneWeek'], TRUE) as $milestone) {
    $html .= '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
  }
  $html .= '</li>';
}
if(!empty($form['choices']['#value']['milestones_oneMonth'])) {
  $html = $html . '<li>
                        <h4>1 Month Smokefree:</h4>';
  foreach(json_decode($form['choices']['#value']['milestones_oneMonth'], TRUE) as $milestone) {
    $html .= '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
  }
  $html .= '</li>';
}
$html = $html . '</ol>
            </div>

            <div'. $activityStyle .'>
            <h3>My Feel-Good Activities</h3>

            <ol class="list-milestones list-unstyled">';
if(!empty($form['choices']['#value']['milestones_48hours'])) {
  $html = $html . '<li>
                    <h4>First 24-48 hours:</h4>';
  foreach(json_decode($form['choices']['#value']['milestones_48hours'], TRUE) as $milestone) {
    $html .= '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
  }
  $html .= '</li>';
}
if(!empty($form['choices']['#value']['milestones_twoWeeks'])) {
  $html = $html . '<li>
                    <h4>First 2 Weeks:</h4>';
  foreach(json_decode($form['choices']['#value']['milestones_48hours'], TRUE) as $milestone) {
    $html .= '<li><span class="plan-input date">' . $milestone['date'] . ' </span><span class="plan-input title">' . check_plain($milestone['title']) .'</span></li>';
  }
  $html .= '</li>';
}
$html = $html . '</ol>
            </div>
            <hr>
        </section>

        <section id="get.reasons">
            <h3>My Reasons for Quitting</h3>
            <p>Review your reasons for quitting whenever you need a boost of inspiration.</p>
            <table><tr>';
if (in_array('reasons.liveLonger', $form['choices']['#value']['reasons_for_quitting'])) {
  $html = $html . '<td id="get.reasons.liveLonger" class="reason">
                    <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Reasons_LiveLonger.png" alt="healthy person" />
                    <p>Live longer</p>
                </td>';
}
if (in_array('reasons.breathEasier', $form['choices']['#value']['reasons_for_quitting'])) {
  $html = $html . ' <td id="get.reasons.breathEasier" class="reason">
                    <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Reasons_BreatheEasier.png" alt="lungs" />
                    <p>Be healthier</p>
                </td>';
}
if (in_array('reasons.saveMoney', $form['choices']['#value']['reasons_for_quitting'])) {
  $html = $html . '<td id="get.reasons.saveMoney" class="reason">
                    <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Reasons_MoreMoney.png" alt="dollar bills" />
                    <p>Save money</p>
                </td>';
}
if (in_array('reasons.smellBetter', $form['choices']['#value']['reasons_for_quitting'])) {
  $html = $html . '<td id="get.reasons.smellBetter" class="reason">
                    <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Reasons_SenseSmell.png" alt="a nose" />
                    <p>Smell better</p>
                </td>';
}
if (in_array('reasons.myLovedOnes', $form['choices']['#value']['reasons_for_quitting'])) {
  $html = $html . '<td id="get.reasons.myLovedOnes" class="reason">
                    <img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Reasons_MakeOthersProud.png" alt="people high fiving" />
                    <p>My loved ones</p>
                </td>';
}
$html .= '</tr></table>
         <hr>
        </section>

        <section id="get.identify">
            <h3>My Smoking Triggers</h3>
            <p>Knowing your triggers helps you stay in control. When you first quit, you might want to avoid triggers altogether. After staying smoke-free for a while, you may be able to find other ways to handle your triggers.</p>

            <table style="width: 100%">
                <tr>
                <td class="triggers">
                    <h4>Emotional Triggers</h4>
                    <ul class="list-unstyled">';
if (in_array('emotional.stressed', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.stressed">Feeling stressed</li>';
}
if (in_array('emotional.anxious', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.anxious">Feeling anxious</li>';
}
if (in_array('emotional.down', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.down">Feeling down</li>';
}
if (in_array('emotional.lonely', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.lonely">Feeling lonely</li>';
}
if (in_array('emotional.bored', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.bored">Feeling bored</li>';
}
if (in_array('emotional.afterFight', $form['choices']['#value']['triggers_emotional'])) {
  $html .= '<li id="get.triggers.emotional.afterFight">Cooling off after a fight</li>';
}



$html .= '  </ul>
                </td>

                <td class="triggers">
                    <h4>Habitual Triggers</h4>
                    <ul class="list-unstyled">';
if (in_array('habitual.phone', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.phone">Talking on the phone</li>';
}
if (in_array('habitual.alcohol', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.alcohol">Drinking alcohol</li>';
}
if (in_array('habitual.tv', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.tv">Watching TV</li>';
}
if (in_array('habitual.driving', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.driving">Driving</li>';
}
if (in_array('habitual.afterMeal', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.afterMeal">Finishing a meal</li>';
}
if (in_array('habitual.coffee', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.coffee">Drinking coffee</li>';
}
if (in_array('habitual.workBreak', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.workBreak">Taking a work break</li>';
}
if (in_array('habitual.afterSex', $form['choices']['#value']['triggers_habitual'])) {
  $html .= '<li id="get.triggers.habitual.afterSex">After having sex</li>';
}
$html = $html. '
                    </ul>
                </td>

                <td class="triggers">
                    <h4>Social Triggers</h4>
                    <ul class="list-unstyled">';
if (in_array('social.bar', $form['choices']['#value']['triggers_social'])) {
  $html .= '<li id="get.triggers.social.bar">Going to a bar</li>';
}
if (in_array('social.event', $form['choices']['#value']['triggers_social'])) {
  $html .= '<li id="get.triggers.social.event">Going to a social event</li>';
}
if (in_array('social.othersSmoking', $form['choices']['#value']['triggers_social'])) {
  $html .= '<li id="get.triggers.social.othersSmoking">Seeing someone else smoke</li>';
}
if (in_array('social.friends', $form['choices']['#value']['triggers_social'])) {
  $html .= '<li id="get.triggers.social.friends">Being with friends who smoke</li>';
}

$html .= '
                    </ul>
                </td>
            </tr>
            </table>
            <hr>
        </section>

        <section id="get.cravings">
            <h3>My Quit Kit</h3>
            <p>Not all cravings are the same. Prepare yourself with the tools and skills you will need to fight the different types of cravings you experience.</p>';
if (in_array('cravings.keepBusy', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.keepBusy">
                <h4>Do you need to keep your hands and mouth busy?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Straw.png" alt="a couple straws" /></td>
                        <td>Hold a straw in your hand and breathe through it.</td>
                    </tr>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Coin.png" alt="hand holding coin" /></td>
                        <td>Play with a coin or paperclip to keep your hands busy.</td>
                    </tr>
                </table>
            </div>
';
}
if (in_array('cravings.relieveStress', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.relieveStress">
                <h4>Do you smoke to relieve stress or improve your mood?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Breath.png" alt="yoga icon" /></td>
                        <td>Practice deep breathing to calm down or do some pushups to blow off steam.</td>
                    </tr>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Talk.png" alt="two people icon" /></td>
                        <td>Turn to friends, family, and counselors when you need someone to talk to.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.relieveStressVet', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.relieveStress">
                <h4>Do you smoke or dip to relieve stress or improve your mood?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Breath.png" alt="yoga icon" /></td>
                        <td>Practice deep breathing to calm down or go for a walk or do some pushups to blow off steam.</td>
                    </tr>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Talk.png" alt="two people icon" /></td>
                        <td>Turn to friends, family, and counselors when you need someone to talk to.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.mindOccupied', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.mindOccupied">
                <h4>Do you have trouble keeping yourself busy and your mind occupied?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Checklist.png" alt="checklist icon" /></td>
                        <td>Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.pleasurable', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.pleasurable">
                <h4>Do you smoke because it’s pleasurable and relaxing?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Purchase.png" alt="movie tickets" /></td>
                        <td>Treat yourself to a different pleasure. Listen to your favorite songs, plan a movie night with friends, or save up your cigarette money for a special treat when you reach a smokefree milestone.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.pleasurableVet', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.pleasurable">
                <h4>Do you smoke or dip because it’s pleasurable and relaxing?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Purchase.png" alt="movie tickets" /></td>
                        <td>Treat yourself to a different pleasure. Listen to your favorite songs, plan a movie night with friends, or save up your tobacco money for a special treat when you reach a tobacco milestone.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.irritable', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.irritable">
                <h4>Do you get irritable and anxious without cigarettes?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Gum.png" alt="gum" /></td>
                        <td>Nicotine replacement therapy (NRT), such as patches, gum, or lozenges, can help relieve your withdrawal symptoms. Talk to your doctor to see which type of NRT is right for you.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.irritableVet', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.irritable">
                <h4>Do you get irritable and anxious without cigarettes or tobacco?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Gum.png" alt="gum" /></td>
                        <td>Nicotine replacement therapy (NRT), such as patches, gum, or lozenges, can help relieve your withdrawal symptoms. Talk to your doctor to see which type of NRT is right for you.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.energyBoost', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.energyBoost">
                <h4>Do you smoke for an energy boost?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Checklist.png" alt="checklist icon" /></td>
                        <td>Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day.</td>
                    </tr>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Sleep.png" alt="sleep cloud" /></td>
                        <td>Make sure you’re getting plenty of sleep at night to help you from feeling slow during the day.</td>
                    </tr>
                </table>

            </div>';
}
if (in_array('cravings.energyBoostVet', $form['choices']['#value']['fight_cravings'])) {
  $html .= '<div id="get.cravings.energyBoost">
                <h4>Do you smoke or use tobacco for an energy boost?</h4>

                <table>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Checklist.png" alt="checklist icon" /></td>
                        <td>Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day.</td>
                    </tr>
                    <tr class="quit-tip">
                        <td class="plan-help-img"><img src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Cravings_Sleep.png" alt="sleep cloud" /></td>
                        <td>Make sure you’re getting plenty of sleep at night to help you from feeling slow during the day.</td>
                    </tr>
                </table>

            </div>';
}
$html .= '<hr></section>

        <section>
            <h3>Get Rid of Smoking Reminders</h3>
            <p>Get ready for your quit day by clearing your spaces of anything associated with smoking.</p>

            <div>
                <h4>To Do List!</h4>
                <ul>
                    <li>Wash your clothing, especially the jacket you wear to take smoke breaks.</li>
                    <li>Clean your car.</li>
                    <li>Get rid of matches, ashtrays, and any cigarette butts that may be outside your home.</li>
                    <li>Put your quit kit items in the places where you kept your cigarettes, ashtrays, matches, and lighters.</li>
                </ul>
            </div>
            <hr>
        </section>

        <section id="get.help">
            <h3>Need Some Extra Help?
                <img class="plan-help-icon" src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Help_TXT.png" alt="text message icon">
                <img class="plan-help-icon" src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Help_Apps.png" alt="phone apps icon">
                <img class="plan-help-icon" src="' . DRUPAL_ROOT . '/' . drupal_get_path('theme', 'smokefreegov') . '/images/sf-vet/SF_Vet_Help_Groups.png" alt="people group icon">
            </h3>
            <p>There are lots of tools available to make quitting more manageable. Explore these resources to find what is right for you.</p>';
if (in_array('help.medicationSF', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.apps">
                <h4>Medications and Nicotine Replacement Therapy (NRT)</h4>
                <p>Using medications and/or nicotine replacement therapy (NRT) can improve your chances of quitting for good (<a href="http://smokefree.gov/explore-medications">http://smokefree.gov/explore-medications</a>). Make an appointment with your health care provider to find out which options are best for you.</p>
            </div>';
}
if (in_array('help.smokefreeVet', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.smokefreeVet">
                <h4>SmokefreeVET Text Message Program</h4>
            <p><strong>SmokefreeVET Text Message Program</strong> is a mobile text messaging service for military Veterans who receive their healthcare through VA. <a href="http://smokefree.gov/vet" target="_blank">Sign up online</a> or send a text message with the word VET to 47848 for help with quitting smoking or with quitting dip or chew.</p>
            </div>
';
}
if (in_array('help.smokefreeSF', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.smokefreeVet">
                <h4>SmokefreeTXT Text Message Program</h4>
                <p><strong>SmokefreeTXT</strong> is a mobile text messaging service designed for adults and young adults across the United States who are trying to quit smoking. <a href="http://smokefree.gov/smokefreetxt" target="_blank">Sign up online</a> or send a text message with the word QUIT to 47848.</p>
            </div>
';
}
if (in_array('help.appsSF', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.apps">
                <h4>Apps</h4>
                <ul class="plan-ul">
                    <li>Smokefree Apps (<a href="http://smokefree.gov/apps">http://smokefree.gov/apps</a>) help you track cravings, monitor progress, and give you strategies to help you become smokefree. </li>
                </ul>
            </div>';
}
if (in_array('help.appsVet', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.apps">
                <h4>Apps</h4>
                <p><ul><li><strong><a href="http://smokefree.gov/apps-quitguide" target="_blank">QuitGuide</a></strong> helps you track cravings, monitor progress, and gives you strategies to help you become tobacco free.</li><li><strong><a href="https://mobile.va.gov/app/stay-quit-coach/" target="_blank">VA’s Stay Quit Coach</a></strong> was designed to help Veterans with Post-Traumatic Stress Disorder (PTSD) quit smoking. This app has been shown to double quit rates for Veterans with PTSD.</li></ul></p>
            </div>';
}
if (in_array('help.facebookSF', $form['choices']['#value']['extra_help'])) {
  $html .= ' <div id="get.help.facebook">
                <h4>SmokefreeUS Facebook</h4>
                <p>Get extra support and information by checking out Smokefree on Facebook (<a href="https://www.facebook.com/SmokefreeUS">https://www.facebook.com/SmokefreeUS</a>). </p>
            </div>';
}
if (in_array('help.facebookVet', $form['choices']['#value']['extra_help'])) {
  $html .= ' <div id="get.help.facebook">
                <h4>SmokefreeVet Facebook</h4>
                <p>Get extra support and information by checking out SmokefreeVET on <a href="https://www.facebook.com/smokefreevet" target="_blank" class="ext extlink">Facebook.<span class="ext"><span class="element-invisible"> (link is external)</span></span></a></p>
            </div>';
}
if (in_array('help.quitlinesSF', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.quitlines">
                <h4>Quitlines</h4>

                <p>Consider calling either the National Cancer Institute or state quitlines to get information and help with quitting:</p>

                <ul class="plan-ul">
                    <li><strong>The National Cancer Institute quitline (<a href="http://smokefree.gov/talk-to-an-expert/">http://smokefree.gov/talk-to-an-expert/</a>): </strong> 1-877-44U-QUIT (1-877-448-7848)</li>
                    <li><strong>Find your state’s quitline (<a href="http://smokefree.gov/talk-to-an-expert/">http://smokefree.gov/talk-to-an-expert/</a>): </strong> 1-800-QUIT-NOW (1-800-784-8669)</li>
                </ul>
            </div>';
}
if (in_array('help.quitlinesVet', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.quitlines">
                <h4>Quitlines</h4>

                <p>The <a href="http://www.publichealth.va.gov/smoking/quitline.asp" target="_blank">VA quitline</a> is for Veterans who receive their healthcare through VA: 1-855-QUIT-VET (1-855-784-8838)</p> <p>If you do not receive healthcare through VA, consider these options:</p> <ul> <li> <strong><a href="http://smokefree.gov/talk-to-an-expert/" target="_blank">The National Cancer Institute quitline:</a></strong> 1-877-44U-QUIT (1-877-448-7848)</li> <li> <strong><a href="http://smokefree.gov/talk-to-an-expert/" target="_blank">Find your state’s quitline: </a></strong>1-800-QUIT-NOW (1-800-784-8669)</li> </ul>

            </div>';
}
if (in_array('help.livehelp', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.liveHelp">
                <h4>NCI LiveHelp</h4>
                <p>Get help quitting through an online chat with a smoking cessation counselor. LiveHelp (<a href="https://livehelp.cancer.gov/app/chat/chat_launch">https://livehelp.cancer.gov/app/chat/chat_launch</a>) is offered Monday through Friday, 9:00 a.m. to 9:00 p.m. Eastern Time. Visit the NCI LiveHelp page to chat with a counselor. </p>
            </div>';
}
if (in_array('help.livehelpVet', $form['choices']['#value']['extra_help'])) {
  $html .= '<div id="get.help.liveHelp">
                <h4>NCI LiveHelp</h4>
                <p>Get help quitting through an online chat with a tobacco cessation counselor. LiveHelp (<a href="https://livehelp.cancer.gov/app/chat/chat_launch">https://livehelp.cancer.gov/app/chat/chat_launch</a>) is offered Monday through Friday, 9:00 a.m. to 9:00 p.m. Eastern Time. Visit the NCI LiveHelp page to chat with a counselor. </p>
            </div>';
}
$html .= '
            </section>

    </div>';
print $html;
?>