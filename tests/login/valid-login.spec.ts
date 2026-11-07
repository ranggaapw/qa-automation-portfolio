import { test, expect } from "../../fixtures/page-fixtures";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-001 - Login using valid credentials", async ({
  loginPage,
  page,
}) => {
  // Open login page
  await loginPage.open();

  // Enter valid credentials and login
  await loginPage.login("standard_user", "secret_sauce");

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
});
