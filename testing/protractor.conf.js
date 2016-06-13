// Protractor configuration file

var SpecReporter = require('jasmine-spec-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var h = today.getHours();
var m = today.getMinutes();
if( dd < 10 ) { dd = '0' + dd }
if( mm < 10 ) { mm = '0' + mm }
var today = yyyy + '_' + mm + '_' + dd + ' at ' + h + '.' + m;

var reporter = new HtmlScreenshotReporter({
  dest: 'end-to-end-tests/',
  filename: today + '.html',
  reportTitle: "End to End Testing",
  cleanDestination: true,
  showSummary: true
});

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8100', // Ionic Server

    specs: ['../app/**/*.e2e.js'],

    exclude: [],

    framework: 'jasmine',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
   },

    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        jasmine.getEnv().addReporter(reporter);
        browser.ignoreSynchronization = true;
    },

    // Close the report after all tests finish
     afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
          reporter.afterLaunch(resolve.bind(this, exitCode));
        });
     },

    useAllAngular2AppRoots: true
};
