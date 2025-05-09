import * as https from 'https';
import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: ' https://www.saucedemo.com/',
      show: true
    },
    REST: {
      endpoint: 'https://reqres.in/',
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file'
  },
  gherkin: {
    features: [
      './tests/web/features/*.feature',
      './tests/api/features/*.feature',
    ],
    steps: [
      //web step definitions
      './tests/web/step_definitions/InvalidLoginUser.steps.ts',
      './tests/web/step_definitions/findProductAddCart.steps.ts',
      './tests/web/step_definitions/sortProductsByPrice.steps.ts',
      './tests/web/step_definitions/confirmsTheOrder.steps.ts',

      //api step definitions
      './tests/api/step_definitions/getUsers.steps.ts',
      './tests/api/step_definitions/CreateUser.steps.ts',
      './tests/api/step_definitions/UserUpdate.steps.ts',
      './tests/api/step_definitions/getDelayUsers.steps.ts',
      './tests/api/step_definitions/Invalidlogin.steps.ts',


    ],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results',
    },
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  name: 'Codecept_Sacedemo_M2',
    require: ['ts-node/register'],
}