'use strict';
module.exports = (base, exponent) => {
  if(typeof base !== 'number'  || typeof exponent !== 'number')  {
    return new Error('both paramentes need to be a number');
  }
  return Math.pow(base, exponent)
    .toString().split('')
    .reduce((acc, cur) => !isNaN(parseInt(cur)) ? parseInt(cur) + acc : acc, 0);
};


  