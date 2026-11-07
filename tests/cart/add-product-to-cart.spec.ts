import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CART-001 - Verify product can be added to cart", async ({
  inventoryPage,
  page,
}) => {
  await inventoryPage.open();

  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );
});
