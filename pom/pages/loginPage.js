// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Login' })
    this.userName = page.getByLabel('Email address');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Log in' })
    this.linkProf = page.getByRole('link', { name: 'professionals' })
  }

  async submitLogin(user, pass) {
    await this.loginLink.click()
    await this.userName.fill(user)
    await this.password.fill(pass)
    await this.loginButton.click()
    await this.linkProf.click()
  }

}