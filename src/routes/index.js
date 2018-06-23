const createGitRepo = require('./create-git-repo');
const healthPing = require('./health-ping');
const {
  LAMBDA_FUNCTION_ID,
} = require('../env-vars');

module.exports = (app) => {
  app.post(`/${LAMBDA_FUNCTION_ID}/create-git-repo`,
    createGitRepo
  );
  app.get('/ping',
    healthPing
  );
};
