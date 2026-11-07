import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage";

test("TC-CART-001 - Add product to cart", async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.open();
  await inventoryPage.addProductToCart("sauce-labs-backpack");

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );
});
