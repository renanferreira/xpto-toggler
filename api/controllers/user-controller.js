'use strict'
const mongoose = require('mongoose');
var user = mongoose.model('Users');

exports.listUsers = (req, res) => {

    var contentType = req.headers['content-type'];
    
    if(!contentType || contentType.indexOf('application/json') !== 0){
        let error400 = {
            error: "Content Type not supported"
        }
        return res.status(400).send(error400);
    }

    /**
     * TODO: exibição de retorno tratada
     */
    user.find(function (err, data) {
        if (err) res.send(err);

        res.json(data);
    });

};

exports.authenticate = (req, res) => { };