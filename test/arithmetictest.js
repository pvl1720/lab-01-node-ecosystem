'use strict';



const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');



describe('success', () => {

  it ('alert correct', () => {
    let response = arithmetic.add (1, 2);
    expect (response).toEqual (3);
  });
});


  it ('error must enter numbers', () => {
    let response = arithmetic.add ('hello', 7);
    expect (response).toEqual ('error');

  });
});


describe ('success', () => {

  it ('return answer if numbers', () => {
    let response = arithmetic.subtract (2, 1);
    expect (response).toEqual ('1');

  });
});


  it ('return null if non numbers', () => {
    let response = arithmetic.subtract ('bye', 'bye');
    expect (response).toEqual (null);

  });
});
