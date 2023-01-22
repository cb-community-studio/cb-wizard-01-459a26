const assert = require('assert');
const app = require('../../src/app');

describe('\'frontend-js\' service', () => {
  it('registered the service', () => {
    const service = app.service('frontend-js');

    assert.ok(service, 'Registered the service (frontend-js)');
  });
});
