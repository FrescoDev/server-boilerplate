const express = require('express');
const bunyanMiddleware = require('bunyan-middleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const helmet = require('helmet');
const nocache = require('nocache');
const logger = require('./src/logger');
const {
  BASE_PATH,
} = require('./src/env-vars');

const requestLogger = bunyanMiddleware({
  logger,
  headerName: 'Pangiia-Request-Id',
  obscureHeaders: ['authorization'],
  level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info',
});

const apiRoutes = require('./src/routes');

const app = express();

app.use(requestLogger);
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
