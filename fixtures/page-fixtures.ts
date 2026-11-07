import { test as base } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

type PageFixtures = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<PageFixtures>({
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
});

export { expect } from "@playwright/test";
