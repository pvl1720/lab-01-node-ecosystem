'use strict';

const greet = require('./lib/greet.js');
const domath = require('./lib/arithmetic.js');

console.log(greet('Max'));

console.log('msg from index.js');

console.log(domath.add(1,7));
console.log(domath.subtract(4,1));
