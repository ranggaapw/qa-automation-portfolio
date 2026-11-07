import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CART-003 - Verify product is displayed in cart", async ({
  inventoryPage,
  cartPage,
}) => {
  await inventoryPage.open();

  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await inventoryPage.openCart();

  await expect(cartPage.getProductName()).toHaveText("Sauce Labs Backpack");
});
