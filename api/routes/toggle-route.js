'use strict'

module.exports = (app) => {
    var toggleController = require('../controllers/toggle-controller');

    app.route('/toggles/services')
        .get(toggleController)
        .post(toggleController);

    app.route('/toggles/new')
        .post(toggleController);

}