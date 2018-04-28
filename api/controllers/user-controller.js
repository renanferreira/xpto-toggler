'use strict'
const mongoose = require('mongoose');
var user = mongoose.model('Users');

exports.authenticate = (authentication) => {

    return new Promise ((resolve, reject) => {
        user.find(
            { token: authentication },
            (err, data) => {
                if (err) resolve(false);

                if (data.length > 0) {
                    let role = String().trim();
                    if (Boolean(data[0].isAdmin)) {
                        return resolve(true);
                    } else {
                        return resolve(false);
                    }

                } else {
                    return resolve(false);
                }
            });
    });
};