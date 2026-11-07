import { Page } from "@playwright/test";

export class MenuPage {
  constructor(private page: Page) {}

  async openMenu() {
    await this.page.getByRole("button", { name: "Open Menu" }).click();
  }

  async logout() {
    await this.getLogoutLink().click();
  }

  async resetAppState() {
    await this.getResetLink().click();
  }

  getInventoryLink() {
    return this.page.locator('[data-test="inventory-sidebar-link"]');
  }

  getAboutLink() {
    return this.page.locator('[data-test="about-sidebar-link"]');
  }

  getLogoutLink() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }

  getResetLink() {
    return this.page.locator('[data-test="reset-sidebar-link"]');
  }
}
