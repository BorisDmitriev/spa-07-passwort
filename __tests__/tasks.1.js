const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Passoword field', () => {
    it("Page Should contain a Passoword field", async () => {
        const password = await page.$('input[type=password]');
        expect(password).toBeTruthy();
    });
});

describe('Password Length', () => {
    it("Minimum Password Length should be 6 characters", async () => {
        const minLength = await page.$eval('input[type=password]', el => Number(el.getAttribute('minlength')));
        expect(minLength).toBeGreaterThan(5);
    });
});

describe('Show password', () => {
    it("Page contains 'Show Password' checkbox", async () => {
        const checkbox = await page.$('input[type=checkbox]');
        expect(checkbox).toBeTruthy();
    });
    it("Should allow user to toggle password visibility", async () => {
        const field = await page.$('input[type=password]',);
        await page.type('input[type=password]', 'easyPassword');
        expect(await page.evaluate(el => el.type, field)).toBe('password');
        await page.click('input[type=checkbox]');
        expect(await page.evaluate(el => el.type, field)).toBe('text');
    });
});