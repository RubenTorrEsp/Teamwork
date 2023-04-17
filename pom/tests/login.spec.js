import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
import { URLS, CREDENTIALS } from '../data/Constants';

test('Validate successful login', async ({ page }) => {

  await page.goto(URLS.HOME);

  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email address').fill(CREDENTIALS.USER);
  await page.getByLabel('Password').fill(CREDENTIALS.PASS);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'professionals' }).click();
  await page.getByRole('button', { name: 'Ruben Torrejon' }).click();

  await expect(page.locator("//div[@class='v-list-item-title !text-body-1 font-semibold !text-default']")).toContainText('Ruben Torrejon');
  

});