import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-007 - Verify successful order completion", async ({
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

  // Continue to checkout overview
  await checkoutPage.continueCheckout();

  // Finish the order
  await checkoutPage.finishCheckout();

  // Verify order completion page
  await expect(page).toHaveURL(/checkout-complete\.html/);

  await expect(checkoutPage.getPageTitle()).toHaveText("Checkout: Complete!");

  // Verify success message
  await expect(checkoutPage.getCompletionMessage()).toHaveText(
    "Thank you for your order!",
  );
});
