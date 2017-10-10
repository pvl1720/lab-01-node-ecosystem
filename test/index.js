'use strict';

const greet = require ('./lib/greet.js');

const main = module.exports = () => {
  let result = greet(process.argv.slice(2));
  console.log (result) ;
  return result
};




main();
