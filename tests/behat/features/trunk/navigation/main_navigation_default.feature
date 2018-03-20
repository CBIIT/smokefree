@api
Feature: Default Navigation Links
  In order to use the navigate to different sections of the wesbite
  As a website user
  I need to be able to view and click on on all the main navigation bar links

  Background:
    Given I am on the homepage

    Scenario: Clicking on the "Home"  link will redirect back to the home page
      When I should see the link "Home" in the main_nav
      And  I click "Home" in the main_nav
      Then I am on the homepage

    Scenario Outline: Clicking on the main navigation links will direct to the corresponding pages
      When I should see the link "<link>" in the main_nav
      And I click "<link>" in the main_nav
      Then I am on "<page>"
      And the response status code should be 200
      When I click "Home" in the main_nav
      Then I am on the homepage
      Examples:
        | link                     | page                     |
        | Tools & Tips             | tools-tips               |
        | Challenges When Quitting | challenges-when-quitting |
        | Quitting Smoking         | quitting-smoking         |
        | Stay Smokefree for Good  | stay-smokefree-good      |
        | Help Others Quit         | help-others-quit         |
      And the response status code should be 200

