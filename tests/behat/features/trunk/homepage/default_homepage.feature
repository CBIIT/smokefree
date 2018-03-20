@javascript
Feature: Smokefree Home Page
  In order to use the smokefree website
  As a website user
  I need to be able to view contents and interact with elements on the home page

  Background:
      Given I am on the homepage
      And I wait for "2" seconds

  Scenario: View the homepage logo and click on the logo to refresh
#    Then I should see the "Smokefree-logo" image
     And I click "Smokefree-logo"
     Then I should be on the homepage

  Scenario Outline: The 4 action buttons are present
      Then I should see the link "<link>"
      Examples:
      | link            |
      | I Want to Quit  |
      | My Quit Day     |
      | I Recently Quit |
      | Staying Quit    |

  Scenario: View the inspirational quote on the home screen
      Then I should see the text '“After trying before, one thing is different this time: acceptance of imperfections." -Smokefree Kathleen'

  Scenario: The introduction block is present with the relevant text
      Then I should see text matching "Quitting is a Journey"

  Scenario: View relevant articles and information on the default homepage view
      Then I should see the text "ARTICLES & INFORMATION"
      Then I should see the text "How To Manage Cravings"
      Then I should see the text "When you have a craving, it's important to have a plan to beat that urge to smoke."

  Scenario: View

  Scenario Outline: View and click on relevant tools & tips links for the default homepage view
      And I should see the link "<tools_tips_links>"
      And I click "<tools_tips_links>"
      And I wait for "2" seconds
      Then I should be on "<page>"
      Examples:
      | tools_tips_links                   | page                              |
      | Smokefree Texting Programs         | smokefree-text-messaging-programs |
      | Smokefree Apps                     | tools-tips/apps                   |
      | Build Your Quit Plan               | build-your-quit-plan              |

   Scenario Outline: View and click on relevant tools and tips links for the default homepage view
     And I should see an "<tools_tips_links>" element
     And I click the "<tools_tips_links>" element
     And I wait for "2" seconds
     Then I should be on "<page>"
     Examples:
       | tools_tips_links|  page |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(2) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.views-field.views-field-field-tools-tips-link.tools-n-tips-icon-links > div > div:nth-child(2) > ul > li:nth-child(3) > div > a > div > div > div.field.field-name-field-sub-phone-link.field-type-link-field.field-label-hidden > div > div > a | tools-tips/speak-expert                                                     |

   Scenario Outline:View and click on relevant articles & information for on the default home page
     And I should see text matching "ARTICLES & INFORMATION"
     And I should see an "<articles_links>" element
     And I click the "<articles_links>" element
     And I wait for "2" seconds
     Then I should be on "<page>"
     Examples: Tools and Tips Links
       | articles_links         | page |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a  | challenges-when-quitting/cravings-triggers/how-manage-cravings              |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-2.views-row-even > a                 | quitting-smoking/reasons-quit/benefits-quitting                             |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-upper > span:nth-child(2) > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a   | stay-smokefree-good/slips-relapses/tips-slips                               |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-1.views-row-odd.views-row-first > a              | challenges-when-quitting/stress-management/coping-stress-without-smoking    |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-2.views-row-even > a                             | quitting-smoking/prepare-quit                                               |
       | body > div.container-page > div.main-container.container > div > section > div > div.syndicate > div > div.view-content > div.views-row.views-row-1.views-row-odd.views-row-first.\36 15.content-area > div.global-view-articles-bottom > span > div > div > div.views-row.views-row-3.views-row-odd.views-row-last > a               | tools-tips/medications-can-help-you-quit/using-nicotine-replacement-therapy |


  Scenario:Look for Withdrawal Symptoms Quiz
      Then I should see text matching "Quiz: What Are Your Withdrawal Symptoms?"
      Then I should see the text "Is this withdrawal? Learn what your body is going through as you quit smoking and get tips to deal."
      Then I should see the link "Take the Quiz"


