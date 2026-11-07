import { test, expect } from "../../fixtures/page-fixtures";

test("TC-PROD-001 - Verify product list display", async ({ inventoryPage }) => {
  // Open product page
  await inventoryPage.open();

  // Verify product list
  await expect(inventoryPage.getProductList()).toBeVisible();

  // Verify product count
  await expect(inventoryPage.getProductItems()).toHaveCount(6);
});
