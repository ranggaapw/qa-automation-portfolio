import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CART-002 - Verify product can be removed from inventory", async ({
  inventoryPage,
  page,
}) => {
  await inventoryPage.open();

  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await inventoryPage.removeProduct("sauce-labs-backpack");

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
});
