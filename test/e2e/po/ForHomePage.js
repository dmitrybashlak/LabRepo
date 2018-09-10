const BasePage = require('./BasePage');

class ForHomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.sandisk.com/home';
    }
}

module.exports = ForHomePage;