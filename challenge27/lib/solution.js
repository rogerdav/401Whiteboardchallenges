'use strict';

module.exports = function(arr) {
  if(!arr) return null;
  if(!Array.isArray(arr)) return null;
  arr.reverse();
  return arr[0].map((val, i) => arr.map(val => val[i]));

};