import { test, expect } from '../fixtures/productsfixture';
import { SORTSELECTION } from '../utilities/constants';

test.describe('Products Page Tests @products', () => {
    // Product page takes extremely long to load, increased timout only for the tests in this file
    test.setTimeout(120 * 1000);
    test('should verify page loaded', async ({_products}) => {
        const PRODUCTSPAGE = await _products.isProductsDisplayed();
        expect(PRODUCTSPAGE).toBe(true);
    });

    test('Should Verify number of products > 0', async ({_products}) => {
        const NUMBEROFPRODUCTS = await _products.numberOfProducts();
        expect(NUMBEROFPRODUCTS).toEqual(6);
    });

    // test('Should validate product: title, desc, price, ATC', async ({_products}) => {

    // });

    for (const KEY in SORTSELECTION){
        const NAMEFIRST = SORTSELECTION[KEY].nameItemFirst;
        const PRICEFIRST = SORTSELECTION[KEY].priceItemFirst;
        const NAMELAST = SORTSELECTION[KEY].nameItemLast;
        const PRICELAST = SORTSELECTION[KEY].priceItemLast;
        const SORT = SORTSELECTION[KEY].sort;
        test(`Should verify sorting: ${SORT}`, async ({_products}) => {
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

    // test('Should verify sort Z - A', async ({_products}) => {


    // });

    // test('Should verify sort High - Low', async ({_products}) => {

    // });

    // test('Should verify sort Low - High ', async ({_products}) => {

    // });

    // test('Should Verify product detail page', async ({_products}) => {

    // });

    // test('Should Verify add to cart', async ({_products}) => {

    // });

    // test('Should Verify remove from cart', async ({_products}) => {

    // });

})