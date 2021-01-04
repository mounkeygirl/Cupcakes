// process.env.CHROME_BIN = require('puppeteer').executablePath()
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('karma-firefox-launcher'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        jasmine: {
          // you can add configuration options for Jasmine here
          // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
          // for example, you can disable the random execution with `random: false`
          // or set a specific seed with `seed: 4321`
        },
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
        suppressAll: true // removes the duplicated traces
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/angular-muffin'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      // browsers: ['Chrome'],
      browsers: ['Chrome','ChromeHeadlessCI','Chrome_without_security','ChromeHeadless','FirefoxHeadless'],
      customLaunchers: {
        ChromeHeadlessCI: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
    },
    Chrome_without_security: {
      base: 'Chrome',
      flags: ['--disable-web-security', '--disable-site-isolation-trials']
    },
    'FirefoxHeadless': {
      base: 'Firefox',
      flags: [
          '-headless',
      ],
      prefs: {
          'network.proxy.type': 0
      }
  }
  
  },
      singleRun: false,
      restartOnFileChange: true
    });
  };
  