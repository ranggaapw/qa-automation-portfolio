import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-002 - Verify checkout with valid information", async ({
  page,
}) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click checkout button
  await page.locator('[data-test="checkout"]').click();

  // Fill customer information
  await page.locator('[data-test="firstName"]').fill("Rangga");
  await page.locator('[data-test="lastName"]').fill("Wijaya");
  await page.locator('[data-test="postalCode"]').fill("16123");

  // Continue checkout
  await page.locator('[data-test="continue"]').click();

  // Verify checkout overview page
  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText(
    "Checkout: Overview",
  );
});
