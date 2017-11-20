@api
Feature: Footer Content Visibility
  In order to find more content and information on the website
  As a website user
  I need to be able to scroll down to the bottom of the page and view all the footer links on the Smokefree Website

  Background:
   Given I am on the homepage


  Scenario Outline: Main navigation links are present in the footer
    Then I should see the link "<main_navigation_link>" in the footer
    Examples: Navigation footer links
      | main_navigation_link     |
      | Tools & Tips             |
      | Challenges When Quitting |
      | Quitting Smoking         |
      | Stay Smokefree for Good  |
      | Help Others Quit         |
      | About Smokefree.gov      |
      | Ask for Help             |

   Scenario Outline: The sub menu links under the "Tools & Tips" main navigation link are present in the footer
     Then I should see the link "<sub_menu_link>" in the footer
     Examples: Navigation footer "Tools & Tips" sub menu links
       | sub_menu_link         |
       | Create My Quit Plan   |
       | Explore Quit Methods  |
       | Phone Apps            |
       | Speak To An Expert    |
       | Join a Research Study |

  Scenario Outline: The sub menu links under the "Challenges When Quitting" main navigation link are present in the footer
    Then I should see the link "<sub_menu_link>" in the footer
    Examples: Navigation footer "Challenges When Quitting" sub menu links
      | sub_menu_link                           |
      | Cravings & Triggers                     |
      | Managing Withdrawal                     |
      | Stress Management                       |
      | Mood Management                         |
      | Dealing with Weight Gain after Quitting |

  Scenario Outline: The sub menu links under the "Quitting Smoking" main navigation link are present in the footer
    Then I should see the link "<sub_menu_link>" in the footer
    Examples: Navigation footer "Quitting Smoking" sub menu links
      | sub_menu_link            |
      | Reasons To Quit          |
      | Prepare To Quit          |
      | Steps to Manage Quit Day |
      | Why Quitting Is Hard     |
      | Ask for Help             |

  Scenario Outline: The sub menu links under the "Stay Smokefree for Good" main navigation link are present in the footer
    Then I should see the link "<sub_menu_link>" in the footer
    Examples: Navigation footer "Stay Smokefree for Good" sub menu links
      | sub_menu_link         |
      | How to Stay Smokefree |
      | Slips and Relapses    |
      | Get Active            |
      | Eat Healthy           |

  Scenario Outline: The sub menu links under the "Help Others Quit" main navigation link are present in the footer
    Then I should see the link "<sub_menu_link>" in the footer
    Examples: Navigation footer "Help Others Quit" sub menu links
      | sub_menu_link            |
      | For Health Professionals |
      | For Family & Friends     |

  Scenario: The sub menu link under the "About Smokefree.gov" main navigation link is present in the footer
    Then I should see the link "Smokefree Partner Toolkit" in the footer

  Scenario Outline: Smokefree vet, Women, Teen, Espanol and 60+ website image links are present in the footer
    Then I should see the link "<link>" in the footer
    Examples: Smokefree website links
      | link    |
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





