import { test, expect } from "@playwright/test";

test("TC-CHECKOUT-001 - Verify checkout information page", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Click checkout button
  await page.locator('[data-test="checkout"]').click();

  // Verify checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);

  // Verify page title
  await expect(page.locator('[data-test="title"]')).toHaveText(
    "Checkout: Your Information",
  );

  // Verify customer information fields
  await expect(page.locator('[data-test="firstName"]')).toBeVisible();
  await expect(page.locator('[data-test="lastName"]')).toBeVisible();
  await expect(page.locator('[data-test="postalCode"]')).toBeVisible();
});
