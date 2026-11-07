import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-002 - Verify checkout with valid information", async ({
  inventoryPage,
  cartPage,
  checkoutPage,
  page,
}) => {
  // Open inventory page
  await inventoryPage.open();

  // Add product to cart
  await inventoryPage.addProductToCart("sauce-labs-backpack");

  // Open shopping cart
  await inventoryPage.openCart();

  // Proceed to checkout
  await cartPage.proceedToCheckout();

  // Fill customer information
  await checkoutPage.fillCustomerInformation("Rangga", "Wijaya", "16123");

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify checkout overview page
  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(checkoutPage.getPageTitle()).toHaveText("Checkout: Overview");
});
