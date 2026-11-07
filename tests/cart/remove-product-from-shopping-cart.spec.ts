import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";

test("TC-CART-005 - Remove product from shopping cart", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.open();
  await inventoryPage.addProductToCart("sauce-labs-backpack");
  await inventoryPage.openCart();

  await cartPage.removeProduct("sauce-labs-backpack");

  await expect(page.locator('[data-test="cart-list"] .cart_item')).toHaveCount(
    0,
  );

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
});
