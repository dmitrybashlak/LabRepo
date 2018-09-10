const EC = protractor.ExpectedConditions;
const ForHomePage = require('../../po/ForHomePage');
const BasePage = require('../../po/BasePage');
const logger = require('../../config/loggerConfig.js').logger;

const forHomePage = new ForHomePage();
const basePage = new BasePage();

    function getPageObjectByUrl (url) {
        let page;
        let PageObjectsArray = [forHomePage, basePage];
        PageObjectsArray.forEach((PO) => {
            if (PO.url === url) {
                page = PO;
            }
        });
        if (!page) {
            throw new Error(`No page object with [${url}] url!`);
        } else {
            return page;
        }
    }

    function getElementsTexts(arrayOfElements) {
        return new Promise((resolve, reject) => {
            if (!arrayOfElements) {
                reject('Array of elements is empty!')
            }
            let arrayOfTextsPromises = [];
            arrayOfElements.forEach((element) => {
                arrayOfTextsPromises.push(element.getText());
            });
            resolve(Promise.all(arrayOfTextsPromises));
        });
    }

    let getPageObjectElement = async function (alias) {
        let currentUrl = await browser.getCurrentUrl();
        let currentPage = getPageObjectByUrl(currentUrl);
        return currentPage.elements[alias];
    };

    let expectedCondition = (shouldBe) => {
        let expectedConditionFunction;
    
        switch (shouldBe) {
            case "present":
                expectedConditionFunction = EC.presenceOf.bind(EC);
                break;
            case "clickable":
                expectedConditionFunction = EC.elementToBeClickable.bind(EC);
                break;
            case "visible":
                expectedConditionFunction = EC.visibilityOf.bind(EC);
                break;
            case "invisible":
                expectedConditionFunction = EC.invisibilityOf.bind(EC);
                break;
            case "selected":
                expectedConditionFunction = EC.elementToBeSelected.bind(EC);
                break;
            case "gone":
                expectedConditionFunction = EC.stalenessOf.bind(EC);
                break;
            default:
                logger.error(`Wrong expected condition provided: [${shouldBe}]`);
                throw new Error('Wrong expected condition provided.');
        }
        return expectedConditionFunction;
    };

    module.exports = {
        getPageObjectElement,
        expectedCondition,
        getElementsTexts
    }