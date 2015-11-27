'use strict';

exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',

  cucumberOpts: {
    format: 'pretty',
    require: 'features/step_definitions/**/*.js',
    'no-source': true
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};


