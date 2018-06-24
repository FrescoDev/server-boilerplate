/* eslint-disable */
const R = require('ramda');

module.exports = [{
  selector: R.identity,
  expectedResult: {
    "repo_details": {
      "description": "This your first repo!",
      "html_url": "https://github.com/octocat/Hello-World",
      "name": "Hello-World",
    },
  },
}];
