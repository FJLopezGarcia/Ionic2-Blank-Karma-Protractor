# Ionic 2: Blank Template with Karma
This repository includes the [blank starter template](https://github.com/driftyco/ionic2-starter-blank) 
that is installed through the Ionic-CLI with: 

```$ ionic start blank --v2 --ts```.

It also includes a preconfigured karma configuration file and test template.

## Installation
```
$ git clone https://github.com/brandon-m-howard/Ionic-2-Karma.git
$ cd Ionic-2-Karma
$ npm install
$ npm install -g ionic@beta cordova karma-cli
```

## Unit Tests
1. All unit tests should be added as __app/**/*.spec.ts__
  * This is the Angular2 convention.
1. In the terminal, run ```npm test```
1. Test results are reported in the terminal window.
1. They are also saved to the disk at __/testing/results/*.html__


## References
* [Ionic Blank Starter Template](https://github.com/driftyco/ionic-starter-blank)
* [Unit Testing an Ionic2 project](http://lathonez.github.io/2016/ionic-2-unit-testing/)
