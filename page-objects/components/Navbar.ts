import { Locator, Page } from "@playwright/test";

export class Navbar {
    readonly page: Page
    readonly logo: Locator
    readonly homeLink: Locator
    readonly contactLink: Locator
    readonly aboutUsLink: Locator
    readonly cartLink: Locator
    readonly loginLink: Locator
    readonly signUpLink: Locator

    constructor(page:Page) {
        this.page = page
        this.logo = page.locator('#nava')
        this.homeLink = page.getByRole('link', { name: 'Home' }).filter({ hasText: 'Home' })
        this.contactLink = page.getByRole('link', { name: 'Contact' }).filter({ hasText: 'Contact' })
        this.aboutUsLink = page.getByRole('link', { name: 'About Us' }).filter({ hasText: 'About Us' })
        this.cartLink = page.locator('#cartur')
        this.loginLink = page.locator('#login2')
        this.signUpLink = page.locator('#signin2')
    }

    async clickOnTab(tabName) {
        switch(tabName) {
            case "Logo":
                await this.logo.click()
                    break
            case "Home":
                await this.homeLink.click()
                    break
            case "Contact":
                await this.contactLink.click()
                    break
            case "About us":
                await this.aboutUsLink.click()
                    break
            case "Cart":
                await this.cartLink.click()
                    break
            case "Log in":
                await this.loginLink.click()
                    break
            case "Sign up":
                await this.signUpLink.click()
                    break
            default:
                throw new Error('Tab does not exist')  
        } 
    }
}