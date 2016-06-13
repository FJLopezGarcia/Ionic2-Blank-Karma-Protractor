// Karma Configuration File

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var h = today.getHours();
var m = today.getMinutes();
if( dd < 10 ) { dd = '0' + dd }
if( mm < 10 ) { mm = '0' + mm }
var today = yyyy + '_' + mm + '_' + dd + ' at ' + h + '.' + m;

module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'node_modules/es6-shim/es6-shim.js',        // TypeError: undefined is not a constructor (evaluating 'new exports.Map()')
      'node_modules/reflect-metadata/Reflect.js', // 'Uncaught reflect-metadata shim is required when using class decorators'
      'node_modules/zone.js/dist/zone.js',        // Zone.js dependencies (Zone undefined)
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'app/**/*.spec.ts',
      { pattern: 'www/build/**/*.html', included: false }
    ],

    preprocessors: {
      '**/*.ts': ['browserify'],
    },

    browserify: {
      debug: true,
      transform: [
        ['browserify-istanbul', {
          instrumenter: require('isparta'),
          ignore: ['**/*.spec.ts','**/*.d.ts'],
        }]
      ],
      plugin: [
        ['tsify']
      ]
    },

    exclude: [
    ],

    reporters: ['html', 'mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome', 'Safari', 'PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-browserify',
      'karma-cordova-launcher',
      'karma-htmlfile-reporter',
      'karma-safari-launcher',
      'karma-mocha-reporter'
    ],

    htmlReporter: {
      outputFile: 'testing/unit-tests/' + today + '.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'Project Test Results',
      useLegacyStyle: false
    },

    singleRun: true,
    autoWatch: false,
    concurrency: Infinity
  })
}
