"use strict";
const {When} = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const logger = require('../../config/loggerConfig.js').logger;

When(/^I click "([^"]*)"$/, async (alias) => {
    logger.info(`I click ${alias}`);
    return await elementHelper(alias).click();
});