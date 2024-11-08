class ProductsPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = page.locator('.inventory_item').first();
      this.firstProductName = this.firstProduct.locator('.inventory_item_name');
      this.firstProductPrice = this.firstProduct.locator('.inventory_item_price');
      this.addToCartButton = this.firstProduct.locator('.btn_inventory');
    }
  
    async getFirstProductDetails() {
      const name = await this.firstProductName.textContent();
      const price = await this.firstProductPrice.textContent();
      return { name, price };
    }
  
    async addFirstProductToCart() {
      await this.addToCartButton.click();
    }
  }
  
  module.exports = { ProductsPage };
  