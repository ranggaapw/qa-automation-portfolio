import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-006 - Verify order summary", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Proceed to checkout
  await page.locator('[data-test="checkout"]').click();

  // Fill customer information
  await page.locator('[data-test="firstName"]').fill("Rangga");
  await page.locator('[data-test="lastName"]').fill("Wijaya");
  await page.locator('[data-test="postalCode"]').fill("16123");

  // Continue to checkout overview
  await page.locator('[data-test="continue"]').click();

  // Verify product name
  await expect(
    page.locator('[data-test="cart-list"] [data-test="inventory-item-name"]'),
  ).toHaveText("Sauce Labs Backpack");

  // Verify order summary
  await expect(page.locator('[data-test="subtotal-label"]')).toHaveText(
    "Item total: $29.99",
  );

  await expect(page.locator('[data-test="tax-label"]')).toHaveText(
    "Tax: $2.40",
  );

  await expect(page.locator('[data-test="total-label"]')).toHaveText(
    "Total: $32.39",
  );
});
