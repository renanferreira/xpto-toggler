'use strict'
const mongoose = require('mongoose');
const userController = require('./user-controller');
var toggle = mongoose.model('Toggles');

exports.listToggles = (req, res) => {

    /**
     * TODO: exibição de retorno tratada
     */
    toggle.find(function (err, data) {
        if (err) res.send(err);

        res.json(data);
    });

};

exports.searchToggles = (req, res) => {
    /**
     * TODO: regra para override e exibição de retorno tratada
     */
    toggle.find(
        {
            toggleName: {
                $in: ['isButtonBlue']
            }
        }, function (err, data) {
            if (err) res.send(err);

            res.json({ data });
        });
};
exports.addToggle = (req, res) => { };