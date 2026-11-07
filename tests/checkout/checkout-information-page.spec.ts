import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-001 - Verify checkout information page", async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  // Open inventory page
  await inventoryPage.open();

  // Add product to cart
  await inventoryPage.addProductToCart("sauce-labs-backpack");

  // Open cart
  await inventoryPage.openCart();

  // Proceed to checkout
  await cartPage.proceedToCheckout();

  // Verify checkout information page
  await expect(checkoutPage.getPageTitle()).toHaveText(
    "Checkout: Your Information",
  );

  // Verify customer information fields
  await expect(checkoutPage.getFirstNameField()).toBeVisible();
  await expect(checkoutPage.getLastNameField()).toBeVisible();
  await expect(checkoutPage.getPostalCodeField()).toBeVisible();
});
