import { test, expect } from '../../fixtures/base'

test.describe.parallel.only('contact form flow', () => {
    
    test.beforeEach(async ({ contactPage }) => {
        await contactPage.visit()
        await contactPage.contactElementsVisible()
    })
    
    test('positive-valid form and info', async ({ contactPage, page }) => {
        await contactPage.contactFormFill(
            'willdarkins@yahoo.com',
            'Will Darkins',
            'Here is a test message'
        )

        await contactPage.sendContactForm()
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('Thanks for the message!!')
            await dialog.accept(); 
        })
    })

    test('positive-valid form and close', async ({ contactPage, page }) => {
        await contactPage.contactFormFill(
            'willdarkins@yahoo.com',
            'Will Darkins',
            'Here is a test message'
        )

        await contactPage.closeContactForm()
    })
})