require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/');

const app = express();

app.use(express.json());

app.use('/', routes);

app.get('/', function (_req, res) {
  res.send({
    name: 'NodeJS + ExpressJS boilerplate',
    environment: process.env.NODE_ENV
  });
});

app.get('/ping', function (_req, res) {
  res.send('pong');
});

/* istanbul ignore if */
if (!module.parent) {
  const server = app.listen(8080, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
  });
}

module.exports = app;
