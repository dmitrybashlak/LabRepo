"use strict";
let {Then} = require('cucumber');
const expect = require('chai').expect;
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js');
const logger = require('../../config/loggerConfig.js').logger;

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
    notArg = notArg ? ' not' : '';
    logger.info(`${alias} should${notArg} be visible`);
    let element = await elementHelper(alias);
    let result = await element.isPresent();
    return expect(result).to.be.equal(!notArg);
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
    notArg = notArg ? ' not' : '';
    let element = await elementHelper(alias);
    let result = await element.length;
    expectedNumber = parseInt(expectedNumber);
    logger.info(`Count of ${alias} should${notArg} be ${expectedNumber}`);
    if (notArg) {
        return expect(result).to.not.equal(expectedNumber);   
    }
    else {
        return expect(result).to.equal(expectedNumber);
    }
});

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
    notArg = notArg ? ' not' : '';
    logger.info(`Text of ${alias} should${notArg} contain ${textToContain}`);
    let element = await elementHelper(alias);
    if (Array.isArray(element)) {
        let arrayOfElementsText = await stepFunctions.getElementsTexts(element);
        if (notArg){
            return expect(arrayOfElementsText).to.not.include(textToContain);
        } else {
            return expect(arrayOfElementsText).to.include(textToContain);
        }
    } else {
        let elementText = await element.getText();
        if (notArg) {
            return expect(elementText.indexOf(textToContain)).to.equal(-1); 
        } else {
            return expect(elementText.indexOf(textToContain)).to.not.equal(-1); 
        }
    }   
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
    notArg = notArg ? ' not' : '';
    let pageTitle = await browser.getTitle();
    logger.info(`Page title should${notArg} be ${text}`);
    if (notArg){
        return expect(pageTitle).to.not.equal(text);
    }
    else {
        return expect(pageTitle).to.be.equal(text);
    }  
});