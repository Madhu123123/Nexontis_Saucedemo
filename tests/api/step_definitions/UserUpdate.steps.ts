/// <reference types="codeceptjs" />
import { expect } from 'chai';

const { I } = inject();

let updateResponse: any;

When(
  'I send a PUT request to {string} with name {string} and job {string}',
  async (endpoint: string, name: string, job: string) => {
    const payload = { name, job };
    updateResponse = await I.sendPutRequest(endpoint, payload);
  }
);

Then('the response status code should be {int}', (statusCode: number) => {
  expect(updateResponse, 'No response object found!').to.exist;
  expect(updateResponse.status).to.equal(statusCode);
});

Then('the response body should contain name {string} and job {string}', (expectedName: string, expectedJob: string) => {
  expect(updateResponse, 'No response object found!').to.exist;
  expect(updateResponse.data).to.include({
    name: expectedName,
    job: expectedJob,
  });
});
