'use strict'
const mongoose = require('mongoose');
const userController = require('./user-controller');
var toggle = mongoose.model('Toggles');

exports.listToggles = (req, res) => {

    var contentType = req.headers['content-type'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error400 = {
            error: "Content Type not supported"
        }
        return res.status(400).send(error400);
    }

    /**
     * TODO: exibição de retorno tratada
     */
    toggle.find(function (err, data) {
        if (err) res.send(err);

        res.json(data);
    });

};

exports.searchToggles = (req, res) => {

    var contentType = req.headers['content-type'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error400 = {
            error: "Content Type not supported"
        }
        return res.status(400).send(error400);
    }

    /**
     * TODO: authentication
     */

    toggle.find(
        {
            $and: [
                { toggleName: req.body.toggleName },
                { toggleVersion: req.body.toggleVersion }
            ]
        }, function (err, data) {
            if (err) res.send(err);

            let response = {};
            if (data.length > 0) {

                console.log("Data " + JSON.stringify(data));

                response = {
                    toggleName: data[0].toggleName,
                    serviceListOn: data[0].serviceListOn,
                    serviceListOff: data[0].serviceListOff
                }

                res.json(response);
            } else {
                response = {
                    error: "No data found"
                }
                return res.status(500).send(response);
            }
        });
};

exports.addToggle = (req, res) => { };

exports.updateToggle = (req, res) => { };