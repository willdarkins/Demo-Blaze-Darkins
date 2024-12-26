import { chromium, PlaywrightTestConfig } from "@playwright/test";

//Assigning the config object to a variable to export below
const config: PlaywrightTestConfig = {
//Setting global timeout for how long it should take for tests to finish
    timeout: 6000,

//Number of times you want playwright to re-run failing tests
    retries: 0,

//Indicating browswer specific options
    use: {
        headless: true, //will run tests automatically in headless mode
        viewport: { width: 1280, height: 720 }, //specify width and height of browser
        actionTimeout: 15000, //amount of time given to selectors to complete before timeout
        ignoreHTTPSErrors: true, //exactly what it says
        video: 'off',
        screenshot: 'off', 
    },
//Providing specific settings for specific browsers    
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