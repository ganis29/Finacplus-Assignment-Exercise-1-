const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItem = page.locator('.cart_item');
      this.cartItemName = this.cartItem.locator('.inventory_item_name');
    }
  
    async verifyProductInCart(expectedName) {
      const name = await this.cartItemName.textContent();
      expect(name).toBe(expectedName);
    }
  }
  
  module.exports = { CartPage };
  