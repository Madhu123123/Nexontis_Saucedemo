Feature: API_Create Users API

  Scenario Outline: Create user and validate creation date
    When I create a new user with name "<name>" and job "<job>"
    Then the response status should be <statusCode>
    And the user creation date should be today

    Examples:
      | name             | job     | statusCode |
      | Madhu            | QA      | 201        |

      

      