import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('login/logout flow', () => {
    let loginPage: LoginPage
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })
    //negative scenario
    test('negative-invalid username/password', async ({ page }) => {
        await page.click('#login2')
        // const loginTitle = page.locator('#logInModalLabel')
        // await expect(loginTitle).toContainText('Log in')
        await page.fill('#loginusername','invalid username')
        await page.fill('#loginpassword', 'invalid password')
        
        //click login button and exepct dialog error box
        const logInButton = page.getByRole('button', { name: 'Log in' })
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('User does not exist.')
            await dialog.accept(); 
        })
        await logInButton.click()
    })
    //positive scenario
    test('positive-valid username/password+logout', async ({ page }) => {
        await page.click('#login2')
        // const loginTitle = page.locator('#logInModalLabel')
        // await expect(loginTitle).toContainText('Log in')
        await page.fill('#loginusername','willdarkins@gmail.com')
        await page.fill('#loginpassword', 'Finley2021!')
        const logInButton = page.getByRole('button', { name: 'Log in' })
        await logInButton.click()
        
        const usernameTitle = page.locator('#nameofuser')
        await expect(usernameTitle).toContainText('Welcome willdarkins@gmail.com')

        await page.click('#logout2')
        const signUpLink = page.locator('#signin2')
        await expect(signUpLink).toBeVisible();
    })
})