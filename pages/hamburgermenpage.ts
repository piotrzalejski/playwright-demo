import { Page } from "@playwright/test";

export class HamburgerPage{
    private page: Page;
    
    constructor(page: Page){
        this.page = page;
    }

    /**
     * should click on burger menu button
     * verfies menu drawer opens by verifying if the X is displayed
     * @returns {Promise<boolean>}
     */
    public async clickBurgerMenu() : Promise<boolean> {
        await this.page.click('#react-burger-menu-btn');
        return await this.page.locator('#react-burger-cross-btn').isVisible();
    }

    /**
     * should get text of all menu items
     * @returns {Promise<string[]>}
     */
    public async getMenuItems() : Promise<string[]>{
        let menuItems = []
        const MENULINKS = await this.page.locator('.bm-item').all()
        for (const ROW of MENULINKS){
            menuItems.push(await ROW.innerHTML());
        }
        return menuItems;
    }

    /**
     * Should navigate based on menu item 
     * @param {string} menuItem
     * @returns {Promise<string>}
     */
    public async clickMenuItem(menuItem: string) : Promise<string> {
        await this.page.click(`.menu-item:has-text("${menuItem}")`);
        return this.page.url();
    }
}