import { test as base } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { ContactPage } from "../page-objects/ContactPage"
import { Categories } from "../page-objects/components/Categories"

type MyFixtures = {
    loginPage: LoginPage
    contactPage: ContactPage
    categoriesPage: Categories
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page))
    },

    categoriesPage: async ({ page }, use) => {
        await use(new Categories(page))
    }
})

export { expect } from "@playwright/test"