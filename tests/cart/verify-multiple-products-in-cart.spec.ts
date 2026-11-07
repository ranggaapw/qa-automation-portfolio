import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { products } from "../../test-data/products";

const productList = [
  products.backpack,
  products.bikeLight,
  products.boltTShirt,
  products.fleeceJacket,
];

for (const product of productList) {
  test(`Verify ${product} can be added to cart`, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.open();
    await inventoryPage.addProductToCart(product);
    await inventoryPage.openCart();

    await expect(
      page.locator('[data-test="cart-list"] .cart_item'),
    ).toHaveCount(1);
  });
}
