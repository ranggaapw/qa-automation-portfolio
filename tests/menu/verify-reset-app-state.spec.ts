import { test, expect } from "../../fixtures/page-fixtures";

test("TC-MENU-003 - Verify reset app state", async ({
  inventoryPage,
  menuPage,
}) => {
  // Open inventory page
  await inventoryPage.open();

  // Add product to cart
  await inventoryPage.addProductToCart("sauce-labs-backpack");

  // Verify cart badge is visible
  await expect(inventoryPage.getCartBadge()).toHaveText("1");

  // Open navigation menu
  await menuPage.openMenu();

  // Click Reset App State
  await menuPage.resetAppState();

  // Verify cart badge is no longer visible
  await expect(inventoryPage.getCartBadge()).toBeHidden();
});
