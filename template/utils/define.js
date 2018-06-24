const express = require('express');
const app = express();

module.exports = ({ path, method }, requestHandler) => {
  method === 'get' ? app.get(path, requestHandler) : app.post(path, requestHandler);
  console.log(`\nThe endpoint can be tested at: http://localhost:3001${path}`);
  app.listen(3001);
};
