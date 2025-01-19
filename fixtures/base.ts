import { test as base } from "@playwright/test"
import { LoginPage } from "../page-objects/LoginPage"
import { ContactPage } from "../page-objects/ContactPage"

type MyFixtures = {
    loginPage: LoginPage
    contactPage: ContactPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page))
    }
})

export { expect } from "@playwright/test"