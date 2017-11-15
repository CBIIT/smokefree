@javascript
Feature: I recently quit link on homepage
  As a website user
  I need to be able to view information pertaining to recently quitting tobacco


  Scenario: Click on the "I recently Quit" link to view relevant text and Smokefree Apps Download Link
    Given I am on homepage
    Then I should see text matching "Quitting is a Journey"

   @api
   Scenario: Click on the "I Recently Quit" link to view the relevant Tools and Tips
     And I should see the link "Smokefree Apps"
     And I should see the link "Speak to an Expert"
     And I should see the link "Smokefree Texting Programs"
     And I should see the link "Build Your Quit Plan"

   Scenario: Click on the "I recently Quit" link to view the relevant Articles
     And I should see text matching "ARTICLES & INFORMATION"


