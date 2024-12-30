import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    //Define Selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginSubmitButton: Locator
    readonly closeButton: Locator
    
    //Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#loginusername')
        this.passwordInput = page.locator('#loginpassword')
        this.loginSubmitButton = page.locator('text=Log in')
        this.closeButton = page.locator('text=Log in')
    }
    //Define page methods
    async visit() {
        await this.page.goto('https://www.demoblaze.com/index.html')
    }
}
