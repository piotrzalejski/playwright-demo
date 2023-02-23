import { Page } from "@playwright/test";

export class CartPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    /**
     * should click on and navigate to shopping cart
     * @returns {Promise<boolean>}
     */
    public async clickCart() : Promise<boolean> {
        await this.page.click('.shopping_cart_link');
        return await this.page.locator('.title:has-text("Your Cart")').isVisible();
    }

    /**
     * should count how many items in cart
     * Note: site does not allow updating QTY field
     * @returns {Promise<number>}
     */
    public async countItems() : Promise<number>{
        return await this.page.locator('.cart_item').count();
    }

    /**
     * should click on continue shopping
     * should navigate back to Products
     * @returns {Promise<void>}
     */
    public async clickContinueShopping() : Promise<void>{
        await this.page.getByRole('button', {name: "continue shopping"}).click();
        await this.page.waitForURL('/inventory.html');
    }

    /**
     * should click on checkout
     * @returns {Promise<void>}
     */
    public async clickCheckout() : Promise<void>{
        await this.page.getByRole('button', {name: 'checkout'}).click();
        await this.page.waitForURL('/checkout-step-one.html');
    }

    /**
     * should click on cancel 
     * appears on checkout-step-one and checkout-step-two
     * note step one cancel returns to cart, step two to products page
    * @returns {Promise<string>}
     */
    public async clickCancel() : Promise<string>{
        await this.page.getByRole('button', {name: 'cancel'}).click();
        return this.page.url();
    }

    /**
     * should verify checkout form fields are present
     * @returns {Promise<boolean[]>}
     */
    public async checkoutFieldsPresent() : Promise<boolean[]>{
        const FIRSTNAME = await this.page.locator('#first-name').isVisible();
        const LASTNAME = await this.page.locator('#last-name').isVisible();
        const ZIP = await this.page.locator('#postal-code').isVisible();

        return [FIRSTNAME, LASTNAME, ZIP]
    }


    /**
     * should enter First Name, Last Name, Zip/Postal
     * note form fields do not have invalid value checks
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} zip
     * @returns {Promise<void>}
     */
    public async fillInformation(firstName: string, lastName: string, zip: string) : Promise<void>{
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(zip);
    }

    /**
     * sould click on continue
     * checkout-step-one
     * @returns {Promise<string>}
     */
    public async clickContinue() : Promise<string>{
        await this.page.getByRole('button', {name: 'continue'}).click();
        return this.page.url();
    }

    /** 
     * Grabs the text from error message
     * @returns {Promise<string>}
     */
    public async errorMessage() : Promise<string>{
        return await this.page.locator('[data-test="error"]').innerText();
    }
    
    /**
     * should verify summary info displayed
     * @param {string} summaryItem
     * @returns {Promise<boolean>}
     */
    public async summaryInfo(summaryItem: string) : Promise<boolean>{
        const ITEM = await this.page.locator(`.summary_info:has-text("${summaryItem}")`).isVisible();
        return ITEM;
    }

    /**
     * should click on Finish
     * and confirm order placed
     * @returns {Promise<string>}
     */
    public async clickFinish() : Promise<string>{
        await this.page.getByRole('button', {name: 'finish'}).click();
        return this.page.url();
    }

    /**
     * should get confirmation message on checkout-complete page
     * @returns {Promise<string>}
     */
    public async checkoutMsg() : Promise<string>{
        return this.page.locator('.checkout_complete_container h2').innerHTML();
    }
}