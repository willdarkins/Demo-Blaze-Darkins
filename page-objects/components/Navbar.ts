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
        const tabActions = {
            "Logo": () => this.logo.click(),
            "Home": () => this.homeLink.click(),
            "Contact": () => this.contactLink.click(),
            "About us": () => this.contactLink.click(),
            "Cart": () => this.cartLink.click(),
            "Log in": () => this.loginLink.click(),
            "Sign up": () => this.signUpLink.click()
        }
        
        const clickFunction = tabActions[tabName];
        if (clickFunction) {
            await clickFunction();
        } else {
            throw new Error('Tab does not exist')
        }
    }
}