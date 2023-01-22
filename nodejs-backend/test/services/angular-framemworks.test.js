const assert = require('assert');
const app = require('../../src/app');

describe('\'angular-framemworks\' service', () => {
  it('registered the service', () => {
    const service = app.service('angular-framemworks');

    assert.ok(service, 'Registered the service (angular-framemworks)');
  });
});
