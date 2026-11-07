import { test, expect } from "../../fixtures/page-fixtures";

test("TC-PROD-003 - Sort products by price from low to high", async ({
  inventoryPage,
}) => {
  // Open product page
  await inventoryPage.open();

  // Select price low to high
  await inventoryPage.sortProducts("lohi");

  // Get all product prices
  const priceElements = await inventoryPage.getProductPrices();

  // Convert price strings to numbers
  const prices = priceElements.map((price) => Number(price.replace("$", "")));

  // Verify prices are sorted from low to high
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});
