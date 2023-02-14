import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';


export const test = base.extend<{_login: LoginPage}>({
    _login: async ({ page }, use ) => {
        await page.goto('/');
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})

export { expect } from '@playwright/test';