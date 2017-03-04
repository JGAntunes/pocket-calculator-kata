'use strict';

const test = require('tape');

const Calculator = require('../lib/calculator');

test('calculator interface', (assert) => {

  assert.deepEqual(
    Calculator().ac().print(),
    0,
    '`ac` should reset current state to 0'
  );

  assert.deepEqual(
    Calculator().sum(2).print(),
    2,
    '`sum` should print 2 when given 2'
  );

  assert.deepEqual(
    Calculator().mult(2).print(),
    0,
    '`mult` should print 0 when given 2'
  );

  assert.deepEqual(
    Calculator().div(2).print(),
    0,
    '`div` should print 0 when given 2'
  );

  assert.deepEqual(
    Calculator().sub(2).print(),
    -2,
    '`sub` should print -2 when given 2'
  );

  assert.end();
});

