Feature: Footer Content Visibility
  In order to find more content and information on the website
  As a website user
  I need to be able to scroll down to the bottom of the page and view all the footer links on the Smokefree Website

  Background:
   Given I am on the homepage

  @api
  Scenario Outline: Main navigation links are present in the footer
    Then I should see the link "<link>" in the footer
    Examples: Navigation footer links
      | link                     |
      | Tools & Tips             |
      | Challenges When Quitting |
      | Quitting Smoking         |
      | Stay Smokefree for Good  |
      | Help Others Quit         |
      | About Smokefree.gov      |

  Scenario Outline: Smokefree vet, women, teen, espanol and 60+ website image links are present in the footer
    Then I should see the link "<link>" in the footer
    Examples: Smokefree website links
      |link     |
      | vet     |
      | women   |
      | teen    |
      | espanol |
      | 60      |
    But I should not see the link "smokefree-gov" in the footer

   Scenario Outline: Help links are present in the footer
     Then I should see the link "<link>" in the footer
     Examples: Help footer links
     | link            |
     | LiveHelp        |
     | QuitPlan        |
     | SmokefreeTXT    |
     | mHealth Monitor |

  Scenario Outline: Social media icons(facebook, instagram and twitter) are present in the footer
    Then I should see an "<element>" element
    Examples: Social media footer icons
    | element |
    | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(1) |
    | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(2) |
    | #footer > footer > div.container > div.left-box > div.col-xs-12.col-md-12.iconrow > div > a:nth-child(3) |


  Scenario Outline: The site map links in the footer are present
    Then I should see the link "<link>" in the footer
    Examples: Site map footer links
    | link |
    | Home                                         |
    | About Smokefree                              |
    | Health Professionals                         |
    | FOIA                                         |
    | Privacy                                      |
    | Accessibility                                |
    | Viewing Files                                |
    | Disclaimer                                   |
    | U.S. Department of Health and Human Services |
    | National Institutes of Health                |
    | National Cancer Institute                    |
    | USA.gov                                      |

  Scenario: BeTobaccoFree.gov image is present in the footer
    Then I should see the link "BeTobaccoFree.gov" in the footer


  Scenario: Nih text is present in the footer
    Then I should see the text "NIH...Turning Discovery Into Health®" in the footer




