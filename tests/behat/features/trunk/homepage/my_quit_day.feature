@javascript
Feature: "My Quit Day" link on the homepage
  In order to view information about setting a date to quit tobacco
  As a website user
  I need to be able to view I click on the "My Quit Day" link on the home page

  Background:
    Given I am on homepage
    When I click "My Quit Day"
    And I wait for "2" seconds

  Scenario: Click on the "My Quit Day" link to view the relevant information
    And I should not see text matching "Quitting is a Journey"
    But I should see text matching "Today is a Great Day to Quit."

  Scenario Outline: View and click on relevant tools & tips for the 'My Quit Day" link
    And I should see text matching "Tools & Tips"
    And I should see an "<tools_tips_links>" element
    And I click the "<tools_tips_links>" element
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | tools_tips_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(1) > div > a                                                                                                                   | build-your-quit-plan                                                        |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a                                                                                                                   | tools-tips/speak-expert                                                     |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a  | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(4) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a  | tools-tips/apps                                                             |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(5) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a  | smokefree-text-messaging-programs                                           |

  Scenario Outline: View and click on relevant articles & information for the 'My Quit Day" link
    And I should see text matching "ARTICLES & INFORMATION"
    And I should see an "<articles_links>" element
    And I click the "<articles_links>" element
    And I wait for "2" seconds
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | articles_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a              | challenges-when-quitting/managing-withdrawal                   |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a                            | quitting-smoking/ask-help                                      |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a             | quitting-smoking/why-quitting-hard                             |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-2.views-row-even > a                | challenges-when-quitting/cravings-triggers/how-manage-cravings |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a | quitting-smoking/steps-manage-quit-day                         |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a  | tools-tips/medications-can-help-you-quit                       |

  Scenario: View the withdrawal symptoms quiz text and button and if the button gets directed to the quiz page
    And I should see the text "Quiz: What Are Your Withdrawal Symptoms?"
    And I should see the text "Understanding your withdrawal symptoms can help you find ways to cope with the challenges of quitting."
    And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
    Then I click the "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-3.views-row-odd.\36 16.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
    And I am on "challenges-when-quitting/managing-withdrawal/quiz-withdrawal"


   Scenario: View the managing stress text and link and if the link gets directed to the subsequent page
     And I should see the text "Managing stress is a key part of quitting. Build your skills for dealing with stress without turning to cigarettes."
     And I should see the link "Learn More"
     Then I click "Learn More"
     And I am on "challenges-when-quitting/mood-management/coping-emotions-without-smoking"

  Scenario: Click on the 'I want to Quit' link will bring back to default view
    When I click "My Quit Day"
    Then I should see text matching "Quitting is a Journey"