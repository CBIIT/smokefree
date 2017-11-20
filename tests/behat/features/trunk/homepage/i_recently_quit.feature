@javascript
Feature: I recently quit link on the homepage
  As a website user
  I need to be able to view information pertaining to recently quitting tobacco


  Scenario: Clicking on the "I recently Quit" link to view relevant text and Smokefree Apps Download Link
    Given I am on homepage
    Then I should see text matching "Quitting is a Journey"

   Scenario: Click on the "I Recently Quit" link to view the relevant information
     When I click "I Recently Quit"
     And I wait for "2" seconds
     Then I should not see text matching "Quitting is a Journey"
     But I should see text matching "Stick With It"
     And I should see text matching "Smokefree Apps"

     #Validating the relevant tools & tips for the selection
     And I should see text matching "Tools & Tips"
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(1) > div > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(4) > div > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(5) > div > a" element

     #Validating the relevant articles for the selection
     And I should see the text "ARTICLES & INFORMATION"
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-blue-box-text > div > div > div.col-md-7.col-sm-12.cta-box-b > div.col-sm-4 > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a" element
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a" element

     #Validating the section between the articles
     And I should see the text "Do you have a plan for dealing with cravings? Get some ideas for fighting the urge to smoke."

     #Validating the "Learn More" link
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element

     #Validating the Quiz Section text and link
     And I should see text matching "Quiz: What Are Your Withdrawal Symptoms?"
     And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes-2 > div > div > div > div > div.field.field-name-field-includes-link-2.field-type-link-field.field-label-hidden > div > div > a" element

