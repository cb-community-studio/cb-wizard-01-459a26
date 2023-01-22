const { React-frameworks } = require('./react-frameworks.class');
const createModel = require('../../models/react-frameworks.model');
const hooks = require('./react-frameworks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/react-frameworks', new React-frameworks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('react-frameworks');

  service.hooks(hooks);
};