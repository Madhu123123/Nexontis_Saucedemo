Feature: WEB_Confirms the order


Scenario Outline: User able to confirms the order
    Given I am on the login page
    When I login with "<username>" and password "<password>"
    Then I should see the saucedemo products page
    And I should select and add All Products to the cart
    And I should see All Products in the cart
    And I should see the cart icon with 6 items
    And Find third item by name and remove it from the cart
    And I should see the cart have that it only contains the selected items
    And I should see the cart icon with 5 items
    And I should finish the checkout process
    And I should see the confirms the order

    Examples:
      | username         | password      |
      | standard_user    | secret_sauce  |
      
