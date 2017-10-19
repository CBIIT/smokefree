jQuery( document ).ready(function( $ ) {
  "use strict";

  $(window).load(function(){
    $(".quiz-dip-inner").attr("aria-live","polite");
    $(".quiz-dip-feedback-block").attr("aria-hidden","true");
    $(".quiz-dip-feedback").attr("aria-hidden","true");
  });

  $(document).bind("ajaxSuccess", function(){
    $(".quiz-dip-inner").attr("aria-live","polite");
    $(".quiz-dip-feedback-block").attr("aria-hidden","true");
    $(".quiz-dip-feedback").attr("aria-hidden","true");
  });

  // Mouse select
  $(".quiz-dip-question .form-type-radio label").mouseup(function (event) {

    $(".quiz-dip-question .form-type-radio label").addClass("disabled");
    $(this).removeClass("disabled").parent(".form-type-radio").addClass("selected");
    var currentQuestion = $(this).parents(".quiz-dip-question").find(".control-label").attr("for");
    currentQuestion = currentQuestion.replace("edit-submitted-", "");
    var currentAnswer = $(this).attr("for");
    currentAnswer = currentAnswer.replace("edit-submitted", "answer");

    $(".quiz-dip-feedback-block").attr("aria-hidden","true");
    $(".quiz-dip-feedback").attr("aria-hidden","true");

    $(".quiz-dip-feedback-"+currentQuestion).addClass("current-feedback").attr("aria-hidden","false");
    $("."+currentAnswer).addClass("current-feedback").attr("aria-hidden","false");
    $("."+currentQuestion+"-summary").addClass("current-feedback").attr("aria-hidden","false");
    $(".quiz-dip-inner .webform-next").addClass("feedback");
    $(".quiz-dip-inner .webform-previous").addClass("feedback");
    $(".quiz-dip-inner .webform-submit").addClass("feedback");
  });

  // Keyboard select (spacebar)
  $(".quiz-dip-question .form-type-radio label").keydown(function(event) {
    if ((event.keycode || event.which) == 32) {

      $(".quiz-dip-question .form-type-radio label").addClass("disabled");
      $(this).removeClass("disabled").parent(".form-type-radio").addClass("selected");

      var currentQuestion = $(this).parents(".quiz-dip-question").find(".control-label").attr("for");
      currentQuestion = currentQuestion.replace("edit-submitted-", "");
      var currentAnswer = $(this).attr("for");
      currentAnswer = currentAnswer.replace("edit-submitted", "answer");

      $(".quiz-dip-feedback-block").attr("aria-hidden","true");
      $(".quiz-dip-feedback").attr("aria-hidden","true");

      $(".quiz-dip-feedback-"+currentQuestion).addClass("current-feedback").attr("aria-hidden","false");
      $("."+currentAnswer).addClass("current-feedback").attr("aria-hidden","false");
      $("."+currentQuestion+"-summary").addClass("current-feedback").attr("aria-hidden","false");
      $(".quiz-dip-inner .webform-next").addClass("feedback");
      $(".quiz-dip-inner .webform-previous").addClass("feedback");
      $(".quiz-dip-inner .webform-submit").addClass("feedback");
    };
  });

  // Add focus to label
  $(".quiz-dip-question .form-type-radio input").focus(function(e){
    $(".quiz-dip-question .form-type-radio label").removeClass("focus");
    $(this).parent().addClass("focus");
  });
});
