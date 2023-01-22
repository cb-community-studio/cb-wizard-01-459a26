const assert = require('assert');
const app = require('../../src/app');

describe('\'svelte-frameworks\' service', () => {
  it('registered the service', () => {
    const service = app.service('svelte-frameworks');

    assert.ok(service, 'Registered the service (svelte-frameworks)');
  });
});
