const envalid = require('envalid');
const logger = require('./logger');
const { str, num } = envalid;

const env = envalid.cleanEnv(process.env, {
  BASE_PATH: str({ default: '/' }),
  PORT: num({ default: 80 }),
  LAMBDA_FUNCTION_ID: str({ default: 'exec' }),
  GITHUB_API_BASE_URI: str(),
  GITHUB_API_AUTH_TOKEN: str(),
  GITHUB_API_USER_AGENT: str(),
  GITHUB_API_USER_EMAIL: str(),
});

logger.info('Required environment variables are present');

module.exports = env;
