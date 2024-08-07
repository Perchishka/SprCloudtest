# SprCloudtest


## Installation & Configuraion

1. Execute from the root folder: npm install.<br />
2. Create a .env file for secret storage -> this file will not be pushed into the Git repository.<br />
3. Install playwright extension for Visual studio Code - Playwright Test for VSCode.

https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

Playwright has its own test runner for end-to-end tests, it is called Playwright Test.

## Tools & Libraries:

1. **Allure-playwright** reporter.
2. **Eslint, Prettier** - Linting tools

## Project structure

**Folders:**<br />
- **task1**  First task. <br />
- **lib** - folder where you can find all framework logic.<br />
- **lib/api** - classes responsible for API requests.<br />
- **lib/api/data/mocks** - objects to use in the requests.<br />
- **lib/ui** - classes responsible for UI logic.<br />
- **lib/ui/data** - objects to use in the checks.<br />
- **tests** - test folder.<br />

## Writing tests

File name should have structure FileName.spec.ts <br />

For new eendpoints you need to add classes in the lib/api folder.
!!! It is very important to name your files exactly as your classes.  In other case GitHub Actions  could not find their modules.

Assertions: By default, failed assertion will terminate test execution. Playwright also supports [soft assertions](https://playwright.dev/docs/test-assertions#soft-assertions).<br />
Failed soft assertions do not terminate test execution, but mark the test as failed.<br />
Use soft assertions where it is possible<br />

Before you start writing tests read [Playwright best practices](https://playwright.dev/docs/best-practices)

## How to run tests:<br />

1. npx playwright tests - will run all tests<br />
2. npx playwright test --debug - will run tests in debug mode<br />
3. npx playwright test specName.spec.ts - run specific file<br />
4. npx playwright test --project=api_tests - run specific project
4. package.json -> right mouse click on "test" script -> "run script"<br />

## Run Allure reporter locally:<br />

1. Generate Allure Report - `allure generate allure-results -o allure-report --clean`.
2. Open Allure Report - `allure open allure-report`.

Or use scripts from package.json.

## CI/CD:<br />
You can find GitHub configuration file in the folder : `.github\workflows\playwright.yml`

Remout Branch 'gh-pages' is for GitHub Actions

Allure report is availabe at `https://perchishka.github.io/SprCloudtest/`
