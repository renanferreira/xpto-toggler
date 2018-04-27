'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = 3000;
var server = express();
require('./api/models/toggle-model');
require('./api/models/user-model');

/**
 * Database connection
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/xpto');

/**
 * Server setup
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

server.use(function (req, res) {
    let response404 = {
        error: "Resource not found"
    };

    res.type('application/json');    
    res.status(404).send(response404);
});

/**
 * Start server
 */
server.listen(port);
console.log('Message RESTful API server started on: ' + port);