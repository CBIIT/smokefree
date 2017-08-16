var quiz_questions_path = "/true-false-quiz-json-questions";
var quiz_answers_path = "/true-false-quiz-json-answers";
var daily_challenges_path = "/daily-challenge-json";
var crave_tips_path = "/crave-tip-json"
var quiz_title = "How Does Smoking Harm Your Body";
var program_challenge_opt_in_path = "OPD68A526E6545B2403E05609C77E3BD62";
var program_practice_opt_in_path = "OP199DA2CFFA269A4F0675809DEB4A75CE";
var program_quit_opt_in_path = "OPF1DF0FF02128C81EF4A5EF9FF7BD2471";
var mobile_commons_url = "https://secure.mcommons.com/profiles/join";
var text_signup_confirmation_message = "Check your phone for a text message from 47848. Respond to the questions to complete enrollment.";
var text_signup_error_message = "Unable to process your request at this time. Please try again later.";


fallback.load({
    global_css: 'css/bootstrap.min.css',
    page_css: 'css/style.css',
    animate: 'css/animate.css',
    jQuery: [
        '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
        'js/jquery-1.12.4.min.js'
    ],
    'vue': [
        '//unpkg.com/vue@2.4.2',
        'js/vue.min.js'
    ],
}, {
    shim: {
        'bootstrap': [
            'js/bootstrap.min.js'
        ],
    },
    callback: function(success, failed) {
        var vm = new Vue({
            el: "#app",
            data: {
                current_quiz_question_number: 1,
                current_daily_challenge_number: 1,
                current_crave_tip_number: 1,
                total_quiz_questions: 7,
                total_daily_challenges: 7,
                total_crave_tips: 7,
                all_quiz_questions: [],
                all_daily_challenges: [],
                all_quiz_responses: [],
                all_crave_tips: [],
                final_quiz_response: "",
                answer_selected: "",
                correct_answers: 0,
                show_quiz_part: "question",
                quiz_next_button_text: "next",
                daily_challenge_next_button_text: "NEXT CHALLENGE",
                show_program_challenge: false,
                show_program_practice: false,
                show_program_quit: false,
                show_program_challenge_submit: true,
                show_program_practice_submit: true,
                show_program_quit_submit: true,
                program_challenge_confirmation: "Submitting...",
                program_practice_confirmation: "Submitting...",
                program_quit_confirmation: "Submitting...",
                program_challenge_phone: "",
                program_practice_phone: "",
                program_quit_phone: "",
            },
            mounted: function () {
                $.ajax({
                    url: quiz_questions_path + '/' + quiz_title,
                    method: 'GET',
                    success: function (data) {
                        vm.all_quiz_questions = data.nodes;
                        vm.total_quiz_questions = vm.all_quiz_questions.length;
                        vm.current_quiz_question_number = 1;
                        console.log(vm.all_quiz_questions);
                    },
                    error: function (error) {
                        alert(JSON.stringify(error));
                    }
                });
                $.ajax({
                    url: quiz_answers_path + '/' + quiz_title,
                    method: 'GET',
                    success: function (data) {
                        vm.all_quiz_responses = data.nodes;
                    },
                    error: function (error) {
                        alert(JSON.stringify(error));
                    }
                });
                $.ajax({
                    url: daily_challenges_path,
                    method: 'GET',
                    success: function (data) {
                        vm.all_daily_challenges = data.nodes;
                        vm.total_daily_challenges = vm.all_daily_challenges.length;
                        vm.current_daily_challenge_number = 1;
                    },
                    error: function (error) {
                        alert(JSON.stringify(error));
                    }
                });
                $.ajax({
                    url: crave_tips_path,
                    method: 'GET',
                    success: function (data) {
                        vm.all_crave_tips = data.nodes;
                        console.log(vm.all_crave_tips[0].node.field_crave_tip_image.src);
                        vm.total_crave_tips = vm.all_crave_tips.length;
                        vm.current_crave_tip_number = 1;
                    },
                    error: function (error) {
                        alert(JSON.stringify(error));
                    }
                });
            },
            methods: {
                record_answer: function(e) {
                    btn = e.target || e.srcElement;
                    this.answer_selected = btn.id;
                    if (this.answer_selected == this.all_quiz_questions[this.current_quiz_question_number - 1].node.field_correct_answer) {
                        this.correct_answers++;
                    }
                    this.show_quiz_part="feedback";
                },
                next_quiz_question: function () {
                    this.answer_selected = "";
                    if (this.current_quiz_question_number < this.total_quiz_questions) {
                        this.current_quiz_question_number++;
                        this.show_quiz_part="question";
                    }
                    else {
                        this.final_quiz_response = "You got " + this.correct_answers + " out of " + this.total_quiz_questions + " correct.";
                        for (i = 0; i < this.all_quiz_responses.length; i++) {
                            if (this.all_quiz_responses[i].node.field_number_correct == this.correct_answers) {
                                this.final_quiz_response = this.all_quiz_responses[i].node.field_result_message;
                            }
                        }
                        this.show_quiz_part="results";
                    }
                    this.quiz_next_button_text = this.current_quiz_question_number == this.total_quiz_questions ? "RESULTS" : "Next";
                },
                next_daily_challenge: function() {
                    if (this.current_daily_challenge_number < this.total_daily_challenges) {
                        this.current_daily_challenge_number++;
                    }
                    else {
                        this.current_daily_challenge_number = 1;
                    }
                    this.daily_challenge_next_button_text = this.current_daily_challenge_number == this.total_daily_challenges ? "START OVER" : "NEXT CHALLENGE";
                },
                next_crave_tip: function(e) {
                    e.preventDefault();
                    if (this.current_crave_tip_number < this.total_crave_tips) {
                        this.current_crave_tip_number++;
                    }
                    else {
                        this.current_crave_tip_number = 1;
                    }
                },
                previous_crave_tip: function(e) {
                    e.preventDefault();
                    if (this.current_crave_tip_number > 1) {
                        this.current_crave_tip_number--;
                    }
                    else {
                        this.current_crave_tip_number = this.total_crave_tips;
                    }
                },
                reset_quiz: function () {
                    this.answer_selected = "";
                    this.current_quiz_question_number = 1;
                    this.correct_answers = 0;
                    this.show_quiz_part="question";
                    this.quiz_next_button_text = "next";
                },
                toggle_program_challenge: function() {
                    this.show_program_challenge = !this.show_program_challenge;
                },
                toggle_program_practice: function() {
                    this.show_program_practice = !this.show_program_practice;
                },
                toggle_program_quit: function() {
                    this.show_program_quit = !this.show_program_quit;
                },
                send_challenge_signup: function() {
                    this.show_program_challenge_submit = false;
                    var request = $.ajax({
                        url: mobile_commons_url,
                        type: "POST",
                        data: {
                            opt_in_path: this.program_challenge_opt_in_path,
                            person_phone: this.program_challenge_phone
                        },
                        dataType: "html"
                    });
                    request.done(function(msg) {
                        console.log(msg)
                        vm.program_challenge_confirmation = text_signup_confirmation_message;
                    });
                    request.fail(function(jqXHR, textStatus) {
                        console.log(textStatus);
                        vm.program_challenge_confirmation = this.text_signup_error_message;
                    });
                },
                send_practice_signup: function() {
                    this.show_program_practice_submit = false;
                    var request = $.ajax({
                        url: mobile_commons_url,
                        type: "POST",
                        data: {
                            opt_in_path: this.program_practice_opt_in_path,
                            person_phone: this.program_practice_phone
                        },
                        dataType: "html"
                    });
                    request.done(function(msg) {
                        console.log(msg)
                        vm.program_practice_confirmation = text_signup_confirmation_message;
                    });
                    request.fail(function(jqXHR, textStatus) {
                        console.log(textStatus);
                        vm.program_practice_confirmation = text_signup_error_message;
                    });
                },
                send_quit_signup: function() {
                    this.show_program_quit_submit = false;
                    var request = $.ajax({
                        url: mobile_commons_url,
                        type: "POST",
                        data: {
                            opt_in_path: this.program_quit_opt_in_path,
                            person_phone: this.program_quit_phone
                        },
                        dataType: "html"
                    });
                    request.done(function(msg) {
                        vm.program_quit_confirmation = text_signup_confirmation_message;
                    });
                    request.fail(function(jqXHR, textStatus) {
                        vm.program_quit_confirmation = text_signup_error_message;
                    });
                },
            },
        });
    }
});