import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

test.describe('Funcionalidade de Login', () => {

  test('Login bem-sucedido deve redirecionar para a página de inventário', {tag: '@login'}, async ({ page })  => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

  });

  test('Login nao realizado deve apresentar mensagem de erro', {tag: '@login'}, async ({ page })  => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('gustavoss', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

});