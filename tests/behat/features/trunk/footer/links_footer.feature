Feature: Footer Content Links
 In order to navigate to more content and information on the website
 As a website user
 I need to be able to scroll down to the bottom of the page and click on the footer links for the Smokefree Website

  Background:
    Given I am on the homepage

 @api
  Scenario Outline: Main navigation links in the footer get directed to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
    Examples: Main navigations links and corresponding pages
      |link                      | page                     |
      | Tools & Tips             | tool-tips                |
      | Challenges When Quitting | challenges-when-quitting |
      | Quitting Smoking         | quitting-smoking         |
      | Stay Smokefree for Good  | stay-smokefree-good      |
      | Help Others Quit         | help-others-quit         |
      | About Smokefree.gov      | about-smokefree          |
   But the response status code should not be 404


  Scenario Outline: Smokefree vet, women, teen, espanol and 60+ website image links get directed to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
    Examples: Smokefree website links and corresponding pages
      | link    | page                           |
      | vet     | veterans                       |
      | women   | https://women.smokefree.gov/   |
      | teen    | https://teen.smokefree.gov/    |
      | espanol | https://espanol.smokefree.gov/ |
      | 60      | https://60plus.smokefree.gov/# |
    But the response status code should not be 404


  Scenario Outline: Help links are present in the footer
    When I click "<link>" in the footer
    Then I am on "<page>"
    Examples: Help footer links
      | link            | page                                              |
      | LiveHelp        | https://livehelp.cancer.gov/app/chat/chat_landing |
      | QuitPlan        | build-your-quit-plan                              |
      | SmokefreeTXT    | smokefree-text-messaging-programs                 |
      | mHealth Monitor | mhealthmonitor/blog-index                         |
    But the response status code should not be 404

  Scenario Outline: The site map links in the footer get redirected to their corresponding pages
    When I click "<link>" in the footer
    Then I am on "<page>"
    Examples: Site map footer links
      | link                                         | page                                                                 |
      | Home                                         | homepage                                                             |
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
    But the response status code should not be 404

  Scenario: Scenario: BeTobaccoFree.gov image is click able and get redirected to corresponding websites
    When I click "BeTobaccoFree.gov" in the footer
    Then I am on "https://betobaccofree.hhs.gov/index.html"
    But the response status code should not be 404

