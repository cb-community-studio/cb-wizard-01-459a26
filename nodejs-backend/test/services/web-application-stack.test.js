const assert = require('assert');
const app = require('../../src/app');

describe('\'web-application-stack\' service', () => {
  it('registered the service', () => {
    const service = app.service('web-application-stack');

    assert.ok(service, 'Registered the service (web-application-stack)');
  });
});
