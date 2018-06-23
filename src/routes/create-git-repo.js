const R = require('ramda');
const {
  GITHUB_API_BASE_URI,
  GITHUB_API_AUTH_TOKEN,
  GITHUB_API_USER_AGENT,
} = require('../env-vars');
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

const isValid = R.compose(
  R.allPass([
    R.has('name'),
    R.has('description'),
  ]),
  R.prop('body'),
);

module.exports = async (req, res) => {
  try {
    if (!isValid(req)) {
      return res.status(400).json({
        error: 'invalid request',
      });
    }

    const opts = constructRequestOptions(req);
    const response = await request(opts);
    const repoDetails = R.pick(['name', 'description', 'html_url'], response);

    return res.status(201).json({ repo_details: repoDetails });
  } catch (e) {
    if (e.message && e.statusCode) {
      return res.status(500).json({
        request_error: {
          request_details: R.dissoc('headers', options),
          status_code: e.statusCode,
          message: e.message,
        },
      });
    }

    return res.status(500).json({ general_error: 'something bad happened' });
  }
};
