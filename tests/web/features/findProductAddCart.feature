Feature: WEB_Selected Product in the cart


Scenario Outline: User able to add the selected Product in the cart
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I should see the saucedemo products page
    And I should select the "<product_name>" product and add to the cart
    And I should see the Product in the cart
    And I should see the cart icon with 1 items
    And I should see the cart have "<product_name>" only contains the selected items    

    Examples:
      | username         | password      | product_name  |
      | problem_user     | secret_sauce  | Sauce Labs Bike Light |

