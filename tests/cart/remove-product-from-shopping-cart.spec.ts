import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CART-005 - Verify product can be removed from shopping cart", async ({
  inventoryPage,
  cartPage,
  page,
}) => {
  await inventoryPage.open();

  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await inventoryPage.openCart();

  await cartPage.removeProduct("sauce-labs-backpack");

  await expect(page.locator('[data-test="cart-list"] .cart_item')).toHaveCount(
    0,
  );

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
});
