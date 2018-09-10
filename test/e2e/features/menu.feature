@all
Feature: Menu

  @sandisk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com//" url
    When I wait until "Menu Bar" is present
    Then Text of "Menu Bar Buttons" should contain "FOR HOME"
      And Text of "Menu Bar Buttons" should contain "FOR BUSINESS"
      And Text of "Menu Bar Buttons" should contain "OEM DESIGN"
      And Text of "Menu Bar Buttons" should contain "ABOUT SANDISK"
      And Text of "Menu Bar Buttons" should contain "SUPPORT"
      And Count of "Menu Bar Buttons" should be "5"
      And Page title should be "SanDisk | Global Leader in Flash Memory Storage Solutions"
      And Text of "Footer Links" should contain "Legal"
      And I wait "10" seconds

