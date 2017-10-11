'use strict';

module.exports = (name) => {
  if (typeof name === 'string')
  return 'hello, $(name)';
  return null;
};


//Create a NodeJS module in the lib/ directory named greet.js that exports a single function.
