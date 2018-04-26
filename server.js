'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = 3000;
var server = express();

/**
 * Database connection
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/xpto');

/**
 * Server Setup
 */
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

/**
 * Register resources
 */
var toggleRoute = require('./api/routes/toggle-route');
var userRoute = require('./api/routes/user-route');
toggleRoute(server);
userRoute(server);

server.listen(port);
console.log('Message RESTful API server started on: ' + port);