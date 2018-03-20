@javascript
 Feature: Secondhand Smoke Quiz
  As a website user
  I need to be able to take the secondhand smoke quiz to test my knowledge on second hand smoking

  Scenario: The quiz page is loaded with the quiz introduction
    Given I am on "quiz-how-bad-secondhand-smoke"
    Then I should see the text "How much do you know about secondhand smoke? Take this quiz to learn more about the dangers of secondhand smoke."

  Scenario Outline: The quiz page is loaded with the quiz questions present
    And I wait for "2" seconds
    Then I should see text matching "<text>"
    Examples:
      | text                                                                                                                                                                  |
      | Secondhand smoke is...                                                                                                                                                |
      | Secondhand smoke is annoying, but it is not really a health concern.                                                                                                  |
      | Secondhand smoke contains more than 4,000 chemicals, including some that cause cancer in humans.                                                                      |
      | Children exposed to secondhand smoke are more likely to have which of the following illnesses?                                                                        |
      | Which one of the following is not another name for secondhand smoke?                                                                                                  |
      | Which of the following chemicals does secondhand smoke contain?                                                                                                       |
      | Ventilation and separate non-smoking sections can eliminate secondhand smoke exposure.                                                                                |
      | A healthy non-smoker must be exposed to secondhand smoke for what amount of time before experiencing negative health effects?                                         |
      | Laws that limit where a person can smoke and reduce secondhand smoke exposure                                                                                         |
      | Research has shown that after laws were passed banning smoking in bars and restaurants there was a large decline within a couple of months in which of the following? |

  Scenario: The quiz submit button is present
    Then I should see the button "op"

  Scenario: Answering all the quiz questions and clicking on submit button
    Given I am on "quiz-how-bad-secondhand-smoke"
    When I select the radio button "a and c" with the id "edit-submitted-secondhand-smoke-is-4"
    And I select the radio button "False" with the id "edit-submitted-secondhand-smoke-is-annoying-but-it-is-not-really-a-health-concern-2"
    And I select the radio button "True" with the id "edit-submitted-secondhand-smoke-contains-more-than-4000-chemicals-including-some-that-cause-cancer-in-humans-1"
    And I select the radio button "Severe and frequent asthma attacks" with the id "edit-submitted-children-exposed-to-secondhand-smoke-are-more-likely-to-have-which-of-the-following-illnesses-2"
    And I select the radio button "Involuntary smoking" with the id "edit-submitted-which-one-of-the-following-is-not-another-name-for-secondhand-smoke-4"
    And I select the radio button "None of the above" with the id "edit-submitted-which-of-the-following-chemicals-does-secondhand-smoke-contain-6"
    And I select the radio button "True" with the id "edit-submitted-ventilation-and-separate-non-smoking-sections-can-eliminate-secondhand-smoke-exposure-1"
    And I select the radio button "5 minutes" with the id "edit-submitted-a-healthy-non-smoker-must-be-exposed-to-secondhand-smoke-for-what-amount-of-time-before-experiencing-negative-health-effects-1"
    And I select the radio button "Hurt small, medium, and large businesses" with the id "edit-submitted-laws-that-limit-where-a-person-can-smoke-and-reduce-secondhand-smoke-exposure-2"
    And I select the radio button "Colds and flu in restaurant workers" with the id "edit-submitted-research-has-shown-that-after-laws-were-passed-banning-4"
    Then I press the "op" button

  Scenario: Displays the correct and wrong responses of the quiz
    And I should see an "#secondhand > div:nth-child(2) > div > div.answer-image.correct" element
    And I should see an "#secondhand > div:nth-child(8) > div > div.answer-image.incorrect" element
    And I should see the text "Correct answer:"


  Scenario: Clicking on the submit button of the quiz after making incomplete selections to the quiz will display a pop up message and remain on the same page
    Given I am on "quiz-how-bad-secondhand-smoke"
    When I select the radio button "a and c" with the id "edit-submitted-secondhand-smoke-is-4"
    And I select the radio button "False" with the id "edit-submitted-secondhand-smoke-is-annoying-but-it-is-not-really-a-health-concern-2"
    And I press the "op" button
    Then I should be on "quiz-how-bad-secondhand-smoke"

  Scenario: Clicking on the submit button of the quiz without making any selections to the quiz will will display a pop up message and remain on the same page
    And I press the "op" button
    Then I should be on "quiz-how-bad-secondhand-smoke"

