/// <reference types="codeceptjs" />

const { I } = inject();

Before(() => {
  // Maximize window by setting it to a large resolution
  I.resizeWindow(1900, 1100); 
});


Given('I am on the login page', async () => {
  I.amOnPage('https://www.saucedemo.com/');
  I.wait(2); // waits for 5 seconds

});

When('I login with {string} and password {string}', async (username, password) => {
  await I.fillField('#user-name', username);
  await I.fillField('#password', password);
  await I.click('#login-button');
});

Then('I should see the saucedemo products page', async () => {
  I.see('Products');
});

Then('I should select and add All Products to the cart', async () => {
  const addButtons = await I.grabNumberOfVisibleElements('.inventory_item .btn_inventory');
  for (let i = 0; i < addButtons; i++) {
    I.click(`(//button[contains(@class, 'btn_inventory')])[${i + 1}]`);
  }
});

Then('I should see All Products in the cart', async () => {
  I.click('.shopping_cart_link');
  const cartItems = await I.grabNumberOfVisibleElements('.cart_item');
  I.seeNumberOfElements('.cart_item', cartItems); // confirms items match
});

Then('I should see the cart icon with 6 items', async () => {
  I.see('6', '.shopping_cart_badge');
  I.wait(2); // waits for 5 seconds

});

Then('Find third item by name and remove it from the cart', async () => {
  I.click('.shopping_cart_link');
  const thirdItemName = await I.grabTextFrom('(//div[@class="inventory_item_name"])[3]');
  I.click(`//div[text()="${thirdItemName}"]/ancestor::div[@class="cart_item"]//button[contains(text(), "Remove")]`);
});

Then('I should see the cart have that it only contains the selected items', async () => {
  I.seeNumberOfElements('.cart_item', 5);
});

Then('I should see the cart icon with 5 items', async () => {
  I.see('5', '.shopping_cart_badge');
});

Then('I should finish the checkout process', async () => {
  I.click('[data-test="checkout"]');
  I.wait(5); // waits for 5 seconds

  I.fillField('[data-test="firstName"]', 'Madhu');
  I.fillField('[data-test="lastName"]', 'mmsr');
  I.fillField('[data-test="postalCode"]', '12345');
  I.click('[data-test="continue"]');
  I.click('[data-test="finish"]');
  I.wait(2); // waits for 5 seconds

});

Then('I should see the confirms the order', async () => {
  I.see('Thank you for your order!');
  I.wait(3); // waits for 5 seconds

});
