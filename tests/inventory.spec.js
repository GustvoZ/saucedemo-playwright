import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage  } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/CartPage');


test.describe('Ordenacao de produto', () => {

    test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    // Verificação de que o login foi bem-sucedido
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  });

  test('Ordenar produtos do menor para o maior', {tag: '@ordenar'}, async ({ page })  => {
    const inventoryPage = new InventoryPage (page);
    await inventoryPage.sortProducts('lohi');
    await expect(inventoryPage.inventoryItemNames.first()).toHaveText('Sauce Labs Onesie');
    await expect(inventoryPage.inventoryItemPrices.first()).toHaveText('$7.99');

  });

    test('Adicionar item ao carrinho', {tag: '@ordenar'}, async ({ page })  => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    const productName = 'Sauce Labs Backpack';

    // Ações legíveis usando nossos métodos
    await inventoryPage.addToCart(productName);
    await inventoryPage.goToCart();
    
    // Verificação na página do carrinho
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await cartPage.verifyProductInCart(productName);

  });


});