import { test, expect } from "../../fixtures/page-fixtures";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-003 - Login with empty username", async ({ loginPage }) => {
  // Open login page
  await loginPage.open();

  // Enter password only
  await loginPage.getPasswordField().fill("secret_sauce");

  // Click login button
  await loginPage.clickLogin();

  // Verify error message
  await expect(loginPage.getErrorMessage()).toBeVisible();

  await expect(loginPage.getErrorMessage()).toContainText(
    "Username is required",
  );
});
