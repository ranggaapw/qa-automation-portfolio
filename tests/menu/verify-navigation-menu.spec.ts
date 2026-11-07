import { test, expect } from "../../fixtures/page-fixtures";

test("TC-MENU-001 - Verify navigation menu", async ({
  inventoryPage,
  menuPage,
}) => {
  // Open inventory page
  await inventoryPage.open();

  // Open navigation menu
  await menuPage.openMenu();

  // Verify menu items are visible
  await expect(menuPage.getInventoryLink()).toBeVisible();

  await expect(menuPage.getAboutLink()).toBeVisible();

  await expect(menuPage.getLogoutLink()).toBeVisible();

  await expect(menuPage.getResetLink()).toBeVisible();
});
