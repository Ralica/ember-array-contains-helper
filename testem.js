/* eslint-env node */
'use strict';

module.exports = {
  "framework": "mocha",
  "test_page": "tests/index.html?hidepassed&coverage",
  "disable_watching": true,
  "launch_in_ci": [
    "Chrome"
  ],
  "launch_in_dev": [
    "PhantomJS",
    "Chrome"
  ]
};
