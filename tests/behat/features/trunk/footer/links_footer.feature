Feature: Footer Content Links
 In order to navigate to more content and information on the website
 As a website user
 I need to be able to scroll down to the bottom of the page and click on the footer links for the Smokefree Website

  Background:
    Given I am on the homepage

 @javascript
  Scenario Outline: Main navigation links in the footer get directed to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
#   But the response status code should be 200
   Examples: Main navigations links and corresponding pages
      |link                      | page                     |
      | Tools & Tips             | tools-tips               |
      | Challenges When Quitting | challenges-when-quitting |
      | Quitting Smoking         | quitting-smoking         |
      | Stay Smokefree for Good  | stay-smokefree-good      |
      | Help Others Quit         | help-others-quit         |
      | About Smokefree.gov      | about-smokefree          |


  Scenario Outline: The sub menu links under the "Tools & Tips" main navigation link in the footer get directed to their corresponding pages
    When I click "<sub_menu_link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Navigation footer "Tools & Tips" sub menu links
      | sub_menu_link         | page                            |
      | Create My Quit Plan   | build-your-quit-plan            |
      | Explore Quit Methods  | tools-tips/explore-quit-methods |
      | Phone Apps            | tools-tips/apps                 |
      | Speak To An Expert    | tools-tips/speak-expert         |
      | Join a Research Study | tools-tips/join-research-study  |


  Scenario Outline: The sub menu links under the "Challenges When Quitting" main navigation link in the footer get directed to their corresponding pages
    When I click "<sub_menu_link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Navigation footer "Challenges When Quitting" sub menu links
      | sub_menu_link                           | page                                                        |
      | Cravings & Triggers                     | challenges-when-quitting/cravings-triggers                  |
      | Managing Withdrawal                     | challenges-when-quitting/managing-withdrawal                |
      | Stress Management                       | challenges-when-quitting/stress-management                  |
      | Mood Management                         | challenges-when-quitting/mood-management                    |
      | Dealing with Weight Gain after Quitting | challenges-when-quitting/dealing-weight-gain-after-quitting |


  Scenario Outline: The sub menu links under the "Quitting Smoking" main navigation link in the footer get directed to their corresponding pages
    When I click "<sub_menu_link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Navigation footer "Quitting Smoking" sub menu links
      | sub_menu_link            | page                                   |
      | Reasons To Quit          | quitting-smoking/reasons-quit          |
      | Prepare To Quit          | quitting-smoking/prepare-quit          |
      | Steps to Manage Quit Day | quitting-smoking/steps-manage-quit-day |
      | Why Quitting Is Hard     | quitting-smoking/why-quitting-hard     |
      | Ask for Help             | quitting-smoking/ask-help              |

  Scenario Outline: The sub menu links under the "Stay Smokefree for Good" main navigation link in the footer get directed to their corresponding pages
    When I click "<sub_menu_link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Navigation footer "Stay Smokefree for Good" sub menu links
      | sub_menu_link         | page                                   |
      | How to Stay Smokefree | stay-smokefree-good/how-stay-smokefree |
      | Slips and Relapses    | stay-smokefree-good/slips-relapses     |
      | Get Active            | stay-smokefree-good/get-active         |
       | Eat Healthy          | stay-smokefree-good/eat-healthy        |

  Scenario Outline: The sub menu links under the "Help Others Quit" main navigation link in the footer get directed to their corresponding pages
    When I click "<sub_menu_link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Navigation footer "Help Others Quit" sub menu links
      | sub_menu_link            | page                                  |
      | For Health Professionals | help-others-quit/health-professionals |
      | For Family & Friends     | help-others-quit/family-friends       |

  Scenario: The sub menu link under the "About Smokefree.gov" main navigation link in the footer get directed to its corresponding page
    When I click "Smokefree Partner Toolkit" in the footer
    Then I am on "help-others-quit/health-professionals/smokefree-partner-toolkit"
    But the response status code should be 200

  Scenario Outline: Smokefree vet, women, teen, espanol and 60+ website image links get directed to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Smokefree website links and corresponding pages
      | link    | page                           |
      | vet     | veterans                       |
      | women   | https://women.smokefree.gov/   |
      | teen    | https://teen.smokefree.gov/    |
      | espanol | https://espanol.smokefree.gov/ |
      | 60      | https://60plus.smokefree.gov/# |


  Scenario Outline: Help links are present in the footer
    When I click "<link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Help footer links
      | link            | page                                              |
      | LiveHelp        | https://livehelp.cancer.gov/app/chat/chat_landing |
      | QuitPlan        | build-your-quit-plan                              |
      | SmokefreeTXT    | smokefree-text-messaging-programs                 |
      | mHealth Monitor | mhealthmonitor/blog-index                         |

  Scenario Outline: Social media icons(facebook, instagram and twitter) get directed to the corresponding websites in the footer
    When I click the "<element>" element
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Social media footer icons
      | element                                                                                                  | page                                 |
      | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(1) | https://www.facebook.com/SmokefreeUS |
      | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(2) | http://instagram.com/smokefreeus     |
      | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(3) | http://twitter.com/SmokefreeUs       |


  Scenario Outline: The site map links in the footer get redirected to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
    But the response status code should be 200
    Examples: Site map footer links
      | link                                         | page                                                                 |
      | Home                                         | /                                                                    |
      | About Smokefree                              | about-smokefree                                                      |
      | Health Professionals                         | help-others-quit/health-professionals/resources-health-professionals |
      | FOIA                                         | https://www.cancer.gov/policies/foia                                 |
      | Privacy                                      | privacy-policy                                                       |
      | Accessibility                                | accessibility                                                        |
      | Viewing Files                                | viewing-files                                                        |
      | Disclaimer                                   | disclaimer                                                           |
      | U.S. Department of Health and Human Services | https://www.hhs.gov/                                                 |
      | National Institutes of Health                | https://www.nih.gov/                                                 |
      | National Cancer Institute                    | https://www.cancer.gov/                                              |
      | USA.gov                                      | https://www.usa.gov/                                                 |


  Scenario: Scenario: BeTobaccoFree.gov image is click able and get redirected to corresponding websites
    When I click "BeTobaccoFree.gov" in the footer
    Then I am on "https://betobaccofree.hhs.gov/index.html"
    But the response status code should be 200

