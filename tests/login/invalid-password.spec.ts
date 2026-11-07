import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-002 - Login using invalid password", async ({ page }) => {
  // Open login page
  await page.goto("/");

  // Enter invalid credentials
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("wrong_password");

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match",
  );
});
