const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.overviewTitle = page.locator('.title', { hasText: 'Checkout: Overview' });
    this.errorMessage = page.locator('h3[data-test="error"]');
  }

  /**
   * Fills the buyer's information and continues to the next step.
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} postalCode 
   */
  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  /**
   * Finishes the purchase on the overview screen.
   */
  async finishCheckout() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };