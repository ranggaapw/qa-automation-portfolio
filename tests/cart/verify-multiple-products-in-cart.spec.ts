import { test, expect } from "../../fixtures/page-fixtures";
import { products } from "../../test-data/products";

const productList = [
  products.backpack,
  products.bikeLight,
  products.boltTShirt,
  products.fleeceJacket,
];

for (const product of productList) {
  test(`Verify ${product} can be added to cart`, async ({
    inventoryPage,
    page,
  }) => {
    await inventoryPage.open();

    await inventoryPage.addProductToCart(product);

    await inventoryPage.openCart();

    await expect(
      page.locator('[data-test="cart-list"] .cart_item'),
    ).toHaveCount(1);
  });
}
