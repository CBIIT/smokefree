Feature: Top Hat Links
  In order to navigate to the other Smokefree Websites
  As a website user
  I need to be able to view all the tophat links and navigate to the respective webpages

  Background:
   Given I am on the homepage

@api
Scenario Outline: Smokefree vet, women, teen, espanol and 60+ website image links are present in the TopHat
  Then I should see the link "<link>"
  When I click "<link>"
  Then I am on "<page>"
  Examples: Smokefree website links
    | link              | page                           |
    | smokefree-vet     | veterans                       |
    | smokefree-women   | https://women.smokefree.gov/   |
    | smokefree-teen    | https://teen.smokefree.gov/    |
    | smokefree-espanol | https://espanol.smokefree.gov/ |
    | smokefree-60+     | https://60plus.smokefree.gov/# |
  But the response status code should not be 404


