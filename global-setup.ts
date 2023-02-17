import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    console.log('Getting login state....');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(config.projects[0].use.baseURL);
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', "secret_sauce");
    await page.click('#login-button');
    // Save signed-in state to 'storageState.json'.
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
    console.log('state saved\n');
}

export default globalSetup;