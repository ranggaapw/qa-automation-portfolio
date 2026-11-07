import { test, expect } from "@playwright/test";

test("TC-CART-002 - Verify remove product from cart", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Remove product from cart
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  // Verify shopping cart badge is no longer visible
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
});
