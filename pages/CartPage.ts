import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  getProductName() {
    return this.page.locator(
      '[data-test="cart-list"] [data-test="inventory-item-name"]',
    );
  }

  async removeProduct(product: string) {
    await this.page.locator(`[data-test="remove-${product}"]`).click();
  }
}
