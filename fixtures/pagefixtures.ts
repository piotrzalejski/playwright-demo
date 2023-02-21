import { test as base} from '@playwright/test';
import { HamburgerPage } from '../pages/hamburgermenpage';
import { LoginPage } from '../pages/loginpage';
import { ProductPage } from '../pages/productpage';

export const test = base.extend<{_login: LoginPage, _products: ProductPage, _menu: HamburgerPage}>({
    _login: async ({ page }, use ) => {
        await page.goto('/');
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    _products: async ({ page }, use ) => {
        await page.goto('/inventory.html');
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    _menu: async ({ page }, use ) => {
        await page.goto('/inventory.html');
        const hamburgerMenu = new HamburgerPage(page);
        await use(hamburgerMenu);
    }
})

export { expect } from '@playwright/test';