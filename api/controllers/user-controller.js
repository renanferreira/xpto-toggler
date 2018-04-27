'use strict'
const mongoose = require('mongoose');
var user = mongoose.model('Users');

exports.listUsers = (req, res) => {

    /**
     * TODO: exibição de retorno tratada
     */
    user.find(function (err, data) {
        if (err) res.send(err);

        res.json(data);
    });

};

exports.authenticate = (req, res) => { };