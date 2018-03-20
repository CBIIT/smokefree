@javascript
Feature: Withdrawal symptoms Quiz
  As a website user
  I need to be able to take the withrawal symptoms quiz and test my knowledge about withrawal symptoms


  Scenario: The quiz page is loaded and quiz introduction is visible
     Given I am on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"
     Then I should see the text "This quiz looks at your level of withdrawal symptoms. You may want to take the quiz every day in the first couple of weeks after you quit. The quiz can help you understand what you are going through and how it is changing. Remember, there are different medications and activities to help reduce your withdrawal symptoms and make them easier to handle. It is very common to have some level of symptoms even when you are using treatment."

  Scenario Outline: The quiz questions are present
     Then I should see text matching "<text>"
    Examples:
    | text                                         |
    | Angry, irritable, frustrated                 |
    | Anxious, nervous                             |
    | Depressed mood, sad                          |
    | Desire or craving to smoke                   |
    | Difficulty concentrating                     |
    | Increased appetite, hungry, weight gain      |
    | Insomnia, sleep problems, awakening at night |
    | Restless                                     |
    | Impatient                                    |
    | Constipation                                 |
    | Dizziness                                    |
    | Coughing                                     |
    | Coughing                                     |
    | Dreaming or nightmares                       |
    | Nausea                                       |
    | Sore throat                                  |

  Scenario: The quiz submit button is present
    Then I should see the button "op"

  Scenario: Answering all the questions and click on submit button
      Given I am on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"
      When I select the radio button "Moderate" with the id "edit-submitted-angry-irritable-frustrated-4"
      And I select the radio button "Severe" with the id "edit-submitted-anxious-nervous-5"
      And I select the radio button "Mild" with the id "edit-submitted-depressed-mood-sad-3"
      And I select the radio button "Moderate" with the id "edit-submitted-desire-or-craving-to-smoke-4"
      And I select the radio button "None" with the id "edit-submitted-difficulty-concentrating-1"
      And I select the radio button "Mild" with the id "edit-submitted-increased-appetite-hungry-weight-gain-3"
      And I select the radio button "None" with the id "edit-submitted-insomnia-sleep-problems-awakening-at-night-1"
      And I select the radio button "Mild" with the id "edit-submitted-restless-3"
      And I select the radio button "None" with the id "edit-submitted-impatient-1"
      And I select the radio button "Slight" with the id "edit-submitted-constipation-2"
      And I select the radio button "Mild" with the id "edit-submitted-dizziness-3"
      And I select the radio button "Slight" with the id "edit-submitted-coughing-2"
      And I select the radio button "Mild" with the id "edit-submitted-dreaming-or-nightmares-3"
      And I select the radio button "Moderate" with the id "edit-submitted-nausea-4"
      And I select the radio button "Mild" with the id "edit-submitted-sore-throat-3"
      Then I press the "op" button
      And I wait for "2" seconds

  Scenario Outline: Displays the quiz score
    And I should see text matching "<text>"
    Examples:
      | text                                     |
      | Quiz: What Are Your Withdrawal Symptoms? |
      | Your Score: 27                           |
      | Score 16-30:                             |

  Scenario:The respective links are present and gets directed to the subsequent pages after taking the quiz
    And I should see the link "cravings page"
    Then I click "cravings page"
    Then I should be on "challenges-when-quitting/cravings-triggers/how-manage-cravings"

  Scenario: Clicking on the submit button of the quiz after making incomplete selections to the quiz will remain on the same page
    Given I am on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"
    When I select the radio button "Moderate" with the id "edit-submitted-angry-irritable-frustrated-4"
    And I select the radio button "Severe" with the id "edit-submitted-anxious-nervous-5"
    And I press the "op" button
    Then I should be on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"

  Scenario: Clicking on the submit button of the quiz without making any selections to the quiz will stay on the same page
      And I press the "op" button
      Then I should be on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"

