# Saucedemo

1. Access the web interface at `https://www.saucedemo.com`
2. Access the API at `https://reqres.in/

## Steps to Run the Scripts

1. Clone the repository
2. Install codeceptjs dependencies
3. Install chai dependencies -API
4. Install the allure reports dependencies
5. Run the "npx codeceptjs run --features"

## Install dependencies

* npm install codeceptjs playwright @codeceptjs/configure --save-dev
* npm install @types/node typescript ts-node --save-dev
* npm install @codeceptjs/helper --save-dev
* npm install chai @types/chai --save-dev
* npm install chai@4.3.7

* npx codeceptjs run --features


## allure reports

* npm install --save-dev @codeceptjs/allure-legacy
* npx allure generate output/allure-results --clean -o output/allure-report
* npx allure open output/allure-report

