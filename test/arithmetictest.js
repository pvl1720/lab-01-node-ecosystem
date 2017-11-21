'use strict';



const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');



describe('should manage requests properly', function(){

  it('should return correct sum total', function(){
    let response = arithmetic.add (10, 3);
    expect(response).toEqual (13);

});


  it('should return error must enter numbers', function(){
    let response = arithmetic.add('hello', 12);
    expect(response).toEqual (null);

  });

});


describe('subtract module should input successly', function(){

  it('should return answer when both numbers are given', function(){
    let response = arithmetic.subtract (3, 8);
    expect (response).toEqual (5);

  });


  it('return null if non numbers', () => {
    let response = arithmetic.subtract ('bye', 'bye');
    expect(response).toEqual(null);

  });
});
