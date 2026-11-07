import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-004 - Login with empty password", async ({ page }) => {
  // Open login page
  await page.goto("/");

  // Enter username only
  await page.locator('[data-test="username"]').fill("standard_user");

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Password is required",
  );
});
