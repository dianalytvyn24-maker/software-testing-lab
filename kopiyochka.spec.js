const { test, expect } = require('@playwright/test');

test.describe('Автоматизовані перевірки сайту Копійочка', () => {

// 1. Перевірка відкриття сайту
test('1. Перевірка відкриття сайту', async ({ page }) => {
    const response = await page.goto('https://www.kopiyochka.ua/', {
        waitUntil: 'domcontentloaded'
    });
    expect(response.ok()).toBeTruthy();
});

// 2. Перевірка заголовка сторінки
test('2. Перевірка заголовка сторінки', async ({ page }) => {
    await page.goto('https://www.kopiyochka.ua/', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
});

// 3. Перевірка вмісту сторінки
test('3. Перевірка вмісту сторінки', async ({ page }) => {
    await page.goto('https://www.kopiyochka.ua/', { waitUntil: 'domcontentloaded' });
    const content = await page.locator('body').innerText();
    expect(content.trim().length).toBeGreaterThan(0);
});
});