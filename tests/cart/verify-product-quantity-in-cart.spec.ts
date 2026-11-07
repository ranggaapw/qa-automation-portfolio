import { test, expect } from "@playwright/test";

test("TC-CART-004 - Verify product quantity in shopping cart", async ({
  page,
}) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Verify product quantity
  await expect(
    page.locator('[data-test="cart-list"] [data-test="item-quantity"]'),
  ).toHaveText("1");
});
