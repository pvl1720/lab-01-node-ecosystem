'use strict';


function greet (name) {
  if (typeof name === 'string'){
    return 'Hello ' + name;
  } else {
    return null;
  }
}

module.exports = greet;
