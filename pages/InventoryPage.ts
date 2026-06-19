import { Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    obterTituloPagina() {
        return this.page.locator('.title');
    }

    obterProdutos() {
        return this.page.locator('.inventory_item');
    }

    async obterQuantidadeProdutos() {
        return await this.page.locator('.inventory_item').count();
    }

}