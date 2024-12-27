export async function loadHomepage(page) {
    await page.goto('https://www.demoblaze.com/index.html')
}

export async function assertTitle(page) {
    await page.waitForSelector('h3')

}