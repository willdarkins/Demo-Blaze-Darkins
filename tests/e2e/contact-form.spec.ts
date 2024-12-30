import { test, expect } from '@playwright/test'

test.describe.parallel('contact form flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/index.html#')
        const contactLink = page.getByRole('link', {name: 'Contact'})
        await contactLink.click()
    })
    
    test('positive-valid form and info', async ({ page }) => {
        await page.fill('#recipient-email', 'willdarkins@yahoo.com')
        await page.fill('#recipient-name', 'Will Darkins')
        await page.fill('#message-text', 'Call me now, please.')

        const sendMessage = page.getByRole('button', { name: 'Send Message' })
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Thanks for the message!!')
            await dialog.accept(); 
        })
        await sendMessage.click()
    })

    test('positive-valid form and close', async ({ page }) => {
        await page.fill('#recipient-email', 'willdarkins@yahoo.com')
        await page.fill('#recipient-name', 'Will Darkins')
        await page.fill('#message-text', 'Call me now, please.')

        const closeMessage = page.getByRole('button', { name: 'Close' }).filter({ hasText: 'Close' })
        await closeMessage.click()
    })
})