@api
Feature: Navigation
  In order to navigate through the smokefree website
  As a website user
  I need to be able to view and click on all the primary navigation elements

  Background:
    Given I am on the homepage

  Scenario: User looks for the primary navigation
    Then I should see the link "Home"
    Then I should see the link "Tools & Tips"
    Then I should see the link "Challenges When Quitting"
    Then I should see the link "Quitting Smoking"
    Then I should see the link "Stay Smokefree for Good"
    Then I should see the link "Help Others Quit"
