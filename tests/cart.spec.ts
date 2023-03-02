import { test, expect } from '../fixtures/pagefixtures'

test.describe('Should test Cart page @cart', () => {
    test('Should  Navigate to Cart', async ({ _cart }) => {
        const CART = await _cart.clickCart();
        expect(CART).toBe(true);
    });

    test('Should verify empty cart', async ({ _cart }) => {
        const CART = await _cart.clickCart();
        expect(CART).toBe(true);

        const COUNT = await _cart.countItems();
        expect(COUNT).toBe(0)

    });

    test('Should verify 1 item in cart', async ({ _cart, _products }) => {
        await _products.addToCart('sauce-labs-backpack');

        const CART = await _cart.clickCart();
        expect(CART).toBe(true);

        const COUNT = await _cart.countItems();
        expect(COUNT).toBe(1);
    });

    test('Should verify multiple items in cart', async ({ _cart, _products }) => {
        await _products.addToCart('sauce-labs-backpack');
        await _products.addToCart('sauce-labs-bolt-t-shirt');

        const CART = await _cart.clickCart();
        expect(CART).toBe(true);

        const COUNT = await _cart.countItems();
        expect(COUNT).toBe(2);
    });

    test('Should verify continue shopping', async ({ _cart, _products }) => {
        const CART = await _cart.clickCart();
        expect(CART).toBe(true);
        
        await _cart.clickContinueShopping();
        
        const PRODUCTS = await _products.isProductsDisplayed();
        expect(PRODUCTS).toBe(true);
    });

    test('Should go through checkout process, cancel step one' , async ({ _cart, _products }) => {
        await _products.addToCart('sauce-labs-backpack');
        await _products.addToCart('sauce-labs-bolt-t-shirt');

        const CART = await _cart.clickCart();
        expect(CART).toBe(true);

        const COUNT = await _cart.countItems();
        expect(COUNT).toBe(2);

        await _cart.clickCheckout();
        const URL = await _cart.clickCancel();
        expect(URL).toContain('/cart.html')
    });

    test('Should go through checkout process, cancel step two' , async ({ _cart, _products }) => {
        await _products.addToCart('sauce-labs-backpack');
        await _products.addToCart('sauce-labs-bolt-t-shirt');

        const CART = await _cart.clickCart();
        expect(CART).toBe(true);

        const COUNT = await _cart.countItems();
        expect(COUNT).toBe(2);

        await _cart.clickCheckout();
        const FORMFIELDS = await _cart.checkoutFieldsPresent();
        for(const X in FORMFIELDS){
            expect(FORMFIELDS[X]).toBe(true);
        }

        await _cart.fillInformation('John', 'Doe', '12345');
        await _cart.clickContinue();
        const URL = await _cart.clickCancel();
        expect(URL).toContain('/inventory.html');
    });

    test('Should go through full checkout process' , async ({ _cart, _products }) => {
        await test.step('Setting up the Cart', async () => {
            await _products.addToCart('sauce-labs-backpack');
            await _products.addToCart('sauce-labs-bolt-t-shirt');
    
            const CART = await _cart.clickCart();
            expect(CART).toBe(true);
    
            const COUNT = await _cart.countItems();
            expect(COUNT).toBe(2);
        });

        await test.step('Should verify form fields present', async () =>{
            await _cart.clickCheckout();
            const FORMFIELDS = await _cart.checkoutFieldsPresent();
            for(const X in FORMFIELDS){
                expect(FORMFIELDS[X]).toBe(true);
            }
        });

        await test.step('Should verify error pops up if fields are empty', async () =>{
            const URL = await _cart.clickContinue();
            expect(URL).toContain('/checkout-step-one');
            const ERRORMSG = await _cart.errorMessage();
            expect(ERRORMSG).toBe('Error: First Name is required')
        });

        await test.step('Should continue to end after adding user info', async () =>{
            await _cart.fillInformation('John','Doe','12345');
            const URL = await _cart.clickContinue();
            expect(URL).toContain('/checkout-step-two')

            // checkout-step-2 also displays itesm in the cart above summary
            const COUNT = await _cart.countItems();
            expect(COUNT).toBe(2);

            const SUMMARYITEM = ['Payment Information', 'Shipping Information', 'Item total', 'Tax', 'Total'];
            for (const I in SUMMARYITEM){
                const SUMMARY = await _cart.summaryInfo(SUMMARYITEM[I]);
                expect(SUMMARY).toBe(true);
            }
    
            const CONFIRM = await _cart.clickFinish();
            expect(CONFIRM).toContain('/checkout-complete');

            const MSG = (await _cart.checkoutMsg()).toLowerCase();
            expect(MSG).toBe('thank you for your order!');
        });
    });
})