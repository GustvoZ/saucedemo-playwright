const { expect } = require('@playwright/test');

class InventoryPage  { 

  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.inventoryItemNames = page.locator('.inventory_item_name');
    this.inventoryItemPrices = page.locator('.inventory_item_price');
    this.shoppingCartLink = page.locator('.shopping_cart_link');

  }

  async sortProducts(optionValue) {
    await this.sortDropdown.selectOption(optionValue)
  }

   async addToCart(productName) {
    // Este seletor localiza o botão "Add to cart" do produto específico.
    const addToCartButton = this.page.locator(
      `//div[@class='inventory_item_description' and contains(.,'${productName}')]//button`
    );
    await addToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

}

module.exports = { InventoryPage  };