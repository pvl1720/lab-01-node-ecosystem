'use strict';


const greet = require ('../lib/greet.js');
const expect = require ('expect');


describe('success', () => {

  it('error', function () {
    let response = greet(100);
    expect(response).toEqual(null);

  });
});

  it ('return hello world', () => {
    let response = greet ('world');
    expect (response).toEqual ('hello world');

  });
});
