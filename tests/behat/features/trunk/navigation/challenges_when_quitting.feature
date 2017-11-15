@javascript
Feature: Challenges When Quitting Main Navigation Link
  In order to navigate to links under the Challenges When Quitting main navigation link
  As a website user
  I need to be able hover over the main navigation link and click on those links to go the corresponding pages and get more information

  Scenario: I hover over the "Challenges When Quitting" link
    Given I am on the homepage
    When I hover over the link "Challenges When Quitting"
    And I wait for "3" seconds
    Then I should see the link "Managing Withdrawal"
    When I click "Managing Withdrawal"
    Then I am on "challenges-when-quitting/managing-withdrawal"

  Scenario: I hover over the "Challenges When Quitting" link
    Given I am on the homepage
    When I hover over the link "Challenges When Quitting"
    And I wait for "3" seconds
    Then I should see the link "Managing Withdrawal"
    When I click "Managing Withdrawal"
    Then I am on "challenges-when-quitting/managing-withdrawal"

  Scenario: I hover over the "Challenges When Quitting" link
    Given I am on the homepage
    When I hover over the link "Challenges When Quitting"
    And I wait for "2" seconds
    Then I should see the link "Cravings & Triggers"
    When I click "Cravings & Triggers"
    Then I am on "challenges-when-quitting/cravings-triggers"

  Scenario: I hover over the "Challenges When Quitting" link
    Given I am on the homepage
    When I hover over the link "Challenges When Quitting"
    And I wait for "2" seconds
    Then I should see the link "Stress Management"
    When I click "Stress Management"
    Then I am on "challenges-when-quitting/stress-management"


#  Scenario: I hover over the "Challenges When Quitting" link
#    Given I am on the homepage
#    When I hover over the link "Challenges When Quitting"
#    And I wait for AJAX to finish
#    Then I hover over the link "Managing Withdrawal"
#    And I wait for AJAX to finish
#    And I should see the link "Understanding Withdrawal"
#    And I wait for AJAX to finish
#    Then I should see the link "Quiz: How Strong is Your Nicotine Addiction?"
