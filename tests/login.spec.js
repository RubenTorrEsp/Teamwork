import { test, expect } from '@playwright/test';

test('Validate successful login', async ({ page }) => {
    await page.goto('https://www.teamwork.com/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByLabel('Email address').fill('ruben.mte@gmail.com');
    await page.getByLabel('Password').fill('Teamwork1234');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'professionals' }).click();
    await page.getByRole('button', { name: 'Ruben Torrejon' }).click();

    await page.getByRole('link', { name: 'View profile' }).click();
    
    const userName = await page.waitForSelector('span.truncate.max-w-full');
    const text = userName.textContent();

    console.log('Texto: '+text);

    //expect(text).toBe('Ruben Torrejon');

  });