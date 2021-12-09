const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('test', async ({ page }) => {

  // Go to http://localhost:8080/
  await page.goto('http://localhost:8080/');

  // Click text=Hello World
  await page.click('text=Hello World');


});
