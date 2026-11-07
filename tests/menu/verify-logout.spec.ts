import { test, expect } from "../../fixtures/page-fixtures";

test("TC-MENU-002 - Verify successful logout", async ({
  inventoryPage,
  menuPage,
  page,
}) => {
  // Open inventory page
  await inventoryPage.open();

  // Open navigation menu
  await menuPage.openMenu();

  // Click logout
  await menuPage.logout();

  // Verify user is redirected to login page
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);

  // Verify login form is visible
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  await expect(page.locator('[data-test="username"]')).toBeVisible();

  await expect(page.locator('[data-test="password"]')).toBeVisible();
});
