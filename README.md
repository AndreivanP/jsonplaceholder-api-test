# jsonplaceholder-api-test
Demo test automation framework using supertest

[![E2E tests](https://github.com/AndreivanP/jsonplaceholder-api-test/actions/workflows/ci.yml/badge.svg)](https://github.com/AndreivanP/jsonplaceholder-api-test/actions/workflows/ci.yml)

# Pre Requirements
- It's needed to have `npm` version greater than `8.0.0` installed.
- It's needed to have `node js` version greater than `14.0.0` installed.

## Setup

1. Clone and access the cloned repo folder

    `$ git clone git@github.com:AndreivanP/jsonplaceholder-api-test.git && cd jsonplaceholder-api-test`

2. Install the project dependencies

    `$ npm install`

## CLI commands
### Test Execution

Run `npm test`, to run all the tests.

## Features
### Test suite

* [Supertest][test-tool], to create and run API tests.
* [Faker][data-tool], to generate randon data for tests.
* [Cross-env][env-tool], to create environment variables on the fly.
* [Mocha][runner-tool], to have `it` and `describe` structure and test runner.
* [Chai][assertion-tool], to perform the asserts.

#### Test Cases

- All test cases are within `test` folder. 
- On `test/users` the focus was to cover the basic scenarios for all the CRUD operations.
- `test/utils` holds all the common variable and methods used by the tests.
- `config` holds the configuration environment files, such as baseUrls making easier to run tests in multiple environments.
- Test cases were built to be independent that means it's possible to run a specific test case without the need to run another test case before.
- `.mocharc.js` is the mocha configuration file.

### CI/CD

- It's possible to execute tests from a docker container. For that there are two files: `Dockerfile` and `docker-compose.yml`. In order to build the image you can run `docker-compose -f docker-compose.yml build` and in order to create the container run `docker-compose -f docker-compose.yml up -d` and to run all the tests from docker container you can run `docker-compose -f docker-compose.yml exec -T api-runner npm test`. Note that this is optional and it's mandatory to have docker installed on your localhost.
- There is a github actions workflow which uses the docker setup mentioned above and it is triggered every time a PR is open on main branch.

# Future Improvements

- Add a report tool such as mochaawesome.
- Create a mock structure to work with custom data. Suggested tool is `mockend`

<!-- Links list -->
[test-tool]: https://www.npmjs.com/package/supertest
[data-tool]: https://www.npmjs.com/package/@faker-js/faker
[env-tool]: https://www.npmjs.com/package/cross-env
[runner-tool]: https://mochajs.org/
[assertion-tool]: https://www.chaijs.com/api/assert/