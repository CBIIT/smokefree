@javascript
Feature: Stress level Quiz
  As a website user
  I need to be able to take the stress level quiz and check my stress level

  Scenario: The quiz page is loaded and the introduction text for the quiz is present and visible at the top of the page
    Given I am on "stress-quiz"
    And I should see the text "Take this quiz to find out if you are having stressful feelings. For each question, click the response that best describes how often you felt a certain way"
    And I should see the text "during the last month"

  Scenario Outline: The quiz questions are present
    Then I should see text matching "<text>"
    Examples:
      | text                                                                                                             |
      | In the last month, how often have you felt that you were unable to control the important things in your life?    |
      | In the last month, how often have you felt confident about your ability to handle your personal problems?        |
      | In the last month, how often have you felt that things were going your way?                                      |
      | In the last month, how often have you felt difficulties were piling up so high that you could not overcome them? |

  Scenario: The quiz submit button is present
    Then I should see the button "op"

  Scenario: Answering all the quiz questions and clicking on submit button
    Given I am on "stress-quiz"
    When I select the radio button "Sometimes" with the id "edit-submitted-control-3"
    And I select the radio button "Fairly Often" with the id "edit-submitted-confident-4"
    And I select the radio button "Never" with the id "edit-submitted-going-1"
    And I select the radio button "Very Often" with the id "edit-submitted-difficulties-5"
    Then I press the "op" button

  Scenario Outline: Displays the quiz score
    And I should see text matching "<text>"
    Examples:
      | text                                          |
      | Stress Quiz                                   |
      | Your score is: 11                             |
      | This score shows your stress levels are high. |

  Scenario Outline: Displays the respective links and gets directed to the subsequent pages after taking the quiz
    And I should see the link "<link>"
    And I click "<link>"
    Then I should be on "<page>"
    Then I move backward one page
    Examples:
      | link                             | page                                                                         |
      | causes of your stress            | challenges-when-quitting/stress-mood/causes-stress                           |
      | reduce stress                    | challenges-when-quitting/stress-management/coping-stress-without-smoking     |
      | smoking and stress               | challenges-when-quitting/stress-mood/stress-smoking                          |

  Scenario: Clicking on the submit button of the quiz after making incomplete selections to the quiz will remain on the same page
    Given I am on "stress-quiz"
    When I select the radio button "Sometimes" with the id "edit-submitted-control-3"
    And I select the radio button "Fairly Often" with the id "edit-submitted-confident-4"
    And I press the "op" button
    Then I confirm the dialog
    And I should be on "stress-quiz"

  Scenario: Clicking on the submit button of the quiz without making any selections to the quiz will stay on the same page
    And I press the "op" button
    Then I should be on "stress-quiz"

