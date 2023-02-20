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

    /**
     * should get any product's name, description and price
     * @param {string} itemIndex
     * @return {Promise<string[]>}
     */
    public async getProductInfo(itemIndex: string) : Promise<string[]> {
        const NAME =  await this.page.locator(`#item_${itemIndex}_title_link .inventory_item_name`).innerText();
        const PRICE = await this.page.locator(`.inventory_item_description .inventory_item_price:below(#item_${itemIndex}_title_link)`).first().innerText();
        const DESC = await this.page.locator(`.inventory_item_description .inventory_item_desc:below(#item_${itemIndex}_title_link)`).first().innerText();

        return [NAME, PRICE, DESC];
    }

    /**
     * Should navigate to selected product's detail page
     * @param {string} itemIndex
     * @returns {Promise<boolean>}
     */
    public async selectProduct(itemIndex: string) : Promise<boolean> {
        await this.page.click(`#item_${itemIndex}_title_link`);
        await this.page.waitForURL(`/inventory-item.html?id=${itemIndex}`);
        return await this.page.locator('.inventory_details_img').isVisible();
    }

    /**
     * should get selected product's name, description and price
     * @return {Promise<string[]>}
     */
    public async getSelectedProductInfo() : Promise<string[]> {
        const NAME =  await this.page.locator('.inventory_details_name').innerText();
        const PRICE = await this.page.locator('.inventory_details_price').innerText();
        const DESC = await this.page.locator('.inventory_details_desc').innerText();

        return [NAME, PRICE, DESC];
    }

    /**
     * shoud add item to cart
     * @param {string} product
     * @return {Promise<void>}
     */
    public async addToCart(product: string) : Promise<void> {
        await this.page.click(`#add-to-cart-${product}`)
    }

    /**
     * shoud remove item from cart
     * @param {string} product
     * @return {Promise<void>}
     */
    public async removeFromCart(product: string) : Promise<void> {
        await this.page.click(`#remove-${product}`)
    }

    /**
     * get number of items in cart
     * @return {Promise<number>}
     */
    public async cartItems() : Promise<number> {
        const BADGE = await this.page.locator('.shopping_cart_badge').isVisible();
        return BADGE ? parseInt(await this.page.locator('.shopping_cart_badge').innerHTML()) : 0;
    }
}