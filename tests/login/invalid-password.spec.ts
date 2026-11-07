import { test, expect } from "../../fixtures/page-fixtures";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-002 - Login using invalid password", async ({ loginPage }) => {
  // Open login page
  await loginPage.open();

  // Enter invalid credentials and login
  await loginPage.login("standard_user", "wrong_password");

  // Verify error message
  await expect(loginPage.getErrorMessage()).toBeVisible();

  await expect(loginPage.getErrorMessage()).toContainText(
    "Username and password do not match",
  );
});
