const assert = require('assert');
const app = require('../../src/app');

describe('\'vue-frameworks\' service', () => {
  it('registered the service', () => {
    const service = app.service('vue-frameworks');

    assert.ok(service, 'Registered the service (vue-frameworks)');
  });
});
