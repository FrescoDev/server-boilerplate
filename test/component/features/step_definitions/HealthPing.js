const {
  When,
  Then,
} = require('cucumber');


When(/^engineering check the health endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/SERVICE_NAME/health');
  });

When(/^engineering check the ping endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/SERVICE_NAME/ping');
  });

Then(/^the health response is valid$/, function () {
  this.expect(this.state.response.body).toEqual({
    resources: [],
  });
});

Then(/^the ping response is valid$/, function () {
  this.expect(this.state.response.body.name).toEqual('SERVICE_NAME');
});
