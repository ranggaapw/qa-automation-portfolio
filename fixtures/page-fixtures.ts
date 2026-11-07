import { test as base } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { MenuPage } from "../pages/MenuPage";

type PageFixtures = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  menuPage: MenuPage;
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

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);

    await use(checkoutPage);
  },

  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },
});

export { expect } from "@playwright/test";
