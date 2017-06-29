/**
 * Created by 37341 on 10/25/16.
 */
( function($) {
    $(document).ready(function() {
        //main menu empty btn for screen reader
        $('#mega-desktop #tb-megamenu-main-menu > .tb-megamenu-button').text("Main Menu");
        $('#mega-mobile #tb-megamenu-main-menu > .tb-megamenu-button').text("Main Menu");
        
        //missing label
        $('#milestones\\.24Hours\\.date').prepend('<label class="ui-helper-hidden-accessible" for="milestones.24Hours.date">Enter 24 hours date.</label>');
        $('#milestones\\.48Hours\\.date').prepend('<label class="ui-helper-hidden-accessible" for="milestones.48Hours.date">Enter 48 hours date.</label>');
        $('#milestones\\.oneWeek\\.date').prepend('<label class="ui-helper-hidden-accessible" for="milestones.oneWeek.date">Enter one week date.</label>');
        $('#milestones\\.twoWeeks\\.date').prepend('<label class="ui-helper-hidden-accessible" for="milestones.twoWeeks.date">Enter two weeks date.</label>');
        $('#milestones\\.oneMonth\\.date').prepend('<label class="ui-helper-hidden-accessible" for="milestones.oneMonth.date">Enter one month date.</label>');
        $('.node-type-blog-entry #edit-field-topics-tid').prepend('<label class="ui-helper-hidden-accessible" for="edit-field-topics-tid">Topics</label>');
        $('.node-type-page #edit-field-topics-tid').prepend('<label class="ui-helper-hidden-accessible" for="edit-field-topics-tid">Topics</label>');
        
        //if there're empty header
        if ($('head > title').is(':empty')){
            $('head > title').text("Smokefree.gov");
        }
    });
}) (jQuery);