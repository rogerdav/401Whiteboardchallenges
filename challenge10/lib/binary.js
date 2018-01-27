'use strict';

const debug = require('debug');
module.exports = function(array, number) {
  if(arguments.length != 2) return null;
  if(!Array.isArray(array)) return null;
  if(typeof number != 'number') return null;
  if(number > array[array.length-1]) return null;

  let min = 0;
  let max = array.length-1;
  let current = parseInt(array.length/2);


  debug('current before while loop', current);


  while(min <= max) {

    // if(array[current] < number) {
    //
    //   if(array[current] === number) {
    //     return {value: number, index: current};
    //   }
    //
    // }
    if(array[current] > number) {
      max = current -1;
      current = current - parseInt((max-min)/2);
      debug('hhhhhhhh');
      if(array[current] === number) {
        return {value: number, index: current};
      }
    }

  }


  if(array[current] === number) {
    return {value: number, index: current};
  }


















};
