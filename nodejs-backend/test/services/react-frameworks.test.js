const assert = require('assert');
const app = require('../../src/app');

describe('\'react-frameworks\' service', () => {
  it('registered the service', () => {
    const service = app.service('react-frameworks');

    assert.ok(service, 'Registered the service (react-frameworks)');
  });
});
