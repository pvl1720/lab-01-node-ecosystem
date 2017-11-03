'use strict';


const arithmetic = require ('../lib/arithmetic.js');
let expect = require ('expect');


describe ('success', function () {
  it ('alert correct', function () {
    let response = arithmetic.add (1, 2);
    expect (response).toEqual (3);
  }}));

  it ('error must enter numbers', function () {
    let response = arithmetic.add ('hello', 7);
    expect (response).toEqual ('error');
  });
}
})


describe ('success', function () {
  it ('return answer if numbers', function () {
    let response = arithmetic.subtract (2, 1);
    expect (response).toEqual ('1');
  }));

  it ('return null if non numbers', function () {
    let response = arithmetic.subtract ('bye', 'bye');
    expect (response).toEqual (null);
  });
}
