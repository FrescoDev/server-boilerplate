const { define } = require('../utils');
const interaction = require('./config.json');

define(interaction, (request, response) => {
  console.log(request);
  return response.json({
    response: 'hello world',
  });
});
