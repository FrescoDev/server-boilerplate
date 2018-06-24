const R = require('ramda');
const {
  GITHUB_API_BASE_URI,
  GITHUB_API_AUTH_TOKEN,
  GITHUB_API_USER_AGENT,
} = require('../../env-vars');
const request = require('request-promise-native');

const options = {
  uri: `${GITHUB_API_BASE_URI}/user/repos`,
  method: 'POST',
  json: true,
  headers: {
    Accept: 'application/json',
    Authorization: `token ${GITHUB_API_AUTH_TOKEN}`,
    'User-Agent': GITHUB_API_USER_AGENT,
    'Content-Type': 'application/json',
  },
};

const constructRequestOptions = R.compose(
  body => R.assoc('body', body, options),
  R.pick(['name', 'description']),
  R.prop('body')
);

module.exports = async req => {
  try {
    const opts = constructRequestOptions(req);
    const response = await request(opts);
    return R.pick(['name', 'description', 'html_url'], response);
  } catch (error) {
    return error;
  }
};
