'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('greet test is working', function() {

  it('if it\'s not a string, you\'ll see NULL', function() {
    let results = greet(99);
    expect(results).toEqual(null);
  });

  it('should return \'hello world\' when \'world\' is the 1st argument', function() {
    let results = greet('world');
    expect(results).toEqual('Greetings, world');
  });

});
