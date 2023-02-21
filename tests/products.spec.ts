import { test, expect } from '../fixtures/pagefixtures';
import { FILTERS } from '../utilities/constants';

test.describe('Products Page Tests @products', () => {
    // Product page takes extremely long to load, increased timout only for the tests in this file
    test.setTimeout(120 * 1000);
    test('should verify page loaded', async ({ _products }) => {
        const PRODUCTSPAGE = await _products.isProductsDisplayed();
        expect(PRODUCTSPAGE).toBe(true);
    });

    test('Should Verify number of products > 0', async ({ _products }) => {
        const NUMBEROFPRODUCTS = await _products.numberOfProducts();
        expect(NUMBEROFPRODUCTS).toEqual(6);
    });

    test('Should validate product information displayed in a tile ', async ({ _products }) => {
        const [NAME, PRICE, DESC] = await _products.getProductInfo("4");
        
        expect(NAME).toBe("Sauce Labs Backpack");
        expect(PRICE).toBe("$29.99");
        expect(DESC).toContain("streamlined Sly Pack");
    });

    for (const KEY in FILTERS){
        const NAMEFIRST = FILTERS[KEY].nameItemFirst;
        const PRICEFIRST = FILTERS[KEY].priceItemFirst;
        const NAMELAST = FILTERS[KEY].nameItemLast;
        const PRICELAST = FILTERS[KEY].priceItemLast;
        const SORT = FILTERS[KEY].sort;
        test(`Should verify sorting: ${SORT}`, async ({ _products }) => {
            await _products.sortProducts(SORT);

            const FIRSTITEM  = { 
                name: await  _products.getFirstProduct('name'),
                price: await _products.getFirstProduct('price')
            };
            const LASTITEM = {
                name: await _products.getLastProduct('name'),
                price: await _products.getLastProduct('price')
            }
            
            expect(FIRSTITEM.name).toBe(NAMEFIRST);
            expect(FIRSTITEM.price).toBe(PRICEFIRST);
            expect(LASTITEM.name).toBe(NAMELAST);
            expect(LASTITEM.price).toBe(PRICELAST);
    
        });
    }

    test('Should Verify product detail page', async ({ _products }) => {
        const SELECTEDPRODUCT = await _products.selectProduct("4");
        expect(SELECTEDPRODUCT).toBe(true);

        const [ NAME, PRICE, DESC] = await _products.getSelectedProductInfo();

        expect(NAME).toBe("Sauce Labs Backpack");
        expect(PRICE).toBe("$29.99");
        expect(DESC).toContain("streamlined Sly Pack")
    });

    test('Should Verify addding and removing from cart', async ({ _products }) => {
        await _products.addToCart('sauce-labs-backpack');
        let numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(1);

        await _products.addToCart('sauce-labs-bolt-t-shirt');
        numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(2);

        await _products.removeFromCart('sauce-labs-backpack');
        numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(1);

        await _products.removeFromCart('sauce-labs-bolt-t-shirt');
        numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(0);
    });

    test('Should Verify addding and removing from cart on product detail page', async ({ _products }) => {
        const SELECTEDPRODUCT = await _products.selectProduct("4");
        expect(SELECTEDPRODUCT).toBe(true);

        await _products.addToCart('sauce-labs-backpack');
        let numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(1);

        await _products.removeFromCart('sauce-labs-backpack');
        numberOfItems = await _products.cartItems();
        expect(numberOfItems).toBe(0);
    });
})