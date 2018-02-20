'use strict';

require('jest');
const rotate = require('../lib/solution');

describe('Solution Test', function() {
  let testArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let result = rotate(testArray);
  let correctResult = [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ];
 
  
  it('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });
  it('should check to see that a parameter is passed', () => {
    expect(rotate()).toBe(null);
  });
  it('should check to see if input is an array', () => {
    expect(rotate('hello')).toBe(null);
  });
  it('should check to see if output is correct', () => {
    expect(result).toEqual(correctResult);
  });

});