import { test, expect } from "@playwright/test";

test("TC-MENU-003 - Verify reset app state", async ({ page }) => {
  // Open product page
  await page.goto("/inventory.html");

  // Add product to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verify cart badge is visible
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );

  // Open navigation menu
  await page.getByRole("button", { name: "Open Menu" }).click();

  // Click Reset App State
  await page.locator('[data-test="reset-sidebar-link"]').click();

  // Verify cart badge is no longer visible
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
});
