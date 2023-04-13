import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

test('Validate successful login', async ({ page }) => {
    await page.goto('https://www.teamwork.com/');
    
    const loginPage = new LoginPage(page);
    loginPage.submitLogin('ruben.mte@gmail.com','Teamwork1234');

    await page.getByRole('link', { name: 'professionals' }).click();
    await page.getByRole('button', { name: 'Ruben Torrejon' }).click();
    await page.getByRole('link', { name: 'View profile' }).click();

    const user = await page.getByText('Ruben Torrejon').textContent();
    expect(user).toBe('Ruben Torrejon')


  });