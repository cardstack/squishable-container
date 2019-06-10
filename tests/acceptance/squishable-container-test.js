import { click, visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | squishable container', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /squishable-container', async function(assert) {
    await visit('/');
    let scale = getScale(document.querySelector('.squishable-container'));
    await click('button');
    let newScale = getScale(document.querySelector('.squishable-container'));
    assert.ok(newScale < scale);
  });

  function getScale(elt) {
    return parseFloat(/matrix\((.*?),/.exec(getComputedStyle(elt)['transform'])[1], 10);
  }
});
