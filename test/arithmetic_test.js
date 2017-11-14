'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe('Arithmetic add', function() {

  it('can add two numbers properly', function() {
    let results = arithmetic.add(1,7);
    expect(results).toEqual(9);
  });

  it('should be null if one isn\'t a number', function() {
    let results = arithmetic.add('Aye',7);
    expect(results).toEqual(null);
  });

});

describe('Arithmetic subtract', function() {

  it('can subtract one number from another properly', function() {
    let results = arithmetic.subtract(4,1);
    expect(results).toEqual(8);
  });

  it('should be null if one isn\'t a number', function() {
    let results = arithmetic.subtract('naw',1);
    expect(results).toEqual(null);
  });

});
