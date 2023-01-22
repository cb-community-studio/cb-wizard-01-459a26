const { Svelte-frameworks } = require('./svelte-frameworks.class');
const createModel = require('../../models/svelte-frameworks.model');
const hooks = require('./svelte-frameworks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/svelte-frameworks', new Svelte-frameworks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('svelte-frameworks');

  service.hooks(hooks);
};