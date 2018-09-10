exports.config = {

    framework: 'jasmine',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'https://www.sandisk.com/',

    onPrepare: () => {
        browser.manage().window().maximize();
    }
};