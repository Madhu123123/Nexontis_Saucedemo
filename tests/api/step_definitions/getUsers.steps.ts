/// <reference types="codeceptjs" />
import { expect } from 'chai';
const { I } = inject();

let getUsersResponse: any;

When('I send a GET request to {string} for users', async (endpoint: string) => {
  const start = Date.now();
  getUsersResponse = await I.sendGetRequest(endpoint);
  const time = Date.now() - start;
  console.log('Response Time for ${endpoint}: ${time} ms');
});

Then('the GET users response status code should be {int}', (statusCode: number) => {
  expect(getUsersResponse).to.exist;
  expect(getUsersResponse.status).to.equal(statusCode);
});

Then('I print users with odd IDs from the GET response', () => {

  const users = getUsersResponse.data.data;
  const oddIdUsers = users.filter(user => user.id % 2 === 1);
  console.log('Users with odd IDs:');
  oddIdUsers.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}`);
    //I.amOnPage(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}`);
  });




});
