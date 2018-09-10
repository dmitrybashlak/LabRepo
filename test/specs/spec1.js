'use strict';
const HomePage = require('../page_objects/HomePage');

const homePage = new HomePage();

const chai = require('chai');
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

const VISIBILITY_TIMEOUT = 20*1000;

describe('I should be able to access menu on sandisk.com', () => {
    it('I should be on sandisk.com', async () => {
        homePage.goToPage();
        let currentUrl = await homePage.getUrl();
        return expect(currentUrl).to.be.equal('https://www.sandisk.com/');
    });

    it('Menu bar should have 5 buttons', async () => {
        homePage.goToPage();
        await browser.wait(EC.visibilityOf(homePage.elements['Menu Bar']), VISIBILITY_TIMEOUT);
        let menuButtons = await homePage.elements['Menu Bar Buttons'];
        expect(menuButtons.length).to.be.equal(5);
    });

    it('Menu bar bittons text should be: FOR HOME, FOR BUSINESS, OEM DESIGN, ABOUT SANDISK, SUPPORT', async () => {
        let menuButtonsNames = ['FOR HOME', 'FOR BUSINESS', 'OEM DESIGN', 'ABOUT SANDISK', 'SUPPORT'];
        homePage.goToPage();;
        await browser.wait(EC.visibilityOf(homePage.elements['Menu Bar']), VISIBILITY_TIMEOUT);
        let menuButtons = await homePage.elements['Menu Bar Buttons'];
        return menuButtons.forEach(async function (el) {
            let elementText = await el.getText();
            return expect(menuButtonsNames).to.include(elementText);
        });
    });
});