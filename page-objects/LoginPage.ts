import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    //Define Selectors
    readonly page: Page
    readonly loginLink: Locator
    readonly loginTitle: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginSubmitButton: Locator
    readonly closeButton: Locator
    readonly logoutLink: Locator
    readonly usernameTitle: Locator
    
    //Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.loginLink = page.locator('#login2')
        this.loginTitle = page.locator('#logInModalLabel')
        this.usernameInput = page.locator('#loginusername')
        this.passwordInput = page.locator('#loginpassword')
        this.loginSubmitButton = page.getByRole('button', { name: 'Log in' }).filter({ hasText: 'Log in' })
        this.closeButton = page.locator('text=Log in')
        this.logoutLink = page.locator('#logout2')
        this.usernameTitle = page.locator('a#nameofuser')

    }
    //Define page methods
    async visit() {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }

    async login(username: string, password: string) {
        await this.loginLink.click()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginSubmitButton.click()
        await expect(this.usernameTitle).toHaveCount(1)
    }

    async logout() {
        await this.logoutLink.click()
        await this.page.waitForURL('https://www.demoblaze.com/index.html');
        await expect(this.usernameTitle).not.toBeVisible()
    }
}