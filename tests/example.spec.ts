import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html#')
    const pageTitle = await page.locator('#nava')
    await expect(pageTitle).toContainText(' PRODUCT STORE')
})

test('Clicking on Elements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html#')
    await page.click('#login2')
    const logInButton = page.getByRole('button', { name: 'Log in' })
    await logInButton.click()
})