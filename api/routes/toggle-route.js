'use strict'

module.exports = (app) => {
    var toggleController = require('../controllers/toggle-controller');

    app.route('/toggles/services')
        .get(toggleController.listToggles)
        .post(toggleController.searchToggles);

    app.route('/toggles/new')
        .post(toggleController.addToggle);

}