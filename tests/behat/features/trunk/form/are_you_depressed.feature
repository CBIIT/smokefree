@javascript
Feature: Depression Quiz
  As a website user
  I need to be able to take the depression quiz to check if I have signs of depression

  Scenario Outline: The quiz introduction is present and visible for the user to get more information about the Quiz
    Given I am on "quiz-are-you-depressed"
    Then I should see the text "<text>"
    Examples:
      | text                                                                                |
      | Find Help 24/7                                                                      |
      | If you need help now, call a 24-hour crisis center at                               |
      | 1-800-273-TALK (8255)                                                               |
      | 1-800-SUICIDE (1-800-784-2433)                                                      |
      | for free, private help or dial 911.                                                 |
      | If you or someone you know is having these feelings, get help now.                  |
      | Sometimes people who are feeling depressed think about hurting themselves or dying. |
      | If you or someone you know is having these feelings, get help now.                  |

  Scenario: The quiz links are present and are directed to their respective pages
    And I should see the link "Substance Abuse and Mental Health Services Administration (SAMHSA)"
    When I click "Substance Abuse and Mental Health Services Administration (SAMHSA)"
    Then The website should open in a new tab
    And I should see the link "National Suicide Prevention Lifeline"
    When I click "National Suicide Prevention Lifeline"
    Then The website should open in a new tab

  Scenario Outline: The quiz questions are present
    Then I should see text matching "<text>"
    Examples:
      | text                                         |
      | Falling Asleep                               |
      | Sleep During the Night                       |
      | Waking Up Too Early                          |
      | Sleeping Too Much                            |

  Scenario: The quiz submit button is present
    Then I should see the button "Next Page >"

  Scenario: Answer all the questions on page 1 and click on the next page button
    Given I am on "quiz-are-you-depressed"
    When I select the radio button "I take at least 30 minutes to fall asleep, less than half the time." with the id "edit-submitted-falling-asleep-2"
    And I select the radio button "I do not wake up at night." with the id "edit-submitted-sleep-during-the-night-1"
    And I select the radio button "I awaken at least 1 hour before I need to, and can’t go back to sleep." with the id "edit-submitted-waking-up-too-early-4"
    And I select the radio button "I sleep no longer than 10 hours in a 24-hour period including naps." with the id "edit-submitted-sleeping-too-much-2"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 2 and click on the next page button
    When I press the "< Previous Page" button
    Then I should see the text "Falling Asleep"
    And I press the "Next Page >" button
    And I select the radio button "I do not feel sad." with the id "edit-submitted-feeling-sad-1"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 3 and click on the next page button
    When I press the "< Previous Page" button
    Then I should see the text "Feeling Sad"
    And I press the "Next Page >" button
    And I select the radio button "I've lost my appetite." with the id "edit-submitted-appetite-2"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 4 and click on the next page button
    And I select the radio button "I eat somewhat less often or lesser amounts of food than usual." with the id "edit-submitted-decreased-appetite-1"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 5 and click on the next page button
    And I select the radio button "I've lost weight." with the id "edit-submitted-weight-2"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 6 and click on the next page button
    And I select the radio button "I have lost 2 pounds or more." with the id "edit-submitted-decreased-weight-within-the-last-2-weeks-2"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 7 and click on the next page button
    And I select the radio button "There is no change in my usual capacity to concentrate or make decisions." with the id "edit-submitted-concentration-decision-making-1"
    And I select the radio button "I largely believe that I cause problems for others." with the id "edit-submitted-view-of-myself-3"
    And I select the radio button "I do not think of suicide or death." with the id "edit-submitted-thoughts-of-death-or-suicide-1"
    And I select the radio button "I largely believe that I cause problems for others." with the id "edit-submitted-view-of-myself-3"
    And I select the radio button "I have virtually no interest in formerly pursued activities." with the id "edit-submitted-general-interest-4"
    Then I press the "Next Page >" button

  Scenario: Answer all the questions on page 8 and click on the next page button
    And I select the radio button "I get tired more easily than usual." with the id "edit-submitted-energy-level-2"
    And I select the radio button "I do not feel restless." with the id "edit-submitted-feeling-restless-1"
    And I select the radio button "I am often unable to respond to questions without extreme effort." with the id "edit-submitted-feeling-slowed-down-4"
    Then I click the "#webform-client-form-31 > div > button.webform-submit.button-primary.btn.btn-primary.form-submit" element
    And I wait for "2" seconds


  Scenario Outline: Displays the quiz score
    And I should see text matching "<text>"
    Examples:
      | text                                                |
      | Quiz: Are You Depressed?                            |
      | Your score is: 14                                   |
      | This score shows you might be moderately depressed. |

  Scenario Outline: Displays the respective links and gets directed to the subsequent pages after taking the quiz
    And I should see the link "<link>"
    And I click "<link>"
    Then I should be on "<page>"
    Then I move backward one page
    Examples:
      | link                                                        | page                                                                         |
      | Depression Basics                                           | challenges-when-quitting/mood-management/smoking-depression                  |
      | you shouldn't rely on cigarettes to cope with your feelings | challenges-when-quitting/stress-mood/stress-smoking                          |
      | smokefree tips for coping with stress and emotions.         | challenges-when-quitting/stress-management/coping-stress-without-smoking     |

  Scenario: The quiz links are present and are directed to their respective pages
    And I should see the link "Substance Abuse and Mental Health Services Administration (SAMHSA)"
    When I click "Substance Abuse and Mental Health Services Administration (SAMHSA)"
    Then The website should open in a new tab
    And I should see the link "National Suicide Prevention Lifeline"
    When I click "National Suicide Prevention Lifeline"
    Then The website should open in a new tab

  Scenario: Clicking on the submit button of the quiz after making incomplete selections to the quiz will remain on the same page
    Given I am on "quiz-are-you-depressed"
    When I select the radio button "I take at least 30 minutes to fall asleep, less than half the time." with the id "edit-submitted-falling-asleep-2"
    And I select the radio button "I do not wake up at night." with the id "edit-submitted-sleep-during-the-night-1"
    And I press the "Next Page >" button
    Then I should be on "quiz-are-you-depressed"

  Scenario: Clicking on the submit button of the quiz without making any selections to the quiz will stay on the same page
    And I press the "Next Page >" button
    Then I should be on "quiz-are-you-depressed"
