// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userProfile = page.getByRole('button', { name: 'Ruben Torrejon' });
    this.profileLink = page.getByRole('link', { name: 'View profile' });
  }

  async enterOnProfile(user, pass) {
    await this.userProfile.click();
    await this.profileLink.click();
  }

}