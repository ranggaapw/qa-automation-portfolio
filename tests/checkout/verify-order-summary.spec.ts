import { test, expect } from "../../fixtures/page-fixtures";

test("TC-CHECKOUT-006 - Verify order summary", async ({
  inventoryPage,
  cartPage,
  checkoutPage,
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

  // Verify product name
  await expect(checkoutPage.getOverviewProductName()).toHaveText(
    "Sauce Labs Backpack",
  );

  // Verify order summary
  await expect(checkoutPage.getSubtotal()).toHaveText("Item total: $29.99");

  await expect(checkoutPage.getTax()).toHaveText("Tax: $2.40");

  await expect(checkoutPage.getTotal()).toHaveText("Total: $32.39");
});
