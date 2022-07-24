const testConfig = require('./config/config').Config;
const browserOptions = require('./config/config').BrowserOptions;
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

if (testConfig.headless) {
  browserOptions.push('--headless');
}

exports.config = {
  // find all possible options and variations here
  // https://github.com/webdriverio/webdriverio/blob/main/examples/wdio.conf.js
  specs: ['./tests/**/*.test.js'],
  exclude: [],
  maxInstances: 3,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      outputDir: './artifacts',
      'goog:chromeOptions': {
        args: browserOptions,
      },
    },
  ],
  logLevel: 'error',
  bail: 0,
  baseUrl: testConfig.baseURL,
  waitforTimeout: 15000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  services: ['chromedriver', [TimelineService]],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: './artifacts/report',
        embedImages: true,
        images: {
          quality: 80,
          resize: false,
          reductionRatio: 2,
        },
        screenshotStrategy: 'on:error',
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
};
