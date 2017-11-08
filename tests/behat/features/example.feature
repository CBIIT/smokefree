Feature: Some terse yet descriptive text of what is desired (Requirement name)
  In order to realize a named business value (Goal of the requirement)
  As an explicit system actor (type of user)
  I want to gain some beneficial outcome which furthers the goal of thr requirement (End goal of the requirement)


  Scenario: Some determinable business situation
    Given some precondition
    And some other precondition
    When some action by the actor
    And some other action
    And yet another action
    Then some testable outcome is achieved
    And something else we can check happens too

Feature: ls
  In order to see the directory structure
  As a UNIX user
  I need to be able to list the current directory's contents

  Scenario: List 2 files in a directory
    Given I am in a directory "test"
    And I have a file named "foo"
    And I have a file named "bar"
    When I run "ls"
    Then I should get:
      """
      bar
      foo
      """