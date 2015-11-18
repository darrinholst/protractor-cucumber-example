'use strict';

exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',

  cucumberOpts: {
    format: 'pretty',
    require: require('glob').sync('features/step_definitions/**/*.js')
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};


