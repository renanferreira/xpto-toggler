'use strict'

module.exports = (app) => {
    var userController = require('../controllers/user-controller');

    app.route('/toggler/users')
        .get(userController.listUsers);

}