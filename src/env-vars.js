const envalid = require('envalid');
const logger = require('./logger');
const { str, num } = envalid;

const env = envalid.cleanEnv(process.env, {
  BASE_PATH: str({ default: '/SERVICE_NAME' }),
  PORT: num({ default: 80 }),
  LAMBDA_FUNCTION_ID: str({ default: 'calculate' }),
});

logger.log('Required environment variables are present');

module.exports = env;
