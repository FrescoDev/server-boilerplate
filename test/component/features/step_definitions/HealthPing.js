const {
  When,
  Then,
} = require('cucumber');


When(/^engineering check the health endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/interaction-designer-api-demo/health');
  });

When(/^engineering check the ping endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/interaction-designer-api-demo/ping');
  });

Then(/^the health response is valid$/, function () {
  this.expect(this.state.response.body).toEqual({
    resources: [],
  });
});

Then(/^the ping response is valid$/, function () {
  this.expect(this.state.response.body.name).toEqual('interaction-designer-api-demo');
});
