import { Page } from "@playwright/test";

export class InventoryPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/inventory.html");
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
}
