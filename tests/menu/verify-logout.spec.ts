import { test, expect } from "@playwright/test";

test("TC-MENU-002 - Verify successful logout", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Open navigation menu
  await page.getByRole("button", { name: "Open Menu" }).click();

  // Click logout
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // Verify user is redirected to login page
  await expect(page).toHaveURL(/saucedemo\.com\/?$/);

  // Verify login form is visible
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
});
