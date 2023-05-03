Feature: Login

  Background:
    Given its on login page

  Scenario: Login into Account
    When fill login data
    And click on login button
    Then the user should be logged

  Scenario: Exception Login
    When fill login with incorrect data
    And click on login button
    Then error message should be displayed
