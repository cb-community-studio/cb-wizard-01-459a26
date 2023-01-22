const { Angular-framemworks } = require('./angular-framemworks.class');
const createModel = require('../../models/angular-framemworks.model');
const hooks = require('./angular-framemworks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/angular-framemworks', new Angular-framemworks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('angular-framemworks');

  service.hooks(hooks);
};