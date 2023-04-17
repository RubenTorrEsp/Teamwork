import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
import { URLS, CREDENTIALS } from '../data/Constants';


/*
test('Create a task', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await page.goto(URLS.HOME);
    
    await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);



  });

test('test', async ({ page }) => {

    //homePage.createTaskList('Task List');

    await page.frameLocator('iframe').getByRole('button', { name: 'Add Task List', exact: true }).click();
    await page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add a task' }).click();
    await page.frameLocator('iframe').getByPlaceholder('What needs to be done?').click();
    await page.frameLocator('iframe').getByPlaceholder('What needs to be done?').fill('task');
    await page.frameLocator('iframe').locator('span').filter({ hasText: /^Files$/ }).click();
    await page.frameLocator('iframe').getByText('Task details').click();
    await page.frameLocator('iframe').locator('.CodeMirror-scroll').click();
    await page.frameLocator('iframe').getByTitle('Anyone').locator('span').nth(3).click();
    
});

*/
