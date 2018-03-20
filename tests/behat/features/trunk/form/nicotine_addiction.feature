@javascript
Feature: Nicotine Addiction Quiz
  As a website user
  I need to be able to take the nicotine addiction quiz to check my level of nicotine addiction

    Scenario Outline: The quiz page is loaded and the quiz questions are present
     Given I am on "quiz-how-strong-your-nicotine-addiction"
     And I wait for "2" seconds
     Then I should see text matching "<text>"
     Examples:
      | text                                                                                                                              |
      | How soon after you wake up do you smoke your first cigarette?                                                                     |
      | Do you find it difficult not to smoke in places where you shouldn't, such as in church, on the bus, in school, or at the library? |
      | Which cigarette would you most hate to give up?                                                                                   |
      | How many cigarettes do you smoke each day?                                                                                        |
      | Do you smoke more frequently during the first hours after waking up than during the rest of the day?                              |
      | Do you still smoke if you are so sick that you are in bed most of the day?                                                        |

    Scenario: The quiz submit button is present
     Then I should see the button "op"

    Scenario: Answering all the quiz questions and clicking on submit button
      Given I am on "quiz-how-strong-your-nicotine-addiction"
      When I select the radio button "5 to 30 minutes" with the id "edit-submitted-how-soon-after-you-wake-up-do-you-smoke-your-first-cigarette-2"
      And I select the radio button "No" with the id "edit-submitted-do-you-find-it-difficult-not-to-smoke-in-places-where-you-shouldnt-such-as-in-church-on-the-bus-in-school-or-at-the-library-2"
      And I select the radio button "The first one in the morning" with the id "edit-submitted-which-cigarette-would-you-most-hate-to-give-up-1"
      And I select the radio button "10 or fewer" with the id "edit-submitted-how-many-cigarettes-do-you-smoke-each-day-1"
      And I select the radio button "Yes" with the id "edit-submitted-do-you-smoke-more-frequently-during-the-first-hours-after-waking-up-than-during-the-rest-of-the-day-1"
      And I select the radio button "No" with the id "edit-submitted-do-you-still-smoke-if-you-are-so-sick-that-you-are-in-bed-most-of-the-day-2"
      Then I press the "op" button

   Scenario Outline: Displays the quiz score
      And I should see text matching "<text>"
      Examples:
        | text                         |
        | Your total score is          |
        | 4 points                     |
        | (Low Addiction, 3-4 points). |

   Scenario Outline: Displays the respective links and gets directed to the subsequent pages after taking the quiz
      And I should see the link "<link>"
      And I click "<link>"
      And I wait for "1" seconds
      Then I should be on "<page>"
      Then I move backward one page
      Examples:
      | link                             | page                                                                        |
      | cravings                         | challenges-when-quitting/cravings-triggers/how-manage-cravings              |
      | quit smoking medications         | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
      | withdrawal                       | challenges-when-quitting/managing-withdrawal/understanding-withdrawal       |
      | smoking triggers                 | challenges-when-quitting/cravings-triggers/how-manage-cravings              |
      | Getting support                  | node/38/getting-support                                                     |

    Scenario: Clicking on the submit button of the quiz after making incomplete selections to the quiz will remain on the same page
      Given I am on "quiz-how-strong-your-nicotine-addiction"
      When I select the radio button "5 to 30 minutes" with the id "edit-submitted-how-soon-after-you-wake-up-do-you-smoke-your-first-cigarette-2"
      And I select the radio button "No" with the id "edit-submitted-do-you-find-it-difficult-not-to-smoke-in-places-where-you-shouldnt-such-as-in-church-on-the-bus-in-school-or-at-the-library-2"
      And I press the "op" button
      Then I should be on "quiz-how-strong-your-nicotine-addiction"

    Scenario: Clicking on the submit button of the quiz without making any selections to the quiz will stay on the same page
      And I press the "op" button
      Then I should be on "quiz-how-strong-your-nicotine-addiction"

