import { test, expect } from "@playwright/test";

test("TC-PROD-002 - Verify product name display", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Verify product name
  await expect(page.locator(".inventory_item_name").first()).toHaveText(
    "Sauce Labs Backpack",
  );
});
