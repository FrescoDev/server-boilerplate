const test = require('tape');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

test('that env vars are validated', (t) => {
  const sandbox = sinon.sandbox.create();
  const envalidStub = sandbox.stub();
  envalidStub.str = sandbox.stub().returns("str");
  envalidStub.num = sandbox.stub().returns("num");
  envalidStub.bool = sandbox.stub().returns("bool");
  envalidStub.cleanEnv = sandbox.stub();

  const module = proxyquire('./env-vars', {
    'envalid': envalidStub
  });

  t.deepEquals(envalidStub.cleanEnv.args[0][1], {
    BASE_PATH: 'str',
    PORT: 'num',
    LAMBDA_FUNCTION_ID: 'str',
    GITHUB_API_BASE_URI: 'str',
    GITHUB_API_AUTH_TOKEN: 'str',
    GITHUB_API_USER_AGENT: 'str',
    GITHUB_API_USER_EMAIL: 'str',
  });

  t.end();
});
