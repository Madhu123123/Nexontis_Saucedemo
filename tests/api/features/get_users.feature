Feature: API_Get Users API

  Scenario Outline: Retrieve users and print those with odd IDs
    When I send a GET request to "<endpoint>" for users
    Then the GET users response status code should be <statusCode>
    And I print users with odd IDs from the GET response

    Examples:
      | endpoint             | statusCode |
      | api/users?page=1     | 200        |