import { test, expect } from "../../fixtures/page-fixtures";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-004 - Login with empty password", async ({ loginPage }) => {
  // Open login page
  await loginPage.open();

  // Enter username only
  await loginPage.getUsernameField().fill("standard_user");

  // Click login button
  await loginPage.clickLogin();

  // Verify error message
  await expect(loginPage.getErrorMessage()).toBeVisible();

  await expect(loginPage.getErrorMessage()).toContainText(
    "Password is required",
  );
});
