import { test as base} from '@playwright/test';
import { ProductPage } from '../pages/productpage';


export const test = base.extend<{_products: ProductPage}>({
    _products: async ({ page }, use ) => {
        await page.goto('/inventory.html');
        const productPage = new ProductPage(page);
        await use(productPage);
    }
})

export { expect } from '@playwright/test';