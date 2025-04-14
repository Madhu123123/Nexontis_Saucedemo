/// <reference types="codeceptjs" />
import page1 = require('../pages/Page1');

const { I } = inject();

Given('I am on the SauceDemo login page', () => {
  I.amOnPage('https://www.saucedemo.com');

});

When('I login as {string} with password {string}', async (username, password) => {
  I.fillField('#user-name', username);
  I.fillField('#password', password);
  I.click('#login-button');
  I.wait(3); 
});

/**
 * Verifies that locked out error is shown and captures a screenshot.
 */
Then('I should see a locked out error message', async () => {
  I.waitForElement('[data-test="error"]', 5);
  I.see('Sorry, this user has been locked out.', '[data-test="error"]');
  await I.saveScreenshot('locked_out_user_error.png');
  I.wait(2); 
  console.log('✅ Locked out user was shown the expected error message.');
});