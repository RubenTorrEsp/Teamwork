import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
import { URLS, CREDENTIALS } from '../data/Constants';



test('Create a task', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  
  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await homePage.newTaskList();

  /*
  await page.frameLocator('iframe').getByPlaceholder('e.g. Competitor analysis').fill('Task List 1');
  await page.frameLocator('iframe').getByRole('button', { name: 'Add Task List', exact: true }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add a task' }).click();
  await page.frameLocator('iframe').getByPlaceholder('What needs to be done?').fill('Task');
  await page.frameLocator('iframe').getByRole('button', { name: 'Create Task' }).click();
*/


});