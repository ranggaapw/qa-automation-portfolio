import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/");
  }

  getUsernameField() {
    return this.page.locator('[data-test="username"]');
  }

  getPasswordField() {
    return this.page.locator('[data-test="password"]');
  }

  async login(username: string, password: string) {
    await this.getUsernameField().fill(username);
    await this.getPasswordField().fill(password);
    await this.clickLogin();
  }

  async clickLogin() {
    await this.page.locator('[data-test="login-button"]').click();
  }

  getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}
