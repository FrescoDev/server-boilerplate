const {
  When,
  Then,
} = require('cucumber');

When(/^a user posts a payload for "(.*)" at uri "(.*)" - (.*)$/,
  async function process(scenarioKey, uri, description) {
    console.log(description); // eslint-disable-line
    const scenarioPayload = require(`../../resources/requests/${scenarioKey}`);
    this.state.response = await this.supertest(this.expressInstance)
      .post(`/${this.env.LAMBDA_FUNCTION_ID}/${uri}`)
      .set('X-Test-Spec', scenarioKey)
      .send(scenarioPayload);
  });

Then(/^the response produced for "(.*)" is as expected$/, function (scenarioKey) {
  const assertions =
    require(`../../resources/assertions/${scenarioKey}`);

  assertions.forEach((assertionItem) => {
    const selection = assertionItem.selector(this.state.response.body);
    this.expect(selection).toEqual(assertionItem.expectedResult);
  });
});
