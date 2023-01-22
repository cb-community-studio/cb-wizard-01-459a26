const { Vue-frameworks } = require('./vue-frameworks.class');
const createModel = require('../../models/vue-frameworks.model');
const hooks = require('./vue-frameworks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vue-frameworks', new Vue-frameworks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vue-frameworks');

  service.hooks(hooks);
};