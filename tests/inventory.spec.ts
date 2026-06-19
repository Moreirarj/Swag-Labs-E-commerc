import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const users = require('../fixtures/users.json');

test.describe('Inventory', () => {

    test('Validar quantidade de produtos', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.acessar();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(
            inventoryPage.obterTituloPagina()
        ).toHaveText('Products');

        const quantidade =
            await inventoryPage.obterQuantidadeProdutos();

        expect(quantidade).toBe(6);

    });

});