/* globals blanket, module */

var options = {
  modulePrefix: 'ember-array-contains-helper',
  filter: '//.*ember-array-contains-helper/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
