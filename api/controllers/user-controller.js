'use strict'
const mongoose = require('mongoose');
var user = mongoose.model('Users');

exports.listUsers = (req, res) => {

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
    user.find(function (err, data) {
        if (err) res.send(err);

        res.json(data);
    });

};

exports.authenticate = (authentication) => {

    return new Promise ((resolve, reject) => {
        user.find(
            { token: authentication },
            (err, data) => {
                if (err) resolve(false);

                if (data.length > 0) {
                    let role = String().trim();
                    console.log("Data " + JSON.stringify(data));
                    console.log("role " + Boolean(data[0].isAdmin));
                    if (Boolean(data[0].isAdmin)) {
                        console.log("OK");
                        return resolve(true);
                    } else {
                        console.log("NOK");
                        return resolve(false);
                    }

                } else {
                    console.log("EXT NOK");
                    return resolve(false);
                }
            });
    });
};