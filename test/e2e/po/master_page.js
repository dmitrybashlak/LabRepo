
class MasterPage {
    constructor() {}
    goToPage() {
        return browser.get(this.url);
    }
    getUrl() {
        return browser.getCurrentUrl()
    }
}

module.exports = MasterPage;