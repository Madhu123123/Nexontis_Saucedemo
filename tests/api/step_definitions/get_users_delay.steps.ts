/// <reference types="codeceptjs" />
import { expect } from 'chai';
const { I } = inject();

let delayResponse: any;
let responseTime = 0;

When('I send a GET request to {string}', async (endpoint: string) => {
  const start = Date.now();
  delayResponse = await I.sendGetRequest(endpoint);
  responseTime = Date.now() - start;
  console.log(' Response Time for ${endpoint}: ${responseTime} ms');
});

Then('the response time should be less than 1000 milliseconds', () => {
  expect(responseTime).to.be.lessThan(1000, 'Response time exceeded 1 second (got ${responseTime} ms)');
});

Then('the response should include a list of users', () => {
  expect(delayResponse).to.exist;
  expect(delayResponse.status).to.equal(200);
  expect(delayResponse.data).to.have.property('data');
  expect(delayResponse.data.data).to.be.an('array').that.is.not.empty;

  const firstUser = delayResponse.data.data[0];
  console.log(' First user:', firstUser);
});