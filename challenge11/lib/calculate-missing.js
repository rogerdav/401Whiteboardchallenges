'use strict';

module.exports = function(array) {

  if(arguments.length !== 1) return null;
  if(!Array.isArray(arguments[0])) return null;
  array.sort((a, b) => a - b);
  console.log('array after sort',array);
  let results = array.filter((x, i) => x !== i+1);
  console.log(results[0]);

  return results[0] - 1;

};
