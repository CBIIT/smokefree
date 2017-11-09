@api
Feature: From the homepage, a user would click the "My Quit Day" button.
  This would then change the page, allowing us to test for this feature.

  Scenario: User can now see the content from the I want to quit page.
    Given I am on the homepage
    Then I should see the text "Today is a Great Day to Quit."
    Then I should see the text "My Quit Day"
    Then I should see the text "Why Do You Want to Quit?"
    Then I should see the link "Download"
    