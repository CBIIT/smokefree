@javascript
Feature: Search Box
  In order to search for specific content
  As a website user
  I need to be able to use the search box in the main navigation bar

  Background:
    Given I am on the homepage


  Scenario: The Search icon and Search box are present
    Then I should see an "#main-nav > div > div.nav-bar-icon > span" element
    When I click the "#main-nav > div > div.nav-bar-icon > span" element
    And I wait for "2" seconds
    Then I should see an "body > div.container-page > div.header-col-12.search-bar > form > div > input" element
    
    
#   Scenario: Entering Invalid search terms should not return any results
#     Then I click the "#main-nav > div > div.nav-bar-icon > span" element
#     And I wait for "2" seconds
#     When I fill in "#main-nav > div > div.nav-bar-icon > span" with "blah"
#     Then I should see the text "Your search did not match any documents."
#     And I should see the text "No pages were found containing"
#     And I should see the text "Make sure all words are spelled correctly"
#     And I should see the text "Try different keywords"
#     And I should see the text "Try more general worlds"


     






