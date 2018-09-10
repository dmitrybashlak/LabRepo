'use strict';
const chai = require('chai');
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

describe('I should be able to access menu on sandisk.com', () => {
    it('I should be on sandisk.com', async () => {
        browser.get('https://www.sandisk.com/');
        let currentUrl = await browser.getCurrentUrl();
        return expect(currentUrl).to.be.equal('https://www.sandisk.com/');
    });

    it('Menu bar should have 5 buttons', async () => {
        browser.get('https://www.sandisk.com/');
        await browser.wait(EC.visibilityOf(browser.element(by.css('.navbar-nav'))));
        let menuButtons = await browser.element.all(by.css('.navbar-nav li a'));
        let countOfMenuButtons = menuButtons.length;
        expect(countOfMenuButtons).to.be.equal(5);
    });

    it('Menu bar bittons text should be: FOR HOME, FOR BUSINESS, OEM DESIGN, ABOUT SANDISK, SUPPORT', async () => {
        let menuButtonsNames = ['FOR HOME', 'FOR BUSINESS', 'OEM DESIGN', 'ABOUT SANDISK', 'SUPPORT'];
        browser.get('https://www.sandisk.com/');
        await browser.wait(EC.visibilityOf(browser.element(by.css('.navbar-nav'))));
        let menuButtons = await browser.element.all(by.css('.navbar-nav li a'));
        return menuButtons.forEach(async function (el) {
            let elementText = await el.getText();
            return expect(menuButtonsNames).to.include(elementText);
        });
    });
});