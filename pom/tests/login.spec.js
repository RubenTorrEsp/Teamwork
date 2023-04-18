import { test } from '@playwright/test';
import { URLS, CREDENTIALS } from '../data/Constants';
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');

test('Validate successful login', async ({ page }) => {
  const expectedUserName = 'Ruben Torrejon';
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await page.goto(URLS.HOME);
  await loginPage.submitLogin(CREDENTIALS.USER,CREDENTIALS.PASS);
  await homePage.checkUserName(expectedUserName);
});