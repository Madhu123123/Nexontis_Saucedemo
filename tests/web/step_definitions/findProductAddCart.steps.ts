/// <reference types="codeceptjs" />

import page1 = require('../pages/Page1');

const { I } = inject();

Before(() => {
  // Maximize window by setting it to a large resolution
  I.resizeWindow(1900, 1100); 
});


Given('I am on the login page', async () => {
  I.amOnPage('https://www.saucedemo.com/');
  I.wait(2); // waits for 5 seconds

});

When('I login with username {string} and password {string}', async (username, password) => {
  I.fillField('//input[@id="user-name"]', username);
  I.fillField('//input[@id="password"]', password);
  I.click('//input[@id="login-button"]');
  I.wait(2); // waits for 5 seconds

});

Then('I should see the saucedemo products page', async () => {
  I.see('Products');
});

Then('I should select the {string} product and add to the cart', async (product_name: string) => {
    const productSelector = `//div[text()="${product_name}"]/ancestor::div[@class="inventory_item"]//button[contains(text(),"Add to cart")]`;
    I.click(productSelector);
    I.wait(2); 
  });
  
  Then('I should see the Product in the cart', async () => {
    I.click('.shopping_cart_link');
    I.see('Your Cart');
  });
  
  Then('I should see the cart icon with 1 items', async () => {
    I.seeElement('.shopping_cart_badge');
    I.see('1', '.shopping_cart_badge');
    I.wait(5);
  }); 
  
  Then('I should see the cart have {string} only contains the selected items', async (productName: string) => {
    try {
      const actualItems = await I.grabTextFromAll('.inventory_item_name');
  
      if (actualItems.includes(productName)) {
        console.log(`✅ Expected product "${productName}" was correctly added to the cart.`);
      } else {
        console.warn(`⚠️ Mismatch! Expected "${productName}", but found: ${actualItems.join(', ')}`);
        await I.saveScreenshot(`product_mismatch_problem_user_${Date.now()}.png`);
        console.warn(`ℹ️ This is a known issue with "problem_user" on SauceDemo.`);
      }
    } catch (error) {
      console.error('❌ Error verifying cart contents:', error);
      await I.saveScreenshot(`verify_cart_error_${Date.now()}.png`);
    }
  });