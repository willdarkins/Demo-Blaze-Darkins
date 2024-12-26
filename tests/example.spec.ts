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
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Please fill out Username and Password.')
        await dialog.accept(); 
    })
    await logInButton.click()
})

test('Working with inputs... Negative login scenario', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername', 'some username')
    await page.fill('#loginpassword', 'some password')
    const logInButton = page.getByRole('button', { name: 'Log in' })
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('User does not exist.')
        await dialog.accept(); 
    })
    await logInButton.click()
})

test.only('Assertions', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    
    const element = await page.locator('#nava')
    await expect(element).toBeVisible
    await expect(element).toHaveText(' PRODUCT STORE')
    await expect(element).toHaveCount(1)

    const nonExistingElement = await page.locator('h10')
    await expect(nonExistingElement).not.toBeVisible()
})