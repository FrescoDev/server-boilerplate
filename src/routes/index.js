const createInteractionContract = require('./create-interaction-contract');
const healthPing = require('./health-ping');
const {
  LAMBDA_FUNCTION_ID,
} = require('../env-vars');

module.exports = (app) => {
  app.post(`/${LAMBDA_FUNCTION_ID}/create-interaction-contract`,
  createInteractionContract
  );
  app.get('/ping',
    healthPing
  );
};
