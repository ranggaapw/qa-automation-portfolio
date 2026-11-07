import { chromium, type FullConfig } from "@playwright/test";
import fs from "node:fs";

async function globalSetup(config: FullConfig) {
  const baseURL = process.env.BASE_URL;
  const authFile = "playwright/.auth/user.json";

  if (!baseURL) {
    throw new Error("BASE_URL is not defined in .env file");
  }

  fs.mkdirSync("playwright/.auth", { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL);

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL("**/inventory.html");

  await page.context().storageState({ path: authFile });

  await browser.close();
}

export default globalSetup;
