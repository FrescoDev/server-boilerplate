const handleRequest = require('./handle-request');
const {
  LAMBDA_FUNCTION_ID,
} = require('../env-vars');

module.exports = (app) => {
  app.get(`/v1/${LAMBDA_FUNCTION_ID}`,
    handleRequest
  );
};
