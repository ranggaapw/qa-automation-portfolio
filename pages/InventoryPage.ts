import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/inventory.html");
  }

  getProductList() {
    return this.page.locator('[data-test="inventory-list"]');
  }

  getProductItems() {
    return this.page.locator(".inventory_item");
  }

  getProductNames() {
    return this.page.locator(".inventory_item_name");
  }

  getCartBadge() {
    return this.page.locator('[data-test="shopping-cart-badge"]');
  }

  async addProductToCart(product: string) {
    await this.page.locator(`[data-test="add-to-cart-${product}"]`).click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async removeProduct(product: string) {
    await this.page.locator(`[data-test="remove-${product}"]`).click();
  }

  async sortProducts(sortOption: string) {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption(sortOption);
  }

  async getProductPrices() {
    return this.page.locator(".inventory_item_price").allTextContents();
  }
}
