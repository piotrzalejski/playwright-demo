import { test, expect } from '../fixtures/pagefixtures';

test.describe('Hamburger Menu Tests', () => {
    const BASEURL = "https://www.saucedemo.com/"

    test('Should Verify Menu Opens', async ({ _menu }) => {
        const MENU = await _menu.clickBurgerMenu();
        expect(MENU).toBe(true);
    })

    test('Should get all menu items', async ({ _menu }) => {
        const ITEMS = ['All Items', 'About', 'Logout', 'Reset App State'];

        const MENU = await _menu.clickBurgerMenu();
        expect(MENU).toBe(true);

        const MENUITEMS = (await _menu.getMenuItems());
        for( const I of MENUITEMS){
            expect(ITEMS).toContain(I);
        }
    })

    test('Should Navigate: All Items',async ({ _menu, _products }) => {
        //we need to be on a page besides inventory.html
        const SELECTEDPRODUCT = await _products.selectProduct("4");
        expect(SELECTEDPRODUCT).toBe(true);

        const MENU = await _menu.clickBurgerMenu();
        expect(MENU).toBe(true);

        const URL = await _menu.clickMenuItem('All Items');
        expect(URL).toBe(`${BASEURL}inventory.html`);
    })

    test('Should Navigate: About',async ({ _menu }) => {
        const MENU = await _menu.clickBurgerMenu();
        expect(MENU).toBe(true);

        const URL = await _menu.clickMenuItem('About');
        expect(URL).toBe('https://saucelabs.com/');
    })

    test('Should Navigate: Logout',async ({ _menu }) => {
        const MENU = await _menu.clickBurgerMenu();
        expect(MENU).toBe(true);

        const URL = await _menu.clickMenuItem('Logout');
        expect(URL).toBe(BASEURL);
    })
})