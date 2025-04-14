Feature: WEB_Products sorting by name


  Scenario Outline: Validate sorting by name for a user
    Given I am on the SauceDemo login page
    When I login as "<username>" with password "<password>"
    And I sort products by "<sortOption>"
    Then I should see products sorted in "<expectedOrder>" order

  Examples:
    | username       | password      | sortOption           | expectedOrder |
    | standard_user  | secret_sauce  | Name (A to Z)        | AtoZ          |
   # | standard_user  | secret_sauce  | Name (Z to A)        | ZtoA          |
