# QA Automation Portfolio

Playwright-based UI test automation for the [SauceDemo](https://www.saucedemo.com/) web application. The project demonstrates maintainable end-to-end testing with TypeScript, page objects, custom fixtures, authentication state reuse, and CI execution.

## Project Overview

This repository contains a UI automation suite for SauceDemo's login, product inventory, shopping cart, checkout, and navigation menu workflows. It is intended to demonstrate practical test automation design, browser coverage, negative validation, and automated reporting.

The suite currently contains **24 test files** and **27 test cases**. Because the Playwright configuration runs each case against Chromium, Firefox, and WebKit, a full run schedules up to **81 browser executions**.

## Tech Stack

| Technology or tool | Purpose |
| --- | --- |
| TypeScript | Type-safe test and framework source code |
| Node.js 20+ | JavaScript runtime required by the installed Playwright packages |
| Playwright Test 1.64.1 | Browser automation, assertions, projects, fixtures, tracing, and reporting |
| dotenv 18.0.9 | Loads `BASE_URL` from `.env` |
| GitHub Actions | Continuous integration on pushes and pull requests to `main` or `master` |

## Project Structure

```text
qa-automation-portfolio/
├── .env.example
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── page-fixtures.ts
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── InventoryPage.ts
│   ├── LoginPage.ts
│   └── MenuPage.ts
├── playwright/
│   └── .auth/
│       └── user.json                 # Generated storage state; ignored by Git
├── test-data/
│   └── products.ts
├── tests/
│   ├── cart/
│   │   ├── add-product-to-cart.spec.ts
│   │   ├── remove-product-from-cart.spec.ts
│   │   ├── remove-product-from-shopping-cart.spec.ts
│   │   ├── verify-multiple-products-in-cart.spec.ts
│   │   ├── verify-product-in-cart.spec.ts
│   │   └── verify-product-quantity-in-cart.spec.ts
│   ├── checkout/
│   │   ├── checkout-empty-first-name.spec.ts
│   │   ├── checkout-empty-last-name.spec.ts
│   │   ├── checkout-empty-postal-code.spec.ts
│   │   ├── checkout-information-page.spec.ts
│   │   ├── checkout-with-valid-information.spec.ts
│   │   ├── verify-order-completion.spec.ts
│   │   └── verify-order-summary.spec.ts
│   ├── login/
│   │   ├── empty-password.spec.ts
│   │   ├── empty-username.spec.ts
│   │   ├── invalid-password.spec.ts
│   │   └── valid-login.spec.ts
│   ├── menu/
│   │   ├── verify-logout.spec.ts
│   │   ├── verify-navigation-menu.spec.ts
│   │   └── verify-reset-app-state.spec.ts
│   ├── products/
│   │   ├── product-list.spec.ts
│   │   ├── product-name.spec.ts
│   │   ├── sort-name-a-to-z.spec.ts
│   │   └── sort-price-low-to-high.spec.ts
│   └── global-setup.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

Important files and folders:

- `tests/` contains the test specifications grouped by application area.
- `pages/` contains the Page Object Model classes used by the tests.
- `fixtures/page-fixtures.ts` extends Playwright's base test with typed page-object fixtures.
- `test-data/products.ts` stores product identifiers used by the data-driven cart test.
- `tests/global-setup.ts` logs in before the test run and saves the authenticated browser storage state.
- `playwright.config.ts` defines the test directory, browser projects, HTML reporter, base URL, storage state, retries, and tracing.
- `.github/workflows/playwright.yml` defines the CI test workflow.
- `.env.example` documents the required environment variable.

Generated directories such as `test-results/`, `playwright-report/`, and `playwright/.auth/` are ignored and are not source files.

## Test Coverage

### Login - 4 test cases in 4 files

- Valid login with `standard_user`.
- Login with an invalid password.
- Login with an empty username.
- Login with an empty password.

The login negative tests clear the shared authenticated storage state so they exercise the login page directly.

### Products - 4 test cases in 4 files

- Product list is displayed and contains six products.
- First product name is displayed as `Sauce Labs Backpack`.
- Products can be sorted by name from A to Z.
- Products can be sorted by price from low to high.

### Cart - 9 test cases in 6 files

- Add a product to the cart.
- Remove a product from the inventory page.
- Remove a product from the shopping cart.
- Verify a product is displayed in the cart.
- Verify the product quantity in the cart.
- Add each of four products to the cart through the data-driven test:
  - Sauce Labs Backpack
  - Sauce Labs Bike Light
  - Sauce Labs Bolt T-Shirt
  - Sauce Labs Fleece Jacket

### Checkout - 7 test cases in 7 files

- Checkout information page displays the expected title and customer fields.
- Checkout with valid customer information reaches the overview page.
- Checkout rejects an empty First Name.
- Checkout rejects an empty Last Name.
- Checkout rejects an empty Postal Code.
- Order summary displays the product, subtotal, tax, and total.
- Successful order completion displays the completion page and confirmation message.

### Menu - 3 test cases in 3 files

- Navigation menu displays Inventory, About, Logout, and Reset App State.
- Logout returns the user to the login page.
- Reset App State clears the cart.

The test files contain 24 `test` files, while `verify-multiple-products-in-cart.spec.ts` creates four test cases from a product list. This is why the test-case total is higher than the file count.

## Automation Design

### Page Object Model

The test suite uses one page-object class for each main application area:

- `LoginPage` encapsulates login navigation, fields, login actions, and error messages.
- `InventoryPage` encapsulates inventory navigation, product locators, sorting, cart actions, and prices.
- `CartPage` encapsulates cart product access, product removal, and checkout navigation.
- `CheckoutPage` encapsulates customer information, checkout progression, order summary, and completion assertions.
- `MenuPage` encapsulates the navigation menu and its links/actions.

Tests interact with these classes instead of repeating page locators and workflow steps throughout the suite.

### Custom Playwright Fixtures

`fixtures/page-fixtures.ts` extends Playwright's `test` object with `inventoryPage`, `cartPage`, `checkoutPage`, `menuPage`, and `loginPage` fixtures. Each fixture creates its page object with the test's Playwright `page`. Tests import this extended `test` and `expect` from the fixture module.

### Authentication and Storage State

`tests/global-setup.ts` requires `BASE_URL`, opens SauceDemo, logs in with the application's standard test account, and saves the browser context state to `playwright/.auth/user.json`. The global configuration reuses that file through `use.storageState`, so authenticated workflows start from the inventory page without repeating the login flow.

The login tests explicitly override storage state with empty cookies and origins to validate unauthenticated behavior. The generated storage-state file is ignored by Git.

### Data-Driven Testing

Data-driven testing is implemented in `tests/cart/verify-multiple-products-in-cart.spec.ts`. The test iterates over four product identifiers imported from `test-data/products.ts` and creates one test case per product.

## Prerequisites

- Node.js 20 or newer. The installed Playwright packages declare Node.js `>=20`.
- npm, included with Node.js.
- Internet access to install npm packages and Playwright browsers.
- Access to the SauceDemo environment configured by `BASE_URL`.

No separate application server is required because the tests target the configured SauceDemo URL.

## Installation and Setup

1. Clone the repository and enter its directory:

   ```bash
   git clone https://github.com/ranggaapw/qa-automation-portfolio.git
   cd qa-automation-portfolio
   ```

2. Install the exact locked dependencies:

   ```bash
   npm ci
   ```

3. Install the Playwright browsers:

   ```bash
   npx playwright install
   ```

   On Linux CI or other environments that need system packages, use:

   ```bash
   npx playwright install --with-deps
   ```

4. Create `.env` from `.env.example` and set the application URL:

   ```dotenv
   BASE_URL=https://www.saucedemo.com/
   ```

`BASE_URL` is required. The global setup fails explicitly if it is missing. Do not commit `.env`, credentials, tokens, or generated authentication state. The SauceDemo test account values used by the existing global setup are application test data already present in the source; no private credentials are required in `.env`.

## Running Tests

The repository does not define npm test scripts, so use the Playwright CLI through `npx`.

Run all tests across Chromium, Firefox, and WebKit:

```bash
npx playwright test
```

Run a specific test folder:

```bash
npx playwright test tests/login
```

Other folders can be selected in the same way, for example `tests/cart` or `tests/checkout`.

Run tests in one configured browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Open the generated HTML report:

```bash
npx playwright show-report
```

## CI/CD with GitHub Actions

The workflow in `.github/workflows/playwright.yml` is named **Playwright Tests** and runs on:

- Pushes to `main` or `master`
- Pull requests targeting `main` or `master`

The `test` job runs on `ubuntu-latest` with a 60-minute timeout. It:

1. Checks out the repository.
2. Sets up the latest available Node.js LTS using `actions/setup-node@v4`.
3. Installs locked dependencies with `npm ci`.
4. Installs Playwright browsers and Linux dependencies with `npx playwright install --with-deps`.
5. Runs `npx playwright test`.
6. Uploads `playwright-report/` as the `playwright-report` artifact when the job is not cancelled.

CI supplies `BASE_URL=https://www.saucedemo.com/` as a job environment variable. After a run, open the workflow run in GitHub, find the **Artifacts** section, and download `playwright-report` to inspect the HTML report locally.

## Test Reports and Debugging

The Playwright configuration uses the HTML reporter, which writes the report to `playwright-report/`. Use `npx playwright show-report` after a test run to open it.

Tracing is configured with `trace: "on-first-retry"`. A trace is therefore collected for a test's first retry when a retry occurs, and can be opened from the corresponding test entry in the HTML report with Playwright Trace Viewer. Local runs have no retries by default; CI retries failed tests twice.

## Future Improvements

The following are potential improvements and are not currently implemented:

- Add npm scripts for common test, browser-installation, and reporting commands.
- Add richer test metadata such as tags or projects for smoke and regression selection.
- Add explicit test-data abstractions for checkout customer data and expected product details.
- Add CI matrix or scheduled runs to make browser coverage and regression cadence more configurable.
- Add automatic retention or publishing of reports beyond the current 30-day GitHub Actions artifact retention.
- Add accessibility, API, visual, performance, or database testing only if those quality goals become part of the project scope.
