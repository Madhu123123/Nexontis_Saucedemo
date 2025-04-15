Feature: API_Get Users with delay

  Scenario Outline: Validate response with delay query
    When I send a GET request to "<endpoint>"
    Then the response time should be less than 1000 milliseconds
    And the response should include a list of users

    Examples:
      | endpoint              |
      | api/users?delay=0     |
      | api/users?delay=3     |
      