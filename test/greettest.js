'use strict';



const greet = require ('../lib/greet.js');
const expect = require ('expect');


describe('greet module should be a success', function(){

  it('should return error null', function() {
    let response = greet(100);
    expect(response).toEqual(null);

  });


  it ('should return hello world', function(){
    let response = greet('world');
    expect(response).toEqual('hello world');

  });
});
