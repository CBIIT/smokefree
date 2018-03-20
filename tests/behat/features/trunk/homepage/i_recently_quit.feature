@javascript
Feature: I "Recently Quit" link on the homepage
  In order to view information about staying quit from tobacco
  As a website user
  I need to be able to click on the "Recently Quit" link on the home page

  Background:
    Given I am on the homepage
    When I click "I Recently Quit"
    And I wait for "2" seconds

  Scenario: Clicking on the "I Recently Quit" link to view relevant text
     Then I should not see text matching "Quitting is a Journey"
     But I should see text matching "Stick With It"

   Scenario Outline: View and click on relevant tools & tips for the 'I Recently Quit' link
     And I should see text matching "Tools & Tips"
     And I should see an "<tools_tips_links>" element
     And I click the "<tools_tips_links>" element
     And I wait for "2" seconds
     Then I should be on "<page>"
     Examples:
     |tools_tips_links|page|
     | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(1) > div > a | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
     | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a | tools-tips/apps                                                             |
     | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a | tools-tips/speak-expert                                                     |
     | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(4) > div > a | smokefree-text-messaging-programs                                           |
     | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(5) > div > a | build-your-quit-plan                                                        |

  Scenario Outline: View and click on relevant articles & information for the 'I Recently Quit' link
    And I should see text matching "ARTICLES & INFORMATION"
    And I should see an "<articles_links>" element
    And I click the "<articles_links>" element
    And I wait for "2" seconds
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | articles_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a | challenges-when-quitting/cravings-triggers/know-your-smoking-triggers |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-2.views-row-even > a                | challenges-when-quitting/stress-mood/stress-smoking                   |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a  | challenges-when-quitting/cravings-triggers/fight-cravings-exercise    |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a             | stay-smokefree-good/slips-relapses/tips-slips                         |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a                            | challenges-when-quitting/managing-withdrawal/understanding-withdrawal |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a              | challenges-when-quitting/dealing-weight-gain-after-quitting           |


  Scenario: View the cravings text and link and if the link gets directed to the subsequent page
      And I should see the text "Do you have a plan for dealing with cravings? Get some ideas for fighting the urge to smoke."
      And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
      And I click the "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
      Then I am on "challenges-when-quitting/cravings-triggers/how-manage-cravings"

  Scenario: User looks for Withdrawal Symptoms Quiz
    And I should see the text "Quiz: What Are Your Withdrawal Symptoms?"
    And I should see the text "Understanding your withdrawal symptoms can help you find ways to cope with the challenges of quitting."
    And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes-2 > div > div > div > div > div.field.field-name-field-includes-link-2.field-type-link-field.field-label-hidden > div > div > a" element
    And I click the "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-4.views-row-even.\36 17.content-area > div.views-field.views-field-field-includes-2 > div > div > div > div > div.field.field-name-field-includes-link-2.field-type-link-field.field-label-hidden > div > div > a" element
    Then I am on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"


  Scenario: Click on the 'I want to Quit' link will bring back to default view
    When I click "I Recently Quit"
    Then I should see text matching "Quitting is a Journey"