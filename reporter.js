let reporter = require('cucumber-html-reporter');
 
let options = {
        theme: 'bootstrap',
        jsonFile: './report.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };
 
reporter.generate(options);