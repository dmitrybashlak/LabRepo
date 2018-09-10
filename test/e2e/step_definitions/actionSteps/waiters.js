"use strict";
let { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const stepFunctions = require('../utils/stepFunctions.js')
const logger = require('../../config/loggerConfig.js').logger;

const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (.*)$/, async (alias, shouldBe) => {
    let element = await elementHelper(alias);
    let expectedConditionFunction = stepFunctions.expectedCondition(shouldBe);
    logger.info(`I wait until ${alias} is ${shouldBe}`);
    return browser.wait(expectedConditionFunction(element), CLICKABLE_TIMEOUT);
});