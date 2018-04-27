'use strict'

module.exports = (app) => {
    var toggleController = require('../controllers/toggle-controller');

    app.route('/toggler/toggles/services')
        .get(toggleController.listToggles)
        .post(toggleController.searchToggles);

    app.route('/toggler/toggles/new')
        .post(toggleController.addToggle);

}