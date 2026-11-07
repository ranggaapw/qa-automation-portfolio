import { Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  getPageTitle() {
    return this.page.locator('[data-test="title"]');
  }

  getFirstNameField() {
    return this.page.locator('[data-test="firstName"]');
  }

  getLastNameField() {
    return this.page.locator('[data-test="lastName"]');
  }

  getPostalCodeField() {
    return this.page.locator('[data-test="postalCode"]');
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.getFirstNameField().fill(firstName);
    await this.getLastNameField().fill(lastName);
    await this.getPostalCodeField().fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator('[data-test="continue"]').click();
  }

  getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  getOverviewProductName() {
    return this.page.locator(
      '[data-test="cart-list"] [data-test="inventory-item-name"]',
    );
  }

  getSubtotal() {
    return this.page.locator('[data-test="subtotal-label"]');
  }

  getTax() {
    return this.page.locator('[data-test="tax-label"]');
  }

  getTotal() {
    return this.page.locator('[data-test="total-label"]');
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
  }

  getCompletionMessage() {
    return this.page.locator('[data-test="complete-header"]');
  }
}
