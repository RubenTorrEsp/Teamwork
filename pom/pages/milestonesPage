// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.MilestonesPage = class MilestonesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }


  async newMilestone(){
    await page.getByRole('tab', { name: 'My projects' }).click();
    await page.frameLocator('iframe').getByRole('link', { name: 'Project A' }).click();
    await page.getByRole('link', { name: 'Milestones' }).click();
    await page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add the First Milestone' }).click();
    await page.frameLocator('iframe').getByPlaceholder('Give this milestone a name').fill('My milestone');
    await page.frameLocator('iframe').locator('#addMilestoneForm').getByRole('button', { name: 'Add Milestone' }).click();
  }


}