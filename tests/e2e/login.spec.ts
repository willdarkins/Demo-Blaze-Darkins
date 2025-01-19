import { test, expect } from '../../page-objects/base'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel.only('login/logout flow', () => {
    
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.visit()
    })
    //negative scenario
    test('negative-invalid username/password', async ({ loginPage, page }) => {
        await loginPage.login('invalid username', 'invalid password')
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('User does not exist.')
            await dialog.accept(); 
        })
    })
    //positive scenario
    test('positive-valid username/password+logout', async ({ loginPage, page }) => {
        await loginPage.login('willdarkins@gmail.com', 'Finley2021!')

        await loginPage.logout()

        const signUpLink = page.locator('#signin2')
        await expect(signUpLink).toBeVisible();
    })
})