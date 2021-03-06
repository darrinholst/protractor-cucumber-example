'use strict';

var chai = require('chai');

module.exports = function() {
  var stepCalled = false;

  this.When(/^I execute this step$/, function(callback) {
    stepCalled = true;
    callback();
  });

  this.Then(/^that step should have been executed$/, function(callback) {
    chai.expect(stepCalled).to.be.true;
    callback();
  });

  this.Then(/^the protractor api should be available$/, function(callback) {
    chai.expect(element).to.be.a('function');
    callback();
  });
};
