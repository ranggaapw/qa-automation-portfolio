import { test, expect } from "@playwright/test";

test.use({
  storageState: { cookies: [], origins: [] },
});

test("TC-LOGIN-001 - Login using valid credentials", async ({ page }) => {
  // Open login page
  await page.goto("/");

  // Enter valid credentials
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
});
