import { test, expect } from "@playwright/test";

test("TC-PROD-004 - Sort products by name from A to Z", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Select name A to Z
  await page.locator('[data-test="product-sort-container"]').selectOption("az");

  // Get all product names
  const productNames = await page
    .locator(".inventory_item_name")
    .allTextContents();

  // Sort product names alphabetically
  const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));

  // Verify products are sorted from A to Z
  expect(productNames).toEqual(sortedNames);
});
