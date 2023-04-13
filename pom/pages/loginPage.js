const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginlink = page.getByRole('link', { name: 'Login' })
    this.user = page.getByLabel('Email address');
    this.password = page.getByLabel('Password')
    this.loginButton = page.getByRole('button', { name: 'Log in' });

  }

  async submitLogin(user, pass) {
    await this.loginlink.click();
    await this.user.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

}