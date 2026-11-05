import { Page, Locator} from '@playwright/test';

export class DashboardPage {
    readonly h1Painel: Locator;
    readonly btSair: Locator;

    constructor(private page: Page) {
        this.h1Painel = page.locator('#panelTitle');
        this.btSair = page.locator('#logoutButton');

    }

    async clicklogout() {
        await this.btSair.click();
    }
}