import { test, expect } from "@playwright/test";

test("TC-MENU-001 - Verify navigation menu", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Open navigation menu
  await page.getByRole("button", { name: "Open Menu" }).click();

  // Verify menu items are visible
  await expect(
    page.locator('[data-test="inventory-sidebar-link"]'),
  ).toBeVisible();

  await expect(page.locator('[data-test="about-sidebar-link"]')).toBeVisible();

  await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();

  await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
});
