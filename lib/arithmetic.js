'use strict';


let arithmetic = module.exports = {};


arithmetic.add = function (x, y) {
  if ((typeof x === 'number') && (typeof y === 'number')) {
    return x + y;
  } else {
    return null;
  }
};


arithmetic.subtract = function (x, y) {
  if ((typeof x === 'number') && (typeof y === 'number')) {
    return y - x;
  } else {
    return null;
  }
};
