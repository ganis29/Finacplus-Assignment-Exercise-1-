const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { Header } = require('../pages/Header');
const fs = require('fs');
const path = require('path');

test.describe('Add to Cart Functionality', () => {
  let loginPage, productsPage, cartPage, header;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    header = new Header(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();
  });

  test('should add first product to cart and verify', async ({ page }) => {
    const { name, price } = await productsPage.getFirstProductDetails();
    const filePath = path.join(__dirname, '../data/productDetails.txt');
    fs.writeFileSync(filePath, `Product Name: ${name}\nPrice: ${price}\n`);
    await productsPage.addFirstProductToCart();
    await page.click('.shopping_cart_link');
    await cartPage.verifyProductInCart(name);
    await header.logout();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
