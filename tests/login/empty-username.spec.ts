import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-003 - Login with empty username", async ({ page }) => {
  // Open login page
  await page.goto("/");

  // Enter password only
  await page.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username is required",
  );
});
