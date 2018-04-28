'use strict'
const mongoose = require('mongoose');
const userController = require('./user-controller');
var toggle = mongoose.model('Toggles');

exports.listToggles = (req, res) => {

    let contentType = req.headers['content-type'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error403 = {
            error: "Content Type not supported"
        }
        return res.status(403).send(error403);
    }

    /**
     * TODO: exibição de retorno tratada
     */
    toggle.find(function (err, data) {
        if (err) res.send(err);

        if (data.length > 0) {
            let response = [];

            data.forEach(item => {
                let service = {
                    toggleName: item.toggleName,
                    toggleVersion: item.toggleVersion,
                    serviceListOn: item.serviceListOn,
                    serviceListOff: item.serviceListOff
                }

                response.push(service);
            });

            res.json(response);
        } else {
            let response = {};
            response = {
                error: "No data found"
            }
            return res.status(500).send(response);
        }
    });

};

exports.searchToggles = (req, res) => {

    let contentType = req.headers['content-type'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error403 = {
            error: "Content Type not supported"
        }
        return res.status(403).send(error403);
    }

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

                response = {
                    toggleName: data[0].toggleName,
                    toggleVersion: data[0].toggleVersion,
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

exports.addToggle = (req, res) => {
    let contentType = req.headers['content-type'];
    let authentication = req.headers['authentication'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error403 = {
            error: "Content Type not supported"
        }
        return res.status(403).send(error403);
    }

    if (!authentication || authentication.trim().length === 0) {
        let error403 = {
            error: "Missing authentication key"
        }
        return res.status(403).send(error403);
    }

    userController.authenticate(authentication)
        .then((result) => {
            if (result) {
                toggle.create(req.body, (err, data) => {
                    let response = {};
                    if (err) {
                        //console.log(JSON.stringify(err));
                        response = {
                            error: "Add Toggle Error"
                        }
                        return res.status(500).send(response);
                    } else {
                        //console.log(JSON.stringify(data));
                        response = {
                            message: "Toggle Added"
                        }
                        return res.status(200).send(response);
                    }
                });
            } else {
                let response = {};
                response = {
                    error: "Not authorized"
                }
                return res.status(403).send(response);
            }
        });
};

exports.updateToggle = (req, res) => {
    let contentType = req.headers['content-type'];
    let authentication = req.headers['authentication'];

    if (!contentType || contentType.indexOf('application/json') !== 0) {
        let error403 = {
            error: "Content Type not supported"
        }
        return res.status(403).send(error403);
    }

    if (!authentication || authentication.trim().length === 0) {
        let error403 = {
            error: "Missing authentication key"
        }
        return res.status(403).send(error403);
    }

    userController.authenticate(authentication)
        .then((result) => {
            if (result) {
                toggle.findOneAndUpdate(
                    {
                        $and: [
                            { toggleName: req.body.toggleName },
                            { toggleVersion: req.body.toggleVersion }
                        ]
                    }, req.body, (err, data) => {
                        let response = {};
                        if (err) {
                            //console.log(JSON.stringify(err));
                            response = {
                                error: "Update Toggle Error"
                            }
                            return res.status(500).send(response);
                        } else {
                            //console.log(JSON.stringify(data));
                            if (data === null) {
                                response = {
                                    message: "No data to update"
                                }
                                return res.status(200).send(response);
                            } else {
                                response = {
                                    message: "Toggle Updated"
                                }
                                return res.status(200).send(response);
                            }
                        }
                    });
            } else {
                let response = {};
                response = {
                    error: "Not authorized"
                }
                return res.status(403).send(response);
            }
        });
};