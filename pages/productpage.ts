import { Page } from '@playwright/test';

export class ProductPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /** 
     * check if product page is displayed
     * @returns {Promise<boolean>}
     */
    public async isProductsDisplayed() : Promise<boolean> {
        return this.page.locator('.header_secondary_container :has-text("Products")').isVisible();
    }

    /**
     * return the number of inventory items displayed
     * @returns {Promise<number>}
     */
    public async numberOfProducts() : Promise<number> {
        return this.page.locator('.inventory_item').count();
    }

    /**
     * should sort products based on selection
     * @param {string} sortSelection
     * @returns {Promise<void>}
     */
    public async sortProducts(sortSelection : string) : Promise<void> {
        await this.page.click('[data-test="product_sort_container"]')
        await this.page.locator('[data-test="product_sort_container"]').selectOption({label: sortSelection});
        await this.page.locator(`.active_option:has-text("${sortSelection}")`).isVisible();
    }

    /**
     * should grab the first product's name or price
     * @param {string} productInfo
     * @returns {Promise<string>}
     */
    public async getFirstProduct(productInfo: string) : Promise<string> {
        return this.page.locator(`.inventory_item_${productInfo}`).first().innerText();
    }

    /**
     * should grab the last product's name or price
     * @param {string} productInfo
     * @returns {Promise<string>}
     */
    public async getLastProduct(productInfo: string) : Promise<string> {
        return this.page.locator(`.inventory_item_${productInfo}`).last().innerText();
    }
}