import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-003 - Verify checkout with empty First Name", async ({
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

  // Fill Last Name and Postal Code only
  await page.locator('[data-test="lastName"]').fill("Wijaya");
  await page.locator('[data-test="postalCode"]').fill("16123");

  // Continue checkout
  await page.locator('[data-test="continue"]').click();

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Error: First Name is required",
  );

  // Verify user stays on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
