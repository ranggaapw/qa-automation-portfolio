import { test, expect } from "../../fixtures/page-fixtures";

test("TC-PROD-004 - Sort products by name from A to Z", async ({
  inventoryPage,
}) => {
  // Open product page
  await inventoryPage.open();

  // Select name A to Z
  await inventoryPage.sortProducts("az");

  // Get all product names
  const productNames = await inventoryPage.getProductNames().allTextContents();

  // Sort product names alphabetically
  const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));

  // Verify products are sorted from A to Z
  expect(productNames).toEqual(sortedNames);
});
