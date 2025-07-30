const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  /**
   * Returns the locator for a specific product in the cart.
   * The assertion itself (expect) should be done in the test file.
   * @param {string} productName - The name of the product to find.
   * @returns {import('@playwright/test').Locator}
   */
  getProductLocatorByName(productName) {
    return this.page.locator('.inventory_item_name', { hasText: productName });
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };