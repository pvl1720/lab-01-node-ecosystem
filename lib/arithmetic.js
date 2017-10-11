'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (x, y) => {
  if (isNaN (x) || isNaN (y)) {
    return null;
  }
  return x + y;
};

arithmetic.sub = (x, y) => {
  if (isNaN (x) || isNaN (y)) {
    return null;
  }
  return x - y;
};


//Create a NodeJS module in the lib/ directory named arithmetic.js that exports an object. This module should have add and sub methods that implament addition and subtraction.

//is returning null bad practice? Read somewhere that it's better to return an empty array?
