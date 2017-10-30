Feature: Top Hat
  In order to use top hat
  As a user
  I need to be able to view tophat and navigate to the respective links

  Background:
   Given I am on the homepage

@api
  Scenario: User looks for the tophat
    Then I should see the link "smokefreevet"
    Then I should see the link "smokefreewomen"
    Then I shouild see the link "smokefreeteen"
    Then I should see the link "smokefreeespanol"
    Then I should see the link "smokefree60+"