Feature: API_Invalid Login Validation

  Scenario Outline: Login attempt without password should fail
    When I try to login with email "<email>" and no password
    Then the login should be rejected with error message "<errorMessage>"

    Examples:
      | email              | errorMessage       |
      | sdfdf@test.in      | Missing password   |

      