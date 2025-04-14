Feature: WEB_Locked Out User Validation

  Scenario Outline: Login attempt with locked out user should be blocked
    Given I am on the SauceDemo login page
    When I login as "<username>" with password "<password>"
    Then I should see a locked out error message

    Examples:
      | username         | password      |
      | locked_out_user  | secret_sauce  |