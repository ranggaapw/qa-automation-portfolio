import { test, expect } from "@playwright/test";

test("TC-PROD-001 - Verify product list display", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Verify product list
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();

  // Verify product count
  await expect(page.locator(".inventory_item")).toHaveCount(6);
});
