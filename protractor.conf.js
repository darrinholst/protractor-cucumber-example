'use strict';

exports.config = {
  framework: 'cucumber',

  cucumberOpts: {
    format: 'pretty',
    require: 'features/step_definitions/**/*.js'
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};


