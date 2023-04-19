// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.MilestonesPage = class MilestonesPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.projects = page.getByRole('tab', { name: 'My projects' });
    this.projectA = page.frameLocator('iframe').getByRole('link', { name: 'Project A' });

    this.moreTab = page.getByRole('tab', { name: 'More...' });
    this.milestonesLink = page.getByRole('link', { name: 'Milestones' });

    this.addMilestone = page.frameLocator('iframe').getByRole('button', { name: 'Add Milestone' });
    this.milestoneName = page.frameLocator('iframe').getByPlaceholder('Give this milestone a name');
    this.completeMilestone = page.frameLocator('iframe').locator('#addMilestoneForm').getByRole('button', { name: 'Add Milestone' });
  }


  async newMilestone(name){
    await this.projects.click();
    await this.projectA.click();

    await this.moreTab.hover();
    await this.milestonesLink.click();

    await this.addMilestone.click();
    await this.milestoneName.fill(name);
    await this.completeMilestone.click();
  }


}