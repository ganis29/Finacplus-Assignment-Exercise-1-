const { expect } = require('@playwright/test');
class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = page.locator('#user-name');
      this.passwordField = page.locator('#password');
      this.loginButton = page.locator('#login-button');
    }
  
    async navigate() {
      await this.page.goto('/');
    }
  
    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginButton.click();
    }
  
    async verifyLoginSuccess() {
      await expect(this.page.locator('.title')).toHaveText('Products');
    }
  }
  
  module.exports = { LoginPage };
  