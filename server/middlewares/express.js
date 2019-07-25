'use strict';

/**
 * Modulo que contiene la implementacion de Express.
 * Module containing the Express implementation.
 *
 * @module
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const swaggerConfig = require('./swagger');
const swaggerUi = require('swagger-ui-express');
const routings = require('../modules/v1/app/app-routing');
const config = require('../config/');
const mongoose = require('mongoose');

function expressApp() {

  // App
  const app = express();

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // Request Authentocation middleware should be above methodOverride
  app.all('/app/*', [require('./validateRequest')]);

  // Routing
  app.use('/app/', routings);

  // Swagger
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

  // Database Connection
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.db}`)
    .catch(err => console.log(err));
  return app;
}

module.exports = expressApp();