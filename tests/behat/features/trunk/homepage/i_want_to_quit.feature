@api
Feature: From the homepage, a user would click the "I Want to Quit" button.
  This would then hide the currently visible words and show the newly visible words.

  fundamental feature flaw:
  Since all elements are simultaneously present on the page, we cannot test whether clicking these buttons will have any effect.

  Scenario: User can see the content from the I want to quit page.
    Given I am on the homepage
    Then I should see the text "Get Prepared."
    Then I should see the text "I Want to Quit"
    Then I should see the text "Create Your Quit Plan"
    Then I should see the link "Get Started"