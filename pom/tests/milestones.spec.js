import { test } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');

test('Create a milestone', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await page.goto(URLS.HOME);
    await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);

    await page.getByRole('tab', { name: 'My projects' }).click();
    await page.frameLocator('iframe').getByRole('link', { name: 'Project A' }).click();


    await page.getByRole('tab', { name: 'More...' }).click();
    await page.getByRole('link', { name: 'Milestones' }).click();
    

    await page.frameLocator('iframe').getByRole('button', { name: 'Add Milestone' }).click();
    await page.frameLocator('iframe').getByPlaceholder('Give this milestone a name').fill('My first milestone');
    await page.frameLocator('iframe').locator('#addMilestoneForm').getByRole('button', { name: 'Add Milestone' }).click();
  
});