import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";

test("TC-CART-003 - Verify product display in shopping cart", async ({
  page,
}) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.open();
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await expect(cartPage.getProductName()).toHaveText("Sauce Labs Backpack");
});
