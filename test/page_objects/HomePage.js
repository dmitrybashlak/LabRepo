const MasterPage = require('./master_page');

class HomePage extends MasterPage {
    constructor() {
        super();
        this.url = 'https://www.sandisk.com/';
        this.elements = {
            'Menu Bar': browser.element(by.css('.navbar-nav')),
            'Menu Bar Buttons': browser.element.all(by.css('.navbar-nav li a'))
        }
    }
}
module.exports = HomePage;