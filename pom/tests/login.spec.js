import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');

test('Validate successful login', async ({ page }) => {
  
    await page.goto('https://www.teamwork.com/');
    
    const loginPage = new LoginPage(page);
    await loginPage.submitLogin('ruben.mte@gmail.com','Teamwork1234');

    const homePage = new HomePage(page);
    await homePage.enterOnProfile();

    const user = await page.getByText('Ruben Torrejon').textContent();
    expect(user).toBe('Ruben Torrejon')


  });