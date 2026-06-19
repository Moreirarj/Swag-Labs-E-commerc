import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const users = require('../fixtures/users.json');

test.describe('Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.acessar();
    });

    test('Login com sucesso', async ({ page }) => {

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(page).toHaveURL(/inventory/);

    });

    test('Usuário bloqueado', async ({ page }) => {

        await loginPage.login(
            users.locked.username,
            users.locked.password
        );

        await expect(
            page.locator('[data-test="error"]')
        ).toContainText('Sorry, this user has been locked out');

    });

    test('Senha inválida', async ({ page }) => {

        await loginPage.login(
            users.invalid.username,
            users.invalid.password
        );

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();

    });

    test('Campos obrigatórios', async ({ page }) => {

        await page.locator('#login-button').click();

        await expect(
            page.locator('[data-test="error"]')
        ).toContainText('Username is required');

    });

});