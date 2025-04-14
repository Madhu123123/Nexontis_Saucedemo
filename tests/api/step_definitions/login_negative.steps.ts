/// <reference types="codeceptjs" />
import { expect } from 'chai';

const { I } = inject();
let response: any;

When('I try to login with email {string} and no password', async (email: string) => {
  response = await I.sendPostRequest('api/login', { email });
});

Then('the login should be rejected with error message {string}', (expectedMessage: string) => {
  expect(response.status).to.equal(400, 'Expected HTTP 400 Bad Request');
  expect(response.data).to.have.property('error');
  expect(response.data.error).to.equal(expectedMessage);
});