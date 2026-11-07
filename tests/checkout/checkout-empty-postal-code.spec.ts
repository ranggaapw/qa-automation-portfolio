import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-005 - Verify checkout with empty Postal Code", async ({
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

  // Fill First Name and Last Name only
  await checkoutPage.fillCustomerInformation("Rangga", "Wijaya", "");

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify error message
  await expect(checkoutPage.getErrorMessage()).toHaveText(
    "Error: Postal Code is required",
  );

  // Verify user stays on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
