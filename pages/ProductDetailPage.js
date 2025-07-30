class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.productName = page.locator('.inventory_details_name');
    this.productDescription = page.locator('.inventory_details_desc');
    this.productPrice = page.locator('.inventory_details_price');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
  }
}

module.exports = { ProductDetailPage };