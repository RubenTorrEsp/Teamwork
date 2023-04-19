import { test } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');
const { MilestonesPage } = require('../pages/milestonesPage');

test('Create a milestone', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const milestonesPage = new MilestonesPage(page);
    const milestoneName = 'My first milestone';

    await page.goto(URLS.HOME);
    await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
    await milestonesPage.newMilestone(milestoneName);
});