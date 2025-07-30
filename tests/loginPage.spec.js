import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/LoginPage'); 

test.describe('Login Functionality', () => {

  // Test title clearly describes the happy path.
  test('Successful login should redirect to the inventory page', { tag: '@login' }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  // Test title clearly describes the negative/sad path.
  test('Failed login should display an error message', { tag: '@login-error' }, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

});