require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');

const routes = require('./src/routes/');

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'db',
  dialect: 'postgres'
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

const app = express();

app.use(express.json());

app.use('/', routes);

app.get('/', function (_req, res) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV
  });
});

app.get('/ping', function (_req, res) {
  res.send('pong');
});

// istanbul ignore if
if (!module.parent) {
  const server = app.listen(process.env.APP_PORT, function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
  });
}

module.exports = app;
