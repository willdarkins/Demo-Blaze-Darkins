import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class ContactPage extends LoginPage {
    readonly page: Page
    readonly contactLink: Locator
    readonly contactEmailLabel: Locator
    readonly contactNameLabel: Locator
    readonly contactMessageLabel: Locator
    readonly contactEmailInput: Locator
    readonly contactNameInput: Locator
    readonly contactMessageInput: Locator
    readonly closeButton: Locator
    readonly sendButton: Locator

    constructor(page:Page){
        super(page)
        this.page = page
        this.contactLink = page.getByRole('link', { name: 'Contact' }).filter({ hasText: 'Contact' })
        this.contactEmailLabel = page.locator('label').filter({ hasText: 'Contact Email:' })
        this.contactNameLabel = page.locator('label').filter({ hasText: 'Contact Name:' })
        this.contactMessageLabel = page.locator('label').filter({ hasText: 'Message:' })
        this.contactEmailInput = page.locator('#recipient-email')
        this.contactNameInput = page.locator('#recipient-name')
        this.contactMessageInput = page.locator('#message-text')
        this.closeButton = page.getByRole('button', { name: 'Close' }).filter({ hasText: 'Close' })
        this.sendButton = page.getByRole('button', { name: 'Send message' }).filter({ hasText: 'Send message' })
    }

    async contactElementsVisible() {
        await this.contactEmailLabel.isVisible()
        await this.contactNameLabel.isVisible()
        await this.contactMessageLabel.isVisible()
    }
    
    async contactFormFill(email: string, name: string, message: string) {
        await this.contactLink.click()
        await this.contactEmailInput.fill(email)
        await this.contactNameInput.fill(name)
        await this.contactMessageInput.fill(message)
    }

    async sendContactForm() {
        await this.sendButton.click()
    }

    async closeContactForm(){
        await this.closeButton.click()
    }
}
