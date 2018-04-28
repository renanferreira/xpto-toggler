'use strict'
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var toggleSchema = new Schema({
    toggleName: String,
    toggleVersion: Number,
    serviceListOn: {
        service: [String],
        override: Boolean
    },
    serviceListOff: {
        service: [String],
        override: Boolean
    }
    },{ versionKey: false });

module.exports = mongoose.model('Toggles', toggleSchema, 'toggle');