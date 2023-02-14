import { Page } from '@playwright/test';

export class LoginPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /** 
     * check if username field is present
     * @returns {Promise<boolean>}
     */
    public async isUsernameFieldPresent() : Promise<boolean> {
        return await this.page.locator('#user-name').isVisible();
    }

    /** 
     * check if password field is present
     * @returns {Promise<boolean>}
     */
    public async isPasswordFieldPresent() : Promise<boolean> {
        return await this.page.locator('#password').isVisible();
    }

    /** 
     * check if login button is present
     * @returns {Promise<boolean>}
     */
    public async isLoginButtonPresent() : Promise<boolean> {
       return await this.page.locator('#login-button').isVisible();
    }

    /** 
     * Fills in the username and password fields
     * @param {string} username
     * @param {string} password
     * @returns {Promise<void>}
     */
    public async setUsernameAndPassword(username: string, password: string) : Promise<void>{
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
    }

    /** 
     * Clicks the login button
     * @returns {Promise<void>}
     */
    public async clickLoginButton() : Promise<void>{
        await this.page.click('#login-button');
    }

    /** 
     * Grabs the text from error message
     * @returns {Promise<string>}
     */
    public async errorMessage() : Promise<string>{
        return await this.page.locator('[data-test="error"]').innerText();
    }

    /**
     * Checks if user is logged in by seeing if Products Header is displayed
     * @returns {Promise<boolean>}
     */
    public async isLogedIn() : Promise<boolean> {
        this.page.waitForURL('**/inventory.html')
        return this.page.locator('.header_secondary_container :has-text("Products")').isVisible()
    }
}