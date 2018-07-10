<div id="quit-plan">
    <section class="start quit-plan-panel">
      <div class="page-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/now.jpg" alt="bikes treking">
        <h1><span>Quitting starts now.<br><span class="indent">Make a <span class="plan">plan</span>.</span></span></h1>
      </div>

      <div class="section-body" id="top_trigger">
        <ul aria-hidden="true" role = "presentation" id="progress_bar" class="top">

          <li class="page-nav-item">
            <label for="step1" class="progress_flag">Step 1 of 7</label>
            <a href="#mark" class="trigger-scroll step1" data-target="mark">mark</a>
          </li>

          <li class="page-nav-item">
            <label for="step2" class="progress_flag">Step 2 of 7</label>
            <a href="#reasons" class="trigger-scroll step2" data-target="reasons">reasons</a>
          </li>
          <li class="page-nav-item">
            <label for="step3" class="progress_flag">Step 3 of 7</label>
            <a href="#identify" class="trigger-scroll step3" data-target="identify">identify</a>
          </li>

          <li class="page-nav-item">
            <label for="step4" class="progress_flag">Step 4 of 7</label>
            <a href="#cravings" class="trigger-scroll step4" data-target="cravings">cravings</a>
          </li>
          <li class="page-nav-item">
            <label for="step5" class="progress_flag">Step 5 of 7</label>
            <a href="#reminders" class="trigger-scroll step5" data-target="reminders">reminders</a>
          </li>

          <li class="page-nav-item">
            <label for="step6" class="progress_flag">Step 6 of 7</label>
            <a href="#help" class="trigger-scroll step6" data-target="help">help</a>
          </li>

          <li class="page-nav-item">
            <label for="step7" class="progress_flag">Step 7 of 7</label>
            <a href="#show" class="trigger-scroll step7" data-target="show">show</a>
          </li>
        </ul>
          <img alt="man riding bicycle icon" class="icon" src="/sites/all/themes/sfg/images/sf-vet/Bike_Black.png">
        <p class="heading">The tobacco free journey can be a </p>
        <h2 class="quit-plan">BUMPY RIDE</h2>
        <p class="heading">but making a quit plan can help smooth things out.</p>
        <a href="#mark" class="button  down-arrow-btn btn-quit-plan trigger-scroll" type="button">Build your quit plan now</a>

        <p>Create your own quit plan by following the steps below. You can download, print, and add your quit plan to your online calendars.</p>
      </div>
      <div class="section-divider"></div>
    </section>
    <!-- mark your calendars
/////////////////////////////////////////////////////////// -->
    <section id="mark" class="mark quit-plan-panel" data-validation="valid-milestone" data-required="data-required">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/calendar.jpg" alt="pencil and calendar" />
        <h2>
          <span class="section-head-top"><span>MARK YOUR</span></span>
          <span class="section-head-bottom"> CALENDAR</span>
        </h2>
      </div>

      <div class="section-body">
        <img src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendars-icon">

        <h3><span class="form-required">*</span>Start by setting your quit date</h3>

        <p>Choose a day within the next two weeks. This will give you enough time to prepare.</p>

        <div class="validation-error section-error collapse">
          <p class="alert alert-error">Please enter your Quit Day</p>
        </div>

        <div class="form-group">
          <?php print render($form['quit_day']);?>


          <div class="dropdown dropdown-add-calendar-start">
            <button type="button" data-target="dropdown-add-calendar-quit-day" role="button" data-toggle="dropdown" class="dropdown-toggle btn-add-to-cal" id="add-calendar-quit-day">Add <span class="sr-only">quit day </span> to my calendar</button>
            <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-quit-day" aria-labelledby="add-calendar-quit-day">
              <li>
                <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div id="milestones-wrapper">
        <div class="collapse" id="milestones">

          <div class="milestone-timeline">
            <div class="milestone-modal-triggers">
              <ol class="list-milestone-modals">
                <li class="milestone">
                  <button class="btn btn-link modal-milestone-trigger" data-toggle="modal" type="button" data-target="#modal-24-hours">
                    <img src="/sites/all/themes/sfg/images/sf-vet/milestone-plus.png" width="42" height="42" alt="">
                    <span class="sr-only">24 hours tobacco free</span>
                  </button>
                </li>
                <li class="milestone">
                  <button class="btn btn-link modal-milestone-trigger" data-toggle="modal" type="button" data-target="#modal-48-hours">
                    <img src="/sites/all/themes/sfg/images/sf-vet/milestone-plus.png" width="42" height="42" alt="">
                    <span class="sr-only">First 24-48 Hours</span>
                  </button>
                </li>
                <li class="milestone">
                  <button class="btn btn-link modal-milestone-trigger" data-toggle="modal" type="button" data-target="#modal-one-week">
                    <img src="/sites/all/themes/sfg/images/sf-vet/milestone-plus.png" width="42" height="42" alt="">
                    <span class="sr-only">1 week tobacco</span>
                  </button>
                </li>
                <li class="milestone">
                  <button class="btn btn-link modal-milestone-trigger" data-toggle="modal" type="button" data-target="#modal-two-weeks">
                    <img src="/sites/all/themes/sfg/images/sf-vet/milestone-plus.png" width="42" height="42" alt="">
                    <span class="sr-only">First two weeks</span>
                  </button>
                </li>
                <li class="milestone">
                  <button class="btn btn-link modal-milestone-trigger" data-toggle="modal" type="button" data-target="#modal-one-month">
                    <img src="/sites/all/themes/sfg/images/sf-vet/milestone-plus.png" width="42" height="42" alt="">
                    <span class="sr-only">One month smokefree</span>
                  </button>
                </li>
              </ol>
            </div>

            <div class="row timeline-markers">
              <div class="col-sm-4">
                <img src="/sites/all/themes/sfg/images/sf-vet/1-week.png" alt="one week" width="106" height="107" /></button>
                <p>Nicotine is out of your system.</p>
              </div>
              <!-- /.col-sm-4 -->
              <div class="col-sm-4">
                <img src="/sites/all/themes/sfg/images/sf-vet/2-weeks.png" alt="two weeks" width="106" height="107" /></button>
                <p>Physical withdrawal symptoms fade.</p>
              </div>
              <!-- /.col-sm-4 -->
              <div class="col-sm-4">
                <img src="/sites/all/themes/sfg/images/sf-vet/1-month.png" alt="one month" width="106" height="107" /></button>
                <p>Cravings from emotional and habitual triggers may continue.</p>
              </div>
              <!-- /.col-sm-4 -->
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" aria-hidden="true" id="modal-24-hours" data-milestone="_24HoursDate" tabindex="-1" role="dialog" aria-labelledby="modal-header-24-hours">
        <div class="modal-dialog modal-quit-plan modal-reward" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="modal-header-24-hours">
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendar icon" width="34" height="40" /> 24 hours tobacco free</h4>
            </div>
            <div class="modal-body">
              <p>Your first day without tobacco is a big accomplishment!</p>
              <fieldset>
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/basket.png" alt="person dancing icon">
                <legend> Celebrate this milestone with a reward:</legend>
                <div class="validation-error collapse">
                  <p class="alert alert-error">Please enter at least one reward and a valid date (mm-dd-yyyy)</p>
                </div>
                <div class="validation-success collapse">
                  <p class="alert alert-success">The reward you selected is now on your calendar!</p>
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.24Hours.reward.one"> Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.24Hours.reward.one" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.24Hours.reward.two"> Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.24Hours.reward.two" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.24Hours.reward.three"> Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.24Hours.reward.three" />
                </div>
                <input aria-required="true" class="form-control milestone-date-picker" placeholder="mm-dd-yyyy" type="text" id="milestones.24Hours.date" />
                <div class="dropdown dropdown-add-calendar">
                  <button type="button" data-target="dropdown-add-calendar-24hours" role="button" data-toggle="dropdown" data-toggle="dropdown" class="dropdown-toggle btn-milestone" id="add-calendar-24hours">Add <span class="sr-only">24 hours smokefree reward</span> to calendar</button>
                  <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-24hours" aria-labelledby="add-calendar-24hours">
                    <li>
                      <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div class="modal fade" aria-hidden="true" id="modal-48-hours" data-milestone="_48HoursDate" tabindex="-1" role="dialog" aria-labelledby="modal-header-48-hours">
        <div class="modal-dialog modal-quit-plan modal-activity" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="modal-header-48-hours">
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendar icon" width="34" height="40" />
                First 24-48 Hours</h4>
            </div>
            <div class="modal-body">
              <p><strong>What to expect:</strong> Withdrawal is your body adjusting to not having nicotine. This can be uncomfortable. You might not feel like yourself and you might feel down during this time. </p>
              <p>Use of nicotine replacement, like the gum or patch, can really help manage your withdrawal. Talk to your health care provider for more information.</p>
              <p><strong>What to do:</strong> Make time for activities that help you manage your stress and get support to get through the first days of quitting.</p>
              <fieldset>
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Activities.png" alt="person dancing icon">
                <legend>
                  Plan an activity to keep you occupied:</legend>
                <div class="validation-error collapse">
                  <p class="alert alert-error">Please enter an activity and a valid date (mm-dd-yyyy)</p>
                </div>
                <div class="validation-success collapse">
                  <p class="alert alert-success">The activity you selected is now on your calendar!</p>
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.48Hours.activity">Type in an activity!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in an activity!" id="milestones.48Hours.activity" />
                </div>
                <input aria-required="true" class="form-control milestone-date-picker" placeholder=" mm-dd-yyyy" type="text" id="milestones.48Hours.date" />
                <div class="dropdown dropdown-add-calendar">
                  <button type="button" data-target="dropdown-add-calendar-48Hours" role="button" data-toggle="dropdown" class="dropdown-toggle btn-milestone" id="add-calendar-48Hours">Add <span class="sr-only">48 hours smokefree activity</span> to calendar</button>
                  <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-48Hours" aria-labelledby="add-calendar-48Hours">
                    <li>
                      <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div class="modal fade" aria-hidden="true" id="modal-one-week" data-milestone="oneWeekDate" tabindex="-1" role="dialog" aria-labelledby="modal-header-one-week">
        <div class="modal-dialog modal-quit-plan modal-reward" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="modal-header-one-week">
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendar icon" width="34" height="40" />
                1 week tobacco free</h4>
            </div>
            <div class="modal-body">
              <p>Being tobacco free for a week is a huge achievement! Nicotine is completely out of your system, and the worst of the withdrawal is probably over.
              </p>
              <fieldset>
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/basket.png" alt="person dancing icon">
                <legend>
                  Celebrate this milestone with a reward:</legend>
                <div class="validation-error collapse">
                  <p class="alert alert-error">Please enter at least one reward and a valid date (mm-dd-yyyy)</p>
                </div>
                <div class="validation-success collapse">
                  <p class="alert alert-success">The reward you selected is now on your calendar!</p>
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneWeek.reward.one">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneWeek.reward.one" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneWeek.reward.two">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneWeek.reward.two" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneWeek.reward.three">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneWeek.reward.three" />
                </div>
                <input aria-required="true" class="form-control milestone-date-picker" placeholder=" mm-dd-yyyy" type="text" id="milestones.oneWeek.date" />
                <div class="dropdown dropdown-add-calendar">
                  <button type="button" data-target="dropdown-add-calendar-oneWeek" role="button" data-toggle="dropdown" class="dropdown-toggle btn-milestone" id="add-calendar-oneWeek">Add <span class="sr-only">one week reward</span> to calendar</button>
                  <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-oneWeek" aria-labelledby="add-calendar-oneWeek">
                    <li>
                      <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div class="modal fade" aria-hidden="true" id="modal-two-weeks" data-milestone="twoWeeksDate" tabindex="-1" role="dialog" aria-labelledby="modal-header-two-weeks">
        <div class="modal-dialog modal-quit-plan modal-activity" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="modal-header-two-weeks">
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendar icon" width="34" height="40" /> First Two Weeks</h4>
            </div>
            <div class="modal-body">
              <p><strong>What to expect:</strong> Most withdrawal symptoms will fade by the time you are tobacco free for two weeks. </p>
              <p><strong>What to do:</strong> Make time for activities that put you in a good mood and make you feel relaxed to get through the challenges of quitting.</p>
              <fieldset>
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Activities.png" alt="person dancing icon">
                <legend>
                  Plan an activity to keep you occupied:</legend>
                <div class="validation-error collapse">
                  <p class="alert alert-error">Please enter an activity and a valid date (mm-dd-yyyy)</p>
                </div>
                <div class="validation-success collapse">
                  <p class="alert alert-success">The activity you selected is now on your calendar!</p>
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.twoWeeks.activity">Type in an activity!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in an activity!" id="milestones.twoWeeks.activity" />
                </div>
                <input aria-required="true" class="form-control milestone-date-picker" placeholder=" mm-dd-yyyy" type="text" id="milestones.twoWeeks.date" />
                <div class="dropdown dropdown-add-calendar">
                  <button type="button" data-target="dropdown-add-calendar-twoWeeks" data-toggle="dropdown" class="dropdown-toggle btn-milestone" id="add-calendar-twoWeeks">Add <span class="sr-only">two week activity</span> to calendar</button>
                  <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-twoWeeks" role="button" aria-labelledby="add-calendar-twoWeeks">
                    <li>
                      <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
      <div class="modal fade" aria-hidden="true" id="modal-one-month" data-milestone="oneMonthDate" tabindex="-1" role="dialog" aria-labelledby="modal-header-one-month">
        <div class="modal-dialog modal-quit-plan modal-reward" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="modal-header-one-month">
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/SF_Vet_Calendars_Calendar.png" alt="calendar icon" width="34" height="40"> 1 month tobacco free:</h4>
            </div>
            <div class="modal-body">
              <p>A whole month without tobacco means that withdrawal is behind you and cravings are becoming less intense.</p>
              <fieldset>
                <img class="modal-icon" src="/sites/all/themes/sfg/images/sf-vet/basket.png" alt="shopping basket" />
                <legend>
                  Celebrate this milestone with a reward:</legend>
                <div class="validation-error collapse">
                  <p class="alert alert-error">Please enter at least one reward and a valid date (mm-dd-yyyy)</p>
                </div>
                <div class="validation-success collapse">
                  <p class="alert alert-success">The reward you selected is now on your calendar!</p>
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneMonth.reward.one">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneMonth.reward.one" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneMonth.reward.two">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneMonth.reward.two" />
                </div>
                <div class="control-group">
                  <label class="sr-only" for="milestones.oneMonth.reward.three">Type in a reward!</label>
                  <input aria-required="true" class="form-control milestone-input" type="text" placeholder="Type in a reward!" id="milestones.oneMonth.reward.three" />
                </div>
                <input aria-required="true" class="form-control milestone-date-picker" placeholder=" mm-dd-yyyy" type="text" id="milestones.oneMonth.date" />
                <div class="dropdown dropdown-add-calendar">
                  <button type="button" data-target="dropdown-add-calendar-oneMonth" data-toggle="dropdown" class="dropdown-toggle btn-milestone" role="button" id="add-calendar-oneMonth">Add <span class="sr-only">one month reward</span> to calendar</button>
                  <ul class="dropdown-menu quitplan-dropdown-menu dropdown-menu-add-calendar" role="menu" id="dropdown-add-calendar-oneMonth" aria-labelledby="add-calendar-oneMonth">
                    <li>
                      <button type="button" class="btn btn-link" data-service="google">Google Calendar</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="appleical">iCal</button>
                    </li>
                    <li>
                      <button type="button" class="btn btn-link" data-service="outlook">Outlook</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->

      <div class="section-body">
        <a href="#reasons" class="next-section trigger-scroll">
          reasons
        </a>
      </div>
      <?php print render($form['milestones_24hours']);?>
      <?php print render($form['milestones_48hours']);?>
      <?php print render($form['milestones_oneWeek']);?>
      <?php print render($form['milestones_twoWeeks']);?>
      <?php print render($form['milestones_oneMonth']);?>

      <div class="section-divider"></div>
    </section>
    <!-- what are your reasons for quitting
/////////////////////////////////////////////////////////////////////////// -->
    <section id="reasons" class="reasons quit-plan-panel" data-validation="valid-checklist">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/reasons.jpg" alt="man making list in notepad with pen" />
        <h2>
          <span class="section-head-top"><span>WHAT ARE YOUR REASONS</span></span>
          <span class="section-head-bottom"> FOR QUITTING</span>
        </h2>
      </div>

      <div class="section-body">
        <p>Everyone has their own reasons for wanting to be tobacco free.</p>

        <fieldset>
          <legend>Choose your reasons for quitting smoking or for quitting dip or chew.</legend>
          <div class="reason-options-wrap clearfix">
            <?php print render($form['reasons_for_quitting']); ?>
          </div>
        </fieldset>

        <a href="#identify" class="next-section trigger-scroll">
          identify
        </a>
      </div>
      <div class="section-divider"></div>
    </section>
    <!-- identify your smoking triggers
/////////////////////////////////////////////////////////////// -->
    <section id="identify" class="identify quit-plan-panel" data-validation="valid-checklist" data-required="data-required">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/triggers.jpg" alt="cup of coffee" />
        <h2>
          <span class="section-head-top"><span>IDENTIFY</span></span>
          <span class="section-head-bottom"> YOUR TOBACCO USE</BR>TRIGGERS</span>
        </h2>
      </div>

      <div class="section-body">
        <div class="validation-error section-error collapse">
          <p class="alert alert-error">Please select your smoking trigger(s)</p>
        </div>

        <p>Knowing your triggers helps you stay in control. When you first quit, you might want to completely avoid your triggers. After staying quit for a while, you may find other ways to handle your triggers.</p>

        <p><span class="form-required">*</span>Here are some common tobacco use triggers:</p>

        <div class="row triggers-block">
          <div class="triggers col-sm-4">
            <fieldset>
              <legend>Emotional Triggers</legend>
              <?php print render($form['triggers_emotional']);?>
            </fieldset>
          </div>
          <div class="triggers col-sm-4">
            <fieldset>
              <legend>Habitual Triggers</legend>
              <?php print render($form['triggers_habitual']);?>
            </fieldset>
          </div>
          <div class="triggers col-sm-4">
            <fieldset>
              <legend>Social Triggers</legend>
              <?php print render($form['triggers_social']);?>
            </fieldset>
          </div>
        </div>

        <a href="#cravings" class="next-section trigger-scroll">
          cravings
        </a>
      </div>
      <div class="section-divider"></div>
    </section>
    <!-- fight cravings
////////////////////////////////////////////////////////////////////////////// -->
    <section id="cravings" class="cravings quit-plan-panel" data-validation="valid-checklist">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/cravings.jpg" alt="girl doing yoga" />
        <h2>
          <span class="section-head-top"><span>WHAT WILL YOU NEED TO</span></span>
          <span class="section-head-bottom"> FIGHT CRAVINGS</span>
        </h2>
      </div>

      <div class="section-body">
          <p>Cravings only last a few minutes, but those minutes can be tough.</p>
          <p><strong>Build your quit kit:</strong> Think about the kinds of cravings you experience, and collect the things you will use to help you get through each one.</p>
          <p>Consider talking to your provider about using tobacco cessation medications such as Nicotine Replacement Therapy as tools to help you work through cravings as you stop using tobacco.</p>
        <div class="accordion-cravings" id="accordion1">
          <?php print render($form['fight_cravings']);?>
        </div>

        <a href="#reminders" class="next-section trigger-scroll">
          reminders
        </a>
      </div>
      <div class="section-divider"></div>
    </section>
    <!-- smoking reminders
    //////////////////////////////////////////////////////////////////////////////////////////// -->
    <section id="reminders" class="reminders quit-plan-panel">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/reminder.jpg" alt="hand holding trash bag" />
        <h2>
          <span class="section-head-top"><span>GET RID OF</span></span>
          <span class="section-head-bottom"> REMINDERS</span>
        </h2>
      </div>

      <div class="section-body">
        <div class="validation-error section-error collapse">
          <p class="alert alert-error">Please select your smoking reminders(s)</p>
        </div>
          <fieldset>
              <legend>Get ready for your quit day by clearing your spaces of anything associated with tobacco. This includes your home, car, workplace, and any other places you can think of!</legend>
          <div class="smoking-reminders-wrap clearfix">
            <div class="reminder">
              <img src="/sites/all/themes/sfg/images/sf-vet/wash-clothes.png" alt="clothes">
              <p>
                Wash your clothing, especially the jacket you wear to take smoke breaks.
              </p>
            </div>
            <div class="reminder">
              <img src="/sites/all/themes/sfg/images/sf-vet/wash-car.png" alt="car icon">
              <p>
                Clean your car.
              </p>
            </div>
            <div class="reminder clear-both">
              <img src="/sites/all/themes/sfg/images/sf-vet/trash.png" alt="trash can">
              <p>
                Get rid of matches, ashtrays, and any cigarette butts that may be outside your home.
              </p>
            </div>
            <div class="reminder">
              <img src="/sites/all/themes/sfg/images/sf-vet/quit-items.png" alt="table ornaments">
              <p>
                Put your quit kit items in the places where you kept your cigarettes, dip or chew, ashtrays, matches, and lighters.
              </p>
            </div>
          </div>
        </fieldset>
        <p>The night before quit day, throw away everything that is related to tobacco. Don’t hide a pack in your freezer or stash your ashtrays in the back of a cabinet.</p>
        <p class="emphasis">Everything must go!</p>

        <a href="#help" class="next-section trigger-scroll">
          help
        </a>
      </div>
      <div class="section-divider"></div>
    </section>
    <!-- get all the help you can find
///////////////////////////////////////////////////////////////////////////////////////// -->
    <section id="help" class="help quit-plan-panel" data-validation="valid-checklist">
      <div class="section-head">
        <img src="/sites/all/themes/sfg/images/sf-vet/help.jpg" alt="two people holding hands" >
        <h2>
          <span class="section-head-top"><span>GET ALL THE HELP</span></span>
          <span class="section-head-bottom">YOU CAN FIND</span>
        </h2>
      </div>

      <div class="section-body">
          <p>Using <a href="http://www.publichealth.va.gov/smoking/quit/medications.asp" target="_blank">medications and/or nicotine replacement therapy (NRT)</a> can improve your chances of quitting for good. Make an appointment with your health care provider to find out which options are best for you.</p>
          <p>There are lots of other tools available to make quitting more manageable. Explore these resources to find what is right for you.</p>
        <div id="accordion-help">
          <?php print render($form['extra_help']);?>
        </div>
      </div>
    </section>

    <section class="tell clearfix quit-plan-panel">
      <h2 class="tell-friends">Tell friends and family.</h2>
      <div class="section-body">
        <p>Quitting tobacco is easier when you have support from your loved ones. Let your family and friends know that you are quitting, or invite a friend to quit with you.</p>
        <div class="send-invite">
          <div class="dropdown dropdown-tell-friends-family">
            <button type="button" data-target="dropdown-tell-friends-family" data-toggle="dropdown" class="dropdown-toggle button btn-quit-plan tell-friends-family-btn" role="button" id="tell-friends-family">Tell Friends and Family You’re Quitting</button>
            <ul class="quitplan-dropdown-menu dropdown-menu dropdown-menu-tell-friends-family" role="menu" id="dropdown-tell-friends-family" aria-labelledby="tell-friends-family">
              <li>
                <a class="btn btn-link" data-service="SendMessage" type="button" href="mailto:?subject=I%27m%20becoming%20tobacco%20free%20and%20I%20need%20your%20help!&amp;body=On%20%5BQuit%20Date%5D%20I%27m%20quitting%20tobacco.%0D%0A%0D%0A%20I%27m%20letting%20you%20know%20this%20because%20quitting%20will%20be%20tough,%20but%20having%20the%20support%20of%20my%20loved%20ones%20will%20make%20it%20a%20little%20easier.%20I%20hope%20that%20I%20can%20turn%20to%20you%20for%20help%20during%20my%20journey%20to%20become%20tobacco%20free.%0D%0A%0D%0AI%20look%20forward%20to%20sharing%20this%20new%20chapter%20of%20my%20life%20with%20you.%0D%0ASincerely,%0D%0A%5BName%5D">Send an email</a>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="Facebook">Share on Facebook</button>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="Twitter" data-sharetext="I'm quitting smoking. Please support me as I work to become #smokefree.">Share on Twitter</button>
              </li>
              <li>
                <button type="button" class="btn btn-link tell-friends-family-skip" data-service="skip">Skip This Step</button>
              </li>
            </ul>
          </div>
          <div class="dropdown dropdown-invite-friend">
            <button type="button" data-target="dropdown-invite-friend" data-toggle="dropdown" class="dropdown-toggle button btn-quit-plan invite-friend-btn" role="button" id="invite-friend">Invite a friend to quit with you</button>
            <ul class="quitplan-dropdown-menu dropdown-menu dropdown-menu-invite-friend" role="menu" id="dropdown-invite-friend" aria-labelledby="invite-friend">
              <li>
                <a class="btn btn-link" data-service="SendMessage" type="button" href="mailto:?subject=Will%20you%20become%20tobacco%20free%20with%20me?&amp;body=On%20%5BQuit%20Date%5D%20I%27m%20quitting%20smoking%20and%20I%20want%20you%20to%20quit%20with%20me.%0D%0A%0D%0ABecoming%20tobacco%20free%20is%20easier%20when%20you%20do%20it%20with%20someone%20you%20care%20about.%20Let%27s%20take%20the%20tobacco%20free%20journey%20together,%20and%20we%20can%20help%20and%20support%20each%20other%20along%20the%20way.%0D%0A%0D%0AI%20look%20forward%20to%20sharing%20this%20new%20chapter%20of%20my%20life%20with%20you.%0D%0A%0D%0ASincerely,%0D%0A%5BName%5D">Send an email</a>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="Facebook">Share on Facebook</button>
              </li>
              <li>
                <button type="button" class="btn btn-link" data-service="Twitter" data-sharetext="I’m quitting smoking. Want to become #smokefree with me?">Share on Twitter</button>
              </li>
              <li>
                <button type="button" class="btn btn-link invite-friend-skip" data-service="skip">Skip This Step</button>
              </li>
            </ul>
          </div>
        </div>
        <a href="#show" class="next-section trigger-scroll">
          show
        </a>
      </div>
      <div class="section-divider"></div>
    </section>

    <section id="show">
      <?php print render($form['submit']); ?>
    </section>
    <div id="bottom_trigger"></div>
</div>
<?php
print render($form['form_id']);
print render($form['form_build_id']);
print render($form['form_token']);
?>