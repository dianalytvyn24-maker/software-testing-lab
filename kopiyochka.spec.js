const { test, expect } = require('@playwright/test');

// Запускаємо тест сайту Копійочка
test('Перевірка сайту Копійочка', async ({ page }) => {
    // 1. Відкриваємо сайт
const response = await page.goto('https://www.kopiyochka.ua/', {
    waitUntil: 'domcontentloaded'
});

// Перевіряємо, чи сайт успішно завантажився
expect(response.ok()).toBeTruthy();

// 2. Перевіряємо, чи має сторінка заголовок
const title = await page.title();
expect(title.length).toBeGreaterThan(0);

// 3. Перевіряємо, чи відображається вміст сторінки
const content = await page.locator('body').innerText();
expect(content.trim().length).toBeGreaterThan(0);

});
