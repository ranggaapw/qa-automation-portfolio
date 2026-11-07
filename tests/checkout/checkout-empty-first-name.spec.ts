import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-003 - Verify checkout with empty First Name", async ({
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

  // Fill Last Name and Postal Code only
  await checkoutPage.fillCustomerInformation("", "Wijaya", "16123");

  // Continue checkout
  await checkoutPage.continueCheckout();

  // Verify error message
  await expect(checkoutPage.getErrorMessage()).toHaveText(
    "Error: First Name is required",
  );

  // Verify user stays on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});
