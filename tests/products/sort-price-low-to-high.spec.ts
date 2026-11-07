import { test, expect } from "@playwright/test";

test("TC-PROD-003 - Sort products by price from low to high", async ({
  page,
}) => {
  // Open product page
  await page.goto("/inventory.html");

  // Select price low to high
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("lohi");

  // Get all product prices
  const priceElements = await page
    .locator(".inventory_item_price")
    .allTextContents();

  // Convert price strings to numbers
  const prices = priceElements.map((price) => Number(price.replace("$", "")));

  // Verify prices are sorted from low to high
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});
