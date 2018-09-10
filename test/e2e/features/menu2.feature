@all
Feature: Menu 2

  @sandisk2
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com//" url
    When I wait until "Menu Bar" is present
    Then Text of "Menu Bar Buttons" should contain "FOR HOME"
