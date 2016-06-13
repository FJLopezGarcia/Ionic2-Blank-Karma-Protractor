# Ionic 2: Blank Template with Karma and Protractor
This repository includes the [blank starter template](https://github.com/driftyco/ionic2-starter-blank) 
that is installed through the Ionic-CLI with: 

```$ ionic start blank --v2 --ts```.

It also includes preconfigured karma and protractor configuration files and test templates.

## Installation
```
$ git clone https://github.com/bhoward-mlock/Ionic2-Blank-Karma-Protractor.git
$ cd Ionic2-Blank-Karma-Protractor
$ npm install
$ npm install -g ionic@beta cordova karma-cli protractor webdriver-manager
$ webdriver-manager update
```

## Unit Tests
1. All unit tests should be added as __app/***/*.spec.ts__
  * This is the Angular2 convention.
  * See __testing/template.spec.ts__ for a template.
2. In the terminal, run ```karma start testing\karma.conf.js```
3. Test results are reported in the terminal window.
4. They are also saved to the disk at __/testing/unit-tests/results/*.html__

## End to End Tests
1. All end to end tests should be added as __app/***/*.e2e.js__
  * See __testing/template.e2e.js__ for a template.
2. In a new terminal window, run ```webdriver-manager start```.
  * This starts the selenium server. Keep this window open.
3. In a new terminal window, run ```ionic serve```.
4. In a new terminal window, run ```protractor testing\protractor.conf.js```.
5. Test results are reported in the terminal window.
6. They are also saved to the disk at __/testing/end-to-end-tests/.html__

## References
* [Ionic Blank Starter Template](https://github.com/driftyco/ionic-starter-blank)
* [Unit Testing an Ionic2 project](http://lathonez.github.io/2016/ionic-2-unit-testing/)
* [End to End testing an Ionic2 project](http://lathonez.github.io/2016/ionic-2-e2e-testing/)
