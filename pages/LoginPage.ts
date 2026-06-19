import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async acessar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usuario: string, senha: string) {
    await this.page.locator('#user-name').fill(usuario);
    await this.page.locator('#password').fill(senha);
    await this.page.locator('#login-button').click();
  }
}