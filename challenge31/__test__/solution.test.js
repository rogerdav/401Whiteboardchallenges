'use strict';
const intersectArray = require('../lib/solution');
let testArray = [1,2,3,4,5,6,6,7,8,9,10,12,11];
let testArray2 = [3,5,9,11];
require('jest');

describe('The test solution of intersectArray', () => {

  it('should return an array', () => {
    expect(intersectArray(testArray, [])).toBeInstanceOf(Array);
  });
  it('should return null if the input is not an array', () => {
    expect(intersectArray('')).toBe(null);
  });
  it('should return an array with the correct values', () => {
    expect(intersectArray(testArray, testArray2)).toEqual([3,5,9,11]);
  });
  it('should check for edge cases', () => {
    expect(intersectArray([1.5, 1.6, 1.7, 1.8], [1.5, 1.8])).toEqual([1.5, 1.8]);
  });
  





});