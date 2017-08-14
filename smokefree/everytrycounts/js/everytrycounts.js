var base_url = "http://smokefreegit.docksal";
var quiz_questions_path = "/true-false-quiz-json-questions";
var daily_challenges_path = "/daily-challenge-json";
var quiz_nid = "810";

fallback.load({
    global_css: 'css/bootstrap.min.css',
    page_css: 'css/style.css',
    animate: 'css/animate.css',
    jQuery: [
        '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
        'js/jquery-3.2.1.min.js'
    ],
    'vue': [
        '//unpkg.com/vue@2.4.2',
        'js/vue.min.js'
    ],
    'axios': [
        '//unpkg.com/axios@0.16.2/dist/axios.min.js',
        'js/axios-master/dist/axios.min.js'
    ]
}, {
    shim: {
        'bootstrap': [
            'js/bootstrap.js'
        ],
    },
    callback: function(success, failed) {
        var vm = new Vue({
            el: "#app",
            data: {
                current_quiz_question_number: 1,
                current_daily_challenge_number: 1,
                total_quiz_questions: 7,
                total_daily_challenges: 7,
                all_quiz_questions: [],
                all_daily_challenges: [],
                answer_selected: "",
                correct_answers: 0,
                show_quiz_part: "question",
                quiz_next_button_text: "next",
                daily_challenge_next_button_text: "NEXT CHALLENGE"
            },
            mounted: function () {
                axios.get(base_url + quiz_questions_path + '/' + quiz_nid)
                    .then(function (response) {
                        vm.all_quiz_questions = response.data.nodes;
                        vm.total_quiz_questions = vm.all_quiz_questions.length;
                        vm.current_quiz_question_number = 1;
                    });
                axios.get(base_url + daily_challenges_path)
                    .then(function (response) {
                        vm.all_daily_challenges = response.data.nodes;
                        vm.total_daily_challenges = vm.all_daily_challenges.length;
                        vm.current_daily_challenge_number = 1;
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
                        this.quiz_next_button_text = this.current_quiz_question_number == this.total_quiz_questions ? "RESULTS" : "Next";
                    }
                    else {
                        this.show_quiz_part="results";
                    }

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
                reset_quiz: function () {
                    this.answer_selected = "";
                    this.current_quiz_question_number = 1;
                    this.correct_answers = 0;
                    this.show_quiz_part="question";
                }
            },
        });
    }
});