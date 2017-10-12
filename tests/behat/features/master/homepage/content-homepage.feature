@javascript
  Feature: Home Page
  In order to use the smokefree website
  As a website user
  I need to be able to view all contents on the home page

    Background:
      Given I visit homepage

    Scenario: User looks for the homepage logo
      Then I should see the text "smokefree.gov"

    Scenario: User looks for the primary navigation
      Then I should see the link "Home"
      Then I should see the link "Tools & Tips"
      Then I should see the link "Challenges When Quitting"
      Then I should see the link "Quitting Smoking"
      Then I should see the link "Stay Smokefree for Good"
      Then I should see the link "Help Others Quit"

    Scenario: User looks for the 4 action buttons
      Then I should see the link "I Want to Quit"
      Then I should see the link "My Quit Day"
      Then I should see the link "I Recently Quit"
      Then I should see the link "Staying Quit"

    Scenario: User looks for the intro block
      Then I should see the text "Quitting is a Journey"
      Then I should see the text "On this site you’ll find support, tips, tools, and expert advice to help you or someone you love quit smoking"
      Then I should see the text "Get 24/7 Help"
      Then I should see the text "Explore our apps to discover tips and tools to help you on your smokefree journey"
      Then I should see the link "Download"

    Scenario: User looks for articles and Information
      Then I should see the text "ARTICLES & INFORMATION"
      Then I should see the text "How To Manage Cravings"
      Then I should see the text "When you have a craving, it's important to have a plan to beat that urge to smoke."


    Scenario: User looks for the Tools & Tips Section
      Then I should see the text "Tools & Tips"
      Then I should see the text "Learn about different tools to help you quit and how to use them"
      Then I should see the link "Smokefree Texting Programs"
      Then I should see the link "Using Nicotine Replacement Therapy"
      Then I should see the link "Speak to an Expert"
      Then I should see the link "Smokefree Apps"
      Then I should see the link "Build Your Quit Plan"


    Scenario: User looks for Withdrawal Symptoms Quiz
      Then I should see the text "Quiz: What Are Your Withdrawal Symptoms?"
      Then I should see the text "Is this withdrawal? Learn what your body is going through as you quit smoking and get tips to deal."
      Then I should see the link "Take the Quiz"



