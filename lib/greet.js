'use strict';

module.exports = (name) => {
  if (typeof name === 'string')
  return 'hello, $(name)';
  return null;
};
