const { Web-application-stack } = require('./web-application-stack.class');
const createModel = require('../../models/web-application-stack.model');
const hooks = require('./web-application-stack.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/web-application-stack', new Web-application-stack(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('web-application-stack');

  service.hooks(hooks);
};