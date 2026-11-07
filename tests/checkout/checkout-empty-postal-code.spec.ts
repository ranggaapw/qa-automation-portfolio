import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-005 - Verify checkout with empty Postal Code", async ({
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

  // Fill First Name and Last Name only
  await page.locator('[data-test="firstName"]').fill("Rangga");
  await page.locator('[data-test="lastName"]').fill("Wijaya");

  // Continue checkout
  await page.locator('[data-test="continue"]').click();

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toHaveText(
    "Error: Postal Code is required",
  );

  // Verify user stays on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
