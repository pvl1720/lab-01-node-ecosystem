'use strict';


const greet = require ('../lib/greet.js');
let expect = require ('expect');


describe ('success', function () {
  it ('error', function () {
    let response = greet (100);
    expect (response).toEqual (null);
  })
});

  it ('return hello world', function () {
    let response = greet ('world');
    expect (response).toEqual ('hello world');
  })};
