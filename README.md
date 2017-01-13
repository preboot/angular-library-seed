[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/preboot/angular-library-seed/status.svg)](https://david-dm.org/preboot/angular-library-seed#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular-library-seed/dev-status.svg)](https://david-dm.org/preboot/angular-library-seed#info=devDependencies)

## Create an Angular Library Now

### Quick Start

* [Download zip of library](https://github.com/preboot/angular-library-seed/archive/master.zip)

```bash
$ cd path/to/unzip/folder

$ npm install

# start the demo server of the seed library
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

### Now get to work making your library.

#### Overview

A simple straight-forward seed for creating Angular Libraries.

* Quick start with one sample of each already created (with tests): [Component](https://github.com/preboot/angular-library-seed/blob/master/src/app/components/sample.component.ts), [Directive](https://github.com/preboot/angular-library-seed/blob/master/src/app/directives/sample.directive.ts), [Pipe](https://github.com/preboot/angular-library-seed/blob/master/src/app/pipes/sample.pipe.ts) and [Service](https://github.com/preboot/angular-library-seed/blob/master/src/app/services/sample.service.ts)
* Uses [Webpack](http://webpack.github.io/) to demo your library.
* Testing Angular code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* End-to-end Angular code using [Protractor](https://angular.github.io/protractor/).
* Error reported with [TSLint](http://palantir.github.io/tslint/).
* Documentation with [TypeDoc](http://typedoc.io/).

#### Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Documentation](#documentation)
    * [Publishing](https://github.com/preboot/angular-library-seed/blob/master/PUBLISHING.md)
* [Credits](#credits)
* [License](#license)

### Getting Started

## Dependencies

What you need to run this seed:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

It will start a local demo server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:
```bash
npm run docs
```

## Credits

* Project setup based on [angular2-webpack](https://github.com/preboot/angular2-webpack)
* Testing strategies found from [Angular —  Unit Testing recipes by Gerard Sans](https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584)

# License

[MIT](/LICENSE)
