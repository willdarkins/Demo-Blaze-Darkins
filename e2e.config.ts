import { chromium, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        headless: true, //will run tests automatically in headless mode
        viewport: { width: 1280, height: 720 }, //specify width and height of browser
        actionTimeout: 10000, //amount of time given to selectors to complete before timeout
        ignoreHTTPSErrors: true, //exactly what it says
        video: 'off',
        screenshot: 'off', 
    },
    projects:[
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        }
    ]
}

export default config