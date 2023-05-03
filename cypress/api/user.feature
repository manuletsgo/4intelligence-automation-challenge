@api
Feature: CRUD of Users

  Scenario: Create User
    When create a new user with valid data
    Then the status code should be 201
    And the body message should be 'Cadastro realizado com sucesso'
    And the response should contain the ID

  Scenario: Get Created User
    When send a valid ID
    Then the status code should be 200
    And the response should contain the data of this user

  Scenario: Update User
    When send a valid ID with valid payload
    Then the status code should be 200
    And the body message should be 'Registro alterado com sucesso'

  Scenario: Get Edited User
    When send a valid ID
    Then the status code should be 200
    And the user data should be edited

  Scenario: Delete User
    When send a ID created previously
    Then the status code should be 200
    And the body message should be 'Registro excluído com sucesso'
