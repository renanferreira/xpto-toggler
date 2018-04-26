'use strict'

module.exports = (app) => {
    var userController = require('../controllers/user-controller');

    app.route('/users/authenticate')
        .post(userController.autheticate);

}