Feature: API_Update the Users details API

  Scenario Outline: Update a user and validate response
    When I send a PUT request to "<endpoint>" with name "<name>" and job "<job>"
    Then the response status code should be <statusCode>
    And the response body should contain name "<name>" and job "<job>"

    Examples:
      | endpoint     | name         | job           | statusCode |
      | api/users/2  | MadhuM       | QA            | 200        |
      | api/users/5  | TestM        | scrumMaster   | 200        |
      