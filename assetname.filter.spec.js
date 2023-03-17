const {  expect } = require('@playwright/test');
const {test }  = require("../playwright/fixture")
test.describe("Login before each test", () => {
    test.setTimeout(150000);
    test.beforeEach(async ({page}) => {
    await page.goto("https://pooled.lifex.cloud/search");

    })

    
    
  test("Selecting Asset name filter", async ({page}) => {
        test.setTimeout(150000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        
    })
    

    test("Selecting Asset name filter and search for asset name expect result as 1 (exact result is 2)", async ({page}) => {
        test.setTimeout(150000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('financial');
        const list = page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[3]/div[2]/table/tbody/tr');
        await expect(list).toHaveCount(1); 
    })


    test("Selecting Asset name filter and search for asset name with dash expect result as 2 (exact result is 3)", async ({page}) => {
        test.setTimeout(150000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('vm-marketing');
        const list = page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[3]/div[2]/table/tbody/tr');
        await expect(list).toHaveCount(2); 
    })

    test("Selecting Asset name filter and search for asset name with underscore expect result as 3 (exact result is 1)", async ({page}) => {
        test.setTimeout(15000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('Search_result');
        const list = page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[3]/div[2]/table/tbody/tr');
        await expect(list).toHaveCount(3);
        
    })

    test("Selecting Asset name filter and search for asset name with number expect result as 3 (exact result is 10)", async ({page}) => {
        test.setTimeout(15000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('Recent visit');
        const list = page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[3]/div[2]/table/tbody/tr');
        await expect(list).toHaveCount(3);
        
    })

    test("Selecting Asset name filter and search for asset with space expect result as 2 (exact result as 1)", async ({page}) => {
        test.setTimeout(15000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('Recent visit');
        const list = page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[3]/div[2]/table/tbody/tr');
        await expect(list).toHaveCount(2);
    })

    test("selecting Asset name filters and cancel asset name filter", async ({page}) => {
        test.setTimeout(150000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.waitForTimeout(6000);    
        await page.locator('[data-testid="CancelIcon"]').click({force:true});
    });

    test("selecting Asset name filters and check whether we can do backspacing", async ({page}) => {
        test.setTimeout(150000);
        await page.locator('//*[@id="app"]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div/button').click({force: true});
        await page.locator('//html/body/div[12]/div[3]/ul/li[1]').click({force:true});
        await page.locator('//html/body/div[12]/div/div/input').type('financial');
        await page.locator('//html/body/div[12]/div/div/input').clear();

    });

    
});

