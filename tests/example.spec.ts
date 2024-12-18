import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html#')
    const pageTitle = await page.locator('#nava')
    await expect(pageTitle).toContainText(' PRODUCT STORE')
})