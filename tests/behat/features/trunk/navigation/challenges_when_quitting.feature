@javascript
Feature: Challenges When Quitting Main Navigation Link
  In order to navigate to links under the Challenges When Quitting main navigation link
  As a website user
  I need to be able hover over the main navigation link and click on those links to go the corresponding pages and get more information

 Background:
   Given I am on the homepage
   When I hover over the link "Challenges When Quitting"

  Scenario Outline: View and navigate to each of the main links under "Challenges When Quitting" menu
    And I wait for "3" seconds
    Then I should see the link "<main_link>"
    When I click "<main_link>"
    Then I am on "<page>"
    Examples:
    | main_link           | page                                                           |
    | Managing Withdrawal | challenges-when-quitting/managing-withdrawal                   |
    | Cravings & Triggers | challenges-when-quitting/cravings-triggers                     |
    | Stress Management   | challenges-when-quitting/stress-management                     |
    | Mood Management     | https://smokefree.gov/challenges-when-quitting/mood-management |


#  Scenario: I hover over the "Challenges When Quitting" link
#    Given I am on the homepage
#    When I hover over the link "Challenges When Quitting"
#    And I wait for AJAX to finish
#    Then I hover over the link "Managing Withdrawal"
#    And I wait for AJAX to finish
#    And I should see the link "Understanding Withdrawal"
#    And I wait for AJAX to finish
#    Then I should see the link "Quiz: How Strong is Your Nicotine Addiction?"
