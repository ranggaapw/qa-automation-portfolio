import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CART-004 - Verify product quantity in cart", async ({
  inventoryPage,
  page,
}) => {
  await inventoryPage.open();

  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await inventoryPage.openCart();

  await expect(
    page.locator('[data-test="cart-list"] [data-test="item-quantity"]'),
  ).toHaveText("1");
});
