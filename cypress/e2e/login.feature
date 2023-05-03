Feature: Login
  Scenario: Login into Account
    Given its on login page
    When fill login data
    And click on login button
    Then the user should be logged
