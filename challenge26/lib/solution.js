'use strict';


const utils = module.exports = {};

utils.map = function(array, callback) {
  let result  = [];
  for (let i = 0; i < array.length; i ++) {
    result.push(callback(array[i]));
  }
  return result;
};

utils.filter = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i ++) {
    console.log(callback(array[i]));
    if (callback(array[i])) result.push(array[i]);
  
  }
  
  return result;
};

utils.reduce = function(array, callback, accumulator) {
  let result;
  if (array.length < 1) return null;
  if (arguments.length < 3) {
    result = 0;
  } else {
    result = accumulator;
  }
  for (let i = 0; i < array.length; i ++) {
    result = result + callback(array[i]);
  }

  return result;

};