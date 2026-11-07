import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-004 - Verify checkout with empty Last Name", async ({
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

  // Fill First Name and Postal Code only
  await checkoutPage.fillCustomerInformation("Rangga", "", "16123");

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify error message
  await expect(checkoutPage.getErrorMessage()).toHaveText(
    "Error: Last Name is required",
  );

  // Verify user stays on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
