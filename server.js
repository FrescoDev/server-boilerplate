const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const helmet = require('helmet');
const nocache = require('nocache');
const {
  BASE_PATH,
} = require('./src/env-vars');

const apiRoutes = require('./src/routes');

const app = express();

app.use(responseTime());
app.use(helmet());
app.use(nocache());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
const contextRoute = new express.Router();
apiRoutes(contextRoute);
app.use(BASE_PATH, contextRoute);

app.shutdown = () => {
};

module.exports = app;
