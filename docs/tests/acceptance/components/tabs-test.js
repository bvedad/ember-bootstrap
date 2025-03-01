import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | components/tabs', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/tabs', async function (assert) {
    await visit('/components/tabs');

    assert.equal(currentURL(), '/components/tabs');
  });
});
