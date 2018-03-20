@javascript
Feature: "Staying Quit" link on the homepage
  In order to view information about staying smokefree
  As a website user
  I need to be able to click on the "Staying Quit" link

  Background:
    Given I am on homepage
    When I click "Staying Quit"
    And I wait for "2" seconds

  Scenario: Click on the "My Quit Day" link to view the relevant information
    And I should not see text matching "Quitting is a Journey"
    But I should see text matching "Quitting is a Process."

  Scenario Outline: View and click on relevant tools & tips for the 'Staying Quit' link
    And I should see text matching "Tools & Tips"
    And I should see an "<tools_tips_links>" element
    And I click the "<tools_tips_links>" element
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | tools_tips_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(1) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | smokefree-text-messaging-programs                                           |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/apps                                                             |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(4) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | build-your-quit-plan                                                        |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(5) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/speak-expert                                                     |

  Scenario Outline: View and click on relevant articles & information for the 'Staying Quit' link
    And I should see text matching "ARTICLES & INFORMATION"
    And I should see an "<articles_links>" element
    And I click the "<articles_links>" element
    Then I should be on "<page>"
    Examples: Tools and Tips Links
      | articles_links         | page |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a | stay-smokefree-good/how-stay-smokefree                                |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-2.views-row-even > a                | challenges-when-quitting/dealing-weight-gain-after-quitting           |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a  | challenges-when-quitting/stress-mood/stress-smoking                   |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a             | challenges-when-quitting/cravings-triggers/know-your-smoking-triggers |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a                            | challenges-when-quitting/mood-management/smoking-depression           |
      | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a              | stay-smokefree-good/slips-relapses                                    |

  Scenario: View the Boost Your Mood After Quitting Smoking text and link and if the link gets directed to the corresponding page
    And I should see the text "Not feeling like yourself? Find out how to boost your mood after quitting smoking."
    And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
    Then I click the "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-includes > div > div > div > div > div.field.field-name-field-includes-link.field-type-link-field.field-label-hidden > div > div > a" element
    And I am on "challenges-when-quitting/mood-management/boost-your-mood-after-quitting-smoking"

  Scenario: View the Cardio text and link and if the link gets directed to the corresponding page
    And I should see the text "Take more control over your health by getting the cardiovascular exercise you need."
    And I should see an "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-includes-2 > div > div > div > div > div.field.field-name-field-includes-link-2.field-type-link-field.field-label-hidden > div > div > a" element
    Then I click the "body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-5.views-row-odd.views-row-last.\36 18.content-area > div.views-field.views-field-field-includes-2 > div > div > div > div > div.field.field-name-field-includes-link-2.field-type-link-field.field-label-hidden > div > div > a" element
    And I am on "stay-smokefree-good/get-active/cardio-counts"

  Scenario: Click on the 'I want to Quit' link will bring back to default view
    When I click "Staying Quit"
    Then I should see text matching "Quitting is a Journey"