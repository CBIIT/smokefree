@javascript
Feature:Footer text
  In order to find more content and information on the website
  As a website user
  I need to be able to scroll down to the bottom of the page and view all the footer content

Background
  Given I visit homepage


  Scenario: Look for the main navigation links in the footer
    Then I should see the link "Tools and Tips" in the footer region


