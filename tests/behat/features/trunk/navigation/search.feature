@javascript
Feature: Search Box
  In order to search for specific content
  As a website user
  I need to be able to use the search box in the main navigation bar

  Background:
    Given I am on the homepage

  Scenario: The Search icon and Search box are present
    #Validating the visibility of the search icon in the main nav bar and then clicking on it
    Then I should see an "#main-nav > div > div.nav-bar-icon > span" element
    When I click the "#main-nav > div > div.nav-bar-icon > span" element
    And I wait for "2" seconds
    #Validating the search text box
    Then I should see an "body > div.container-page > div.header-col-12.search-bar > form > div > input" element
    And I should see the button "Submit"

  Scenario Outline: Entering invalid search terms should not return any results
    Then I click the "#main-nav > div > div.nav-bar-icon > span" element
    And I wait for "2" seconds
    When I fill in "Search" with "<invalid_term>"
    Examples: Invalid search terms
      | invalid_term |
      | blah         |
      | foo fighters |
      | pizza        |
      | bitcoin      |
    And I press the Submit button
    And I wait for "2" seconds
    Then I should see the text "Your search - <invalid_term> - did not match any documents"
    And I should see the text "No pages were found containing"
    But I should not see the text "Results"
    And I should not see the link "Search Within Results"
    And I should not see the link "Next"
    And I should not see the text "Result Page"

   Scenario Outline: Entering valid search terms should return search results
     Then I click the "#main-nav > div > div.nav-bar-icon > span" element
     And I wait for "2" seconds
     When I fill in "Search" with "<valid_term>"
     Examples: Valid search terms
       | valid_term |
       | smokefree  |
       | tobacco    |
       | dipping    |
       | teen       |
     And I press the Submit button
     And I wait for "2" seconds
     Then I should see the text "Results"
     And I should see the link "Search Within Results"
     And I should see the link "Next"
     And I should see the text "Result Page"
     But I should not see the text "No pages were found containing"



