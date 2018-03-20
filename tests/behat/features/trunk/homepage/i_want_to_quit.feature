@javascript
Feature: "I want to quit" link on the homepage
  In order to view information about getting prepared to quit tobacco
  As a website user
  I need to be able to click on "I want to quit" link on the home page

  Background:
    Given I am on homepage
    When I click "I Want to Quit"
    And I wait for "2" seconds

  Scenario: Click on the "I want to Quit" link to view the relevant information
    And I should not see text matching "Quitting is a Journey"
    But I should see text matching "Get Prepared"

  Scenario Outline: View and click on relevant tools & tips for the 'I want to quit" link
    And I should see text matching "Tools & Tips"
    And I should see an "<tools_tips_links>" element
    And I click the "<tools_tips_links>" element
    Then I should be on "<page>"
      Examples: Tools and Tips Links
        | tools_tips_links         | page |
        | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(1) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/apps                                                             |
        | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | smokefree-text-messaging-programs                                           |
        | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
        | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(4) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/speak-expert                                                     |
        | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(5) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | build-your-quit-plan                                                        |

  Scenario Outline: View and click on relevant articles & information for the 'I want to quit" link
    And I should see text matching "ARTICLES & INFORMATION"
    And I should see an "<articles_links>" element
    And I click the "<articles_links>" element
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | articles_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a | quitting-smoking/reasons-quit/why-do-you-want-quit                    |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-2.views-row-even > a                | quitting-smoking/ask-help                                             |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a  | quitting-smoking/prepare-quit                                         |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a             | challenges-when-quitting/cravings-triggers/know-your-smoking-triggers |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-2.views-row-even.\37 90.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a                            | quitting-smoking/steps-manage-quit-day                                |

  Scenario: Click on the 'I want to Quit' link will bring back to default view
   When I click "I Want to Quit"
   Then I should see text matching "Quitting is a Journey"