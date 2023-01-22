const { Frontend-js } = require('./frontend-js.class');
const createModel = require('../../models/frontend-js.model');
const hooks = require('./frontend-js.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/frontend-js', new Frontend-js(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('frontend-js');

  service.hooks(hooks);
};