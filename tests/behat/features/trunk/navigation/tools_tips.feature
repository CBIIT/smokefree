@javascript
Feature: Tools & Tips Mega Menu
  In order to navigate to links in the "Tools and Tips" mega menu
  As a website user
  I need to be able hover over the 'Tools and Tips' link and click on the mega menu links to get to the corresponding pages

  Background:
    Given I am on the homepage
    When I hover over the link "Tools & Tips"

  Scenario: The mega menu items under "Tools & Tips" are present and they get directed to the corresponding pages.
    And I wait for "3" seconds
    Then I should see the link "Create My Quit Plan" in the main_nav


