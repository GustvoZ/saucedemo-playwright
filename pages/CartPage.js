const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  // Garante que um item com o nome correto está visível no carrinho.
  async verifyProductInCart(productName) {
    const productInCart = this.page.locator('.inventory_item_name', { hasText: productName });
    await expect(productInCart).toBeVisible();
  }
}

module.exports = { CartPage };