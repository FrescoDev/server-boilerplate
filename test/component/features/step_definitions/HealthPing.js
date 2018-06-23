const {
  When,
  Then,
} = require('cucumber');

When(/^engineering check the ping endpoint$/,
  async function () {
    this.state.response = await this.supertest(this.expressInstance)
      .get('/ping');
  });

Then(/^the health response is valid$/, function () {
  this.expect(this.state.response.body).toEqual({
    healthy: true,
  });
});
