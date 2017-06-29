(function ($) {
    Drupal.behaviors.buildYourQuitPlanModule = {
        attach: function () {
            var calendarConfig = {
                    autoclose    : true,
                    format       : 'mm-dd-yyyy'
                },
                $quitDay        = $('#quit-day'),
                $milestones     = $('#milestones'),
                dates            = {},

                milestones       = {
                    "_24HoursDate" : [],
                    "_48HoursDate" : [],
                    "oneWeekDate"  : [],
                    "twoWeeksDate" : [],
                    "oneMonthDate" : []
                };

            function _init() {
                $("#progress_bar").hide();
                if ($("#milestones\\.24hours").val() && $("#milestones\\.24hours").val().length > 0) {
                    milestones._24HoursDate = JSON.parse($("#milestones\\.24hours").val());
                }
                if ($("#milestones\\.48hours").val() && $("#milestones\\.48hours").val().length > 0) {
                    milestones._48HoursDate = JSON.parse($("#milestones\\.48hours").val());
                }
                if ($("#milestones\\.oneWeek").val() && $("#milestones\\.oneWeek").val().length > 0) {
                    milestones.oneWeekDate = JSON.parse($("#milestones\\.oneWeek").val());
                }
                if ($("#milestones\\.twoWeeks").val() && $("#milestones\\.twoWeeks").val().length > 0) {
                    milestones.twoWeeksDate = JSON.parse($("#milestones\\.twoWeeks").val());
                }
                if ($("#milestones\\.oneMonth").val() && $("#milestones\\.oneMonth").val().length > 0) {
                    milestones.oneMonthDate = JSON.parse($("#milestones\\.oneMonth").val());
                }
                if (_validDate($quitDay.val())) {
                    dateSet_quitPlan();
                    $milestones.addClass('in');
                }

                var msg = $('.messages');
                console.log(msg.html());
                if (msg.length && msg.html().indexOf("Please enter your Quit Day") > -1) {
                    $('#mark .validation-error').addClass('in')
                    _scrollTo($('#mark'));
                }
            }

            function _validDate(date) {
                var datePattern = /[0-9]{2}-[0-9]{2}-[0-9]{4}/;

                return datePattern.test(date);
            }

            function _addEvent(service, data) {
                var url = 'https://addevent.com/dir/?'
                    + 'client=alytbm1p6z01u48glmv7810'
                    + "&service="       + encodeURIComponent(service)
                    + "&start="         + encodeURIComponent(data.date.replace(new RegExp("-", "g"), '/'))
                    + "&end="           + encodeURIComponent(data.date.replace(new RegExp("-", "g"), '/'))
                    + "&title="         + encodeURIComponent(data.title)
                    + "&date_format="   + encodeURIComponent("MM/DD/YYYY")
                    + "&timezone="      + encodeURIComponent("America/Chicago")
                    + "&all_day_event=true";

                window.open(url);
            }

             function _trackEvent(params) {
                var eventDefaults = {
                        category : 'QuitPlan',
                        action   : undefined,
                        label    : undefined
                    },
                    eventParams = {};

                $.extend(eventParams, eventDefaults, params);

                if (window.ga) {
                    window.ga('send', 'event', eventParams.category, eventParams.action, eventParams.label);
                }
             }

            function _scrollTo($target) {
                var extra_scroll = 10;
                if (document.body.scrollTop > $target.offset().top) {
                    extra_scroll = -10;
                }
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top + extra_scroll
                }, 250, 'swing');
            }

            function dateSet_quitPlan() {
                var date;

                $('#get-quit-day').text($quitDay.val());

                dates.quitDate = $quitDay.datepicker('getDate');
                date = dates.quitDate.getDate();

                dates._24HoursDate = new Date(dates.quitDate);
                dates._24HoursDate.setDate(date + 1);

                dates._48HoursDate = new Date(dates.quitDate);
                dates._48HoursDate.setDate(date + 2);

                dates.oneWeekDate = new Date(dates.quitDate);
                dates.oneWeekDate.setDate(date + 7);

                dates.twoWeeksDate = new Date(dates.quitDate);
                dates.twoWeeksDate.setDate(date + 14);

                dates.oneMonthDate = new Date(dates.quitDate);
                dates.oneMonthDate.setMonth(dates.quitDate.getMonth() + 1);

                $(document.getElementById('milestones.24Hours.date')).datepicker('setDate', dates._24HoursDate);
                $(document.getElementById('milestones.48Hours.date')).datepicker('setDate', dates._48HoursDate);
                $(document.getElementById('milestones.oneWeek.date')).datepicker('setDate', dates.oneWeekDate);
                $(document.getElementById('milestones.twoWeeks.date')).datepicker('setDate', dates.twoWeeksDate);
                $(document.getElementById('milestones.oneMonth.date')).datepicker('setDate', dates.oneMonthDate);
            }

            function _getRewardString(modal) {
                var rewardInputs        = modal.find('.milestone-input'),
                    concatenatedString  = [];

                rewardInputs.each(function () {
                    var value = $(this).val();

                    if (value.length > 0) {
                        concatenatedString.push(value);
                    }
                });

                return concatenatedString.join(',');
            }

            function _addMilestone(milestone, data) {
                var milestoneTemplate = '<li><span class="plan-input date">{{date}}</span> <span class="plan-input title">{{title}}</span></li>',
                    milestoneList = $(document.getElementById('get.milestones.' + milestone)).find('.milestone-selections');

                milestoneList.append(milestoneTemplate.replace('{{date}}', data.date).replace('{{title}}', data.title));
            }

            $('.trigger-scroll').on('click', function (e) {
                e.preventDefault();

                var $target = $(this.hash);
                _scrollTo($target);
            });

            $('#quit-day').datepicker(calendarConfig)
            .on("changeDate", function () {
                if (_validDate($quitDay.val())) {
                    dateSet_quitPlan();
                    $milestones.addClass('in');

                    _trackEvent({
                        action: 'QuitDate',
                        label: $quitDay.val()
                    });
                }
            });

            $quitDay.on('blur', function () {
                if (_validDate($quitDay.val())) {
                    dateSet_quitPlan();
                }
            });

            $(".accordion-heading.accordion-toggle.extra_help, .accordion-heading.accordion-toggle.fight_cravings").each(function() {
                var input = $(this).find('input[type=checkbox]:first');
                var accordion_body = $(this).next('.accordion-body');
                if(input.prop('checked')) {
                    accordion_body.collapse('show');
                }
            });
            $(".accordion-heading.accordion-toggle.extra_help, .accordion-heading.accordion-toggle.fight_cravings").on('click', function (event) {
                var input = $(this).find('input[type=checkbox]:first');
                var input_checkbox = $(this).find('.form-item.form-type-checkbox:first');
                input.prop('checked', !input.prop('checked'));
                if (input.prop('checked')) {
                    input_checkbox.addClass('selected');
                } else {
                    input_checkbox.removeClass('selected');
                }
            });

            $('#dropdown-add-calendar-quit-day button').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                var quitDay = $('#quit-day').val(),
                    service = $(this).attr('data-service'),
                    data;

                if (_validDate(quitDay)) {
                    data = {
                        date    : quitDay,
                        title   : 'My quit day'
                    };

                    _addEvent(service, data);
                }
            });

            var TWITTER_URL  = 'https://twitter.com/share',
                FB_URL       = 'https://www.facebook.com/dialog/share',
                FB_ID        = (window.location.host === 'smokefree-stage.icfwebservices.com') ? '386167128241977' : '117297181948684',
                width        = 575,
                height       = 400,
                left         = ($(window).width()  - width)  / 2,
                top          = ($(window).height() - height) / 2,
                share_url    = (window.location.host === 'smokefree-stage.icfwebservices.com') ? 'https://smokefree-stage.icfwebservices.com/build-your-quit-plan' : 'https://www.smokefree.gov/build-your-quit-plan';
                redirect_uri = (window.location.host === 'smokefree-stage.icfwebservices.com') ? 'https://smokefree-stage.icfwebservices.com/sites/all/themes/sfg/quit-plan/facebook-thanks.html' : 'https://www.smokefree.gov/sites/all/themes/sfg/quit-plan/facebook-thanks.html',
                text         = 'I’m quitting smoking. Want to become #smokefree with me?',
                windowConfig = 'status=1'
                    + ',width='  + width
                    + ',height=' + height
                    + ',top='    + top
                    + ',left='   + left;

            $('#send-message').on('click', function () {
                _trackEvent({
                    'action' : 'SendMessage'
                });
            });

            $('.dropdown-invite-friend .btn-link, .dropdown-tell-friends-family .btn-link').on('click', function (event) {
                var url,
                    service = $(this).attr('data-service');
                if ($(this).attr('data-sharetext')) {
                    text = $(this).attr('data-sharetext');
                }
                switch (service) {
                    case 'Twitter':
                        url = TWITTER_URL
                        + '?url='         + encodeURIComponent(share_url)
                        + '&text='        + encodeURIComponent(text);

                        window.open(url, 'share', windowConfig);

                        break;
                    case 'Facebook':
                        url = FB_URL
                        + '?app_id='          + FB_ID
                        + '&display='         + 'popup'
                        + '&href='            + encodeURIComponent(share_url)
                        + '&redirect_uri='    + encodeURIComponent(redirect_uri);

                        window.open(url, 'share', windowConfig);

                        break;

                    case 'SendMessage':
                        event.preventDefault();
                        event.stopPropagation();
                        mailto_href = $(this).attr('href');
                        quitDay = $('#quit-day').val();
                        if (quitDay.length > 0) {
                            mailto_href = mailto_href.replace('%5BQuit%20Date%5D', quitDay);
                        }
                        window.location.assign(mailto_href);
                        break;
                }
                _trackEvent({
                    'action' : 'InviteQuitBuddy',
                    'label'  : service
                });
            });

            $('.modal-reward .dropdown-menu button').on('click', function (event) {
                    event.preventDefault();

                    var modal       = $(this).parents('.modal'),
                        milestone   = modal.attr('data-milestone'),
                        service     = $(this).attr('data-service'),
                        reward;

                        reward = {
                            date    : modal.find('.milestone-date-picker').val(),
                            title   : _getRewardString(modal)
                        };

                        milestones[milestone].push(reward);

                        _addMilestone(milestone, reward);

                        _addEvent(service, reward);

                        modal.find('.milestone-input').val('');
                        modal.find('.milestone-date-picker').datepicker('setDate', dates[milestone]);
            });

            $('.modal-activity .dropdown-menu button').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                var modal       = $(this).parents('.modal'),
                    milestone   = modal.attr('data-milestone'),
                    service     = $(this).attr('data-service'),
                    activity;

                activity = {
                    date    : modal.find('.milestone-date-picker').val(),
                    title   : modal.find('.milestone-input').eq(0).val()
                };

                milestones[milestone].push(activity);

                _addMilestone(milestone, activity);

                _addEvent(service, activity);

                modal.find('.milestone-input').val('');
                modal.find('.milestone-date-picker').datepicker('setDate', dates[milestone]);
            });
            $('#get-my-quit-plan').on('click', function (event) {
                if (milestones._24HoursDate.length > 0) {
                    $("#milestones\\.24hours").val(JSON.stringify(milestones._24HoursDate));
                }
                if (milestones._48HoursDate.length > 0) {
                    $("#milestones\\.48hours").val(JSON.stringify(milestones._48HoursDate));
                }
                if (milestones.oneWeekDate.length > 0) {
                    $("#milestones\\.oneWeek").val(JSON.stringify(milestones.oneWeekDate));
                }
                if (milestones.twoWeeksDate.length > 0) {
                    $("#milestones\\.twoWeeks").val(JSON.stringify(milestones.twoWeeksDate));
                }
                if (milestones.oneMonthDate.length > 0) {
                    $("#milestones\\.oneMonth").val(JSON.stringify(milestones.oneMonthDate));
                }

                _trackEvent({
                    'action' : 'GetQuitPlan',
                    'label'  : "valid"
                });

                if (_validDate($quitDay.val())) {
                    $("#edit-reasons-for-quitting input:checkbox, #edit-triggers-emotional input:checkbox, #edit-triggers-habitual input:checkbox, #edit-triggers-social input:checkbox, #edit-fight-cravings input:checkbox, #edit-extra-help input:checkbox").each(function() {
                        if (this.checked) {
                            var action  = this.getAttribute('data-ga-action'),
                                label   = this.getAttribute('data-ga-label');
                            _trackEvent({
                                action: action,
                                label: label
                            });
                        }
                    });
                }
            });

            $('#generate-pdf, #generate-pdf-bottom').on('click', function () {
                _trackEvent({
                    'action' : 'GetPrintablePDF'
                });
            });

            _init();
        }
    }
}(jQuery));
