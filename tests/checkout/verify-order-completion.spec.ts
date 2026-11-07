import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-007 - Verify successful order completion", async ({
  page,
}) => {
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

  // Finish the order
  await page.locator('[data-test="finish"]').click();

  // Verify order completion page
  await expect(page).toHaveURL(/checkout-complete\.html/);

  await expect(page.locator('[data-test="title"]')).toHaveText(
    "Checkout: Complete!",
  );

  // Verify success message
  await expect(page.locator('[data-test="complete-header"]')).toHaveText(
    "Thank you for your order!",
  );
});
