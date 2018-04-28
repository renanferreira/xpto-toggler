'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    token: String,
    isAdmin: Boolean
    },
    { versionKey: false });

module.exports = mongoose.model('Users', userSchema, 'user');