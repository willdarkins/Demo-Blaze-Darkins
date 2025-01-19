import { Locator, Page } from "@playwright/test";

export class Categories {
    readonly page: Page
    readonly categoriesLink: Locator
    readonly phonesLink: Locator
    readonly laptopsLink: Locator
    readonly monitorsLink: Locator

    constructor(page:Page) {
        this.page = page
        this.categoriesLink = page.getByRole('link', { name: 'CATEGORIES' })
        this.phonesLink = page.getByRole('link', { name: 'Phones' })
        this.laptopsLink = page.getByRole('link', { name: 'Laptops' })
        this.monitorsLink = page.getByRole('link', { name: 'Monitors' })
    }

    async clickOnCategory(catName) {
        const tabActions = {
            "CATEGORIES": () => this.categoriesLink.click(),
            "Phones": () => this.phonesLink.click(),
            "Laptops": () => this.laptopsLink.click(),
            "Monitors": () => this.monitorsLink.click()
        }
        
        const clickFunction = tabActions[catName];
        if (clickFunction) {
            await clickFunction();
        } else {
            throw new Error('Tab does not exist')
        }
    }
}