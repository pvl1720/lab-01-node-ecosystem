'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('Arithmetic', function() {
  it('can add two numbers properly', function() {
    let results = arithmetic.add(1,7);
    expect(results).toEqual(8);
  });
});
