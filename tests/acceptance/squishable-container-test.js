import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | squishable container');

test('visiting /squishable-container', function(assert) {
  visit('/');
  let scale;
  andThen(() => {
    scale = getScale(find('.squishable-container'));
    click('button');
  });

  andThen(() => {
    let newScale = getScale(find('.squishable-container'));
    assert.ok(newScale < scale);
  });
});

function getScale(elt) {
  return parseFloat(/matrix\((.*?),/.exec(elt.css('transform'))[1], 10);
}
