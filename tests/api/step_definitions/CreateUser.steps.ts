/// <reference types="codeceptjs" />
import { expect } from 'chai';
import moment from 'moment';

const { I } = inject();
let response: any;

When('I create a new user with name {string} and job {string}', async (name: string, job: string) => {
  const payload = { name, job };
  response = await I.sendPostRequest('api/users', payload);
});

Then('the response status should be {int}', (statusCode: number) => {
  expect(response.status).to.equal(statusCode, 'Expected correct status code for user creation');
  console.log(' User creation status code:', response.status);
});

Then('the user creation date should be today', () => {
  const createdAt = response.data.createdAt;
  console.log(' Created At:', createdAt);

  const today = moment().format('YYYY-MM-DD');
  const responseDate = moment(createdAt).format('YYYY-MM-DD');

  expect(responseDate).to.equal(today, 'Creation date does not match today');
});