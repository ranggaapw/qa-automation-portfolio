import { test, expect } from "../../fixtures/page-fixtures";

test("TC-PROD-002 - Verify product name display", async ({ inventoryPage }) => {
  // Open product page
  await inventoryPage.open();

  // Verify product name
  await expect(inventoryPage.getProductNames().first()).toHaveText(
    "Sauce Labs Backpack",
  );
});
