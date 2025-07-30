import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ProductDetailPage } = require('../pages/ProductDetailPage');

test.describe('SauceDemo E2E Purchase Flow', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Should sort products from low to high price', { tag: '@sorting' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProducts('lohi');
    await expect(inventoryPage.inventoryItemNames.first()).toHaveText('Sauce Labs Onesie');
    await expect(inventoryPage.inventoryItemPrices.first()).toHaveText('$7.99');
  });

  test('Should add an item to the cart', { tag: '@cart' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const productName = 'Sauce Labs Backpack';

    await inventoryPage.addToCart(productName);
    await inventoryPage.goToCart();
    
    await expect(page.locator('.title')).toHaveText('Your Cart');

    const productInCart = cartPage.getProductLocatorByName(productName);
    await expect(productInCart).toBeVisible();
  });

  test('Should fill user data and complete the purchase', { tag: '@checkout' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // CHECKOUT ACTIONS AND VERIFICATIONS
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutInfo('Gustavo', 'Endrios', '83404220');

    // Verify that we are on the overview page
    await expect(checkoutPage.overviewTitle).toBeVisible();

    await checkoutPage.finishCheckout();

    // Final verification
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('Should navigate to the correct detail page for each product', { tag: '@navigation' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const productDetailPage = new ProductDetailPage(page);
    
    const productCount = await inventoryPage.inventoryItems.count();

    for (let i = 0; i < productCount; i++) {
      // Re-locate the item in the list to get its current name and price
      const productOnList = inventoryPage.inventoryItems.nth(i);
      const expectedName = await productOnList.locator('.inventory_item_name').textContent();
      const expectedPrice = await productOnList.locator('.inventory_item_price').textContent();

      console.log(`Verifying [${i + 1}/${productCount}]: ${expectedName} - ${expectedPrice}`);

      // Click to go to the product page
      await productOnList.locator('.inventory_item_name').click();

      // Verify that the product name and price are correct
      await expect(productDetailPage.productName).toHaveText(expectedName);
      await expect(productDetailPage.productPrice).toHaveText(expectedPrice);

      // Go back to the page and continue the loop
      await productDetailPage.backToProductsButton.click();
    }
  });
  
  // --- Parameterized Test for Checkout Errors ---
  const errorTestCases = [
    { description: 'empty fields', firstName: '', lastName: '', postalCode: '', expectedError: 'Error: First Name is required' },
    { description: 'empty last name', firstName: 'Gustavo', lastName: '', postalCode: '', expectedError: 'Error: Last Name is required' },
    { description: 'empty postal code', firstName: 'Gustavo', lastName: 'Endrios', postalCode: '', expectedError: 'Error: Postal Code is required' }
  ];
  
  for (const testCase of errorTestCases) {
    test(`Should display error for ${testCase.description}`, { tag: '@checkout-error' }, async ({ page }) => {
      console.log(`--- Starting validation test for: ${testCase.description} ---`);

      const inventoryPage = new InventoryPage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);

      // SETUP
      await inventoryPage.addToCart('Sauce Labs Backpack');
      await inventoryPage.goToCart();
      await cartPage.goToCheckout();

      // ACTION
      await checkoutPage.fillCheckoutInfo(testCase.firstName, testCase.lastName, testCase.postalCode);

      // VERIFICATION
      await expect(checkoutPage.errorMessage).toBeVisible();
      await expect(checkoutPage.errorMessage).toHaveText(testCase.expectedError);
    });
  }

  // --- Sorting Tests ---
  test('Should sort products alphabetically from Z to A', { tag: '@sorting' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProducts('za');

    const productNamesFromPage = await inventoryPage.inventoryItemNames.allTextContents();
    const expectedSortedNames = [...productNamesFromPage].sort().reverse();
    
    expect(productNamesFromPage).toEqual(expectedSortedNames);
    console.log('Page Order:', productNamesFromPage);
  });

  test('Should sort products alphabetically from A to Z', { tag: '@sorting' }, async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.sortProducts('az');

    const productNamesFromPage = await inventoryPage.inventoryItemNames.allTextContents();
    const expectedSortedNames = [...productNamesFromPage].sort();
    
    expect(productNamesFromPage).toEqual(expectedSortedNames);
    console.log('Page Order:', productNamesFromPage);
  });
});