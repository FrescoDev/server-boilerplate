const R = require('ramda');
const createRepo = require('./create-repo');
const configureTemplate = require('./add-json-file-to-template');
const commitTemplateToRepo = require('./commit-template-to-repo');

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

    configureTemplate(req.body);
    const repoDetails = await createRepo(req);
    const result = await commitTemplateToRepo(repoDetails.html_url);

    return res.status(201).json({ repo_details: repoDetails, result });
  } catch (e) {
    if (e.message && e.statusCode) {
      return res.status(500).json({
        request_error: {
          status_code: e.statusCode,
          message: e.message,
        },
      });
    }

    return res.status(500).json({ general_error: 'something bad happened' });
  }
};
