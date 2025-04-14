/// <reference types="codeceptjs" />
import page1 = require('../pages/Page1');
import * as assert from 'assert'; 
const { I } = inject();

Given('I am on the SauceDemo login page', async () => {
  I.amOnPage('https://www.saucedemo.com/');
});

When('I login as {string} with password {string}', async (username, password) => {
  I.fillField('#user-name', username);
  I.fillField('#password', password);
  I.click('#login-button');
});

When('I sort products by {string}', (sortOption) => {
 // sortPage.sortByOption(sortOption);
  I.selectOption('.product_sort_container', sortOption);
  I.wait(4); // Allow UI to update
  I.waitForElement('.inventory_item_name', 5);
});


/**
* Validates that product names are sorted based on expected order.
* @param expectedOrder - AtoZ or ZtoA
*/
Then('I should see products sorted in {string} order', async (order) => {
  //await sortPage.verifySortedOrderByName(order);

  const itemNames = await I.grabTextFromAll('.inventory_item_name');
    console.log(`🔎 Sorting verification for: ${order}`);
    console.log('🛒 Product Names on UI:', itemNames);

    const sortedAsc = [...itemNames].sort((a, b) => a.localeCompare(b));
    const sortedDesc = [...itemNames].sort((a, b) => b.localeCompare(a));

    if (order === 'AtoZ') {
      assert.deepStrictEqual(itemNames, sortedAsc, '❌ Products are not sorted A to Z');
      console.log('✅ AtoZ sorting passed');
    } else if (order === 'ZtoA') {
      assert.deepStrictEqual(itemNames, sortedDesc, '❌ Products are not sorted Z to A');
      console.log('✅ ZtoA sorting passed');
    } else {
      throw new Error(`Unsupported sort order: ${order}`);
      
    }
    console.log('✅ Products are sorted correctly');
    I.wait(2); 
  
});