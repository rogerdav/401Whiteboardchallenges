'use strict';

const debug = require('debug');
module.exports = function(array, number) {
  if(arguments.length != 2) return null;
  if(!Array.isArray(array)) return null;
  if(typeof number != 'number') return null;
  if(number > array[array.length-1]) return null;

  let min = 0;
  let max = array.length-1;
  let current;

  debug('current before while loop', current);


  while(min <= max) {
    current = (min + max) /2 | 0;



    if(array[current] < number) {
      min++;
    } else if ( array[current] > number) {
      max--;
    } else {
      if(array[current] === number) return {value: number, index: current};
    }
  }

  if(array[current] != number) return 'The number was not in the list';




};
