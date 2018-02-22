'use strict';
const sortArray = require('../lib/solution');
let testArray = ['acre', 'race', 'care', 'act', 'cat', 'tac'];
let testArray2 = ['1','1.5','2','3','6','7','1.7'];
require('jest');

describe('The test solution of sortArray', () => {

  it('should return an array', () => {
    expect(sortArray(testArray)).toBeInstanceOf(Array);
  });
  it('should return null if the input is not an array', () => {
    expect(sortArray('bob')).toBe(null);
  });
  it('should return an array with the correct values', () => {
    expect(sortArray(testArray)).toEqual(['act', 'cat', 'tac', 'acre', 'race', 'care']);
  });
  it('should return an array with the correct values', () => {
    expect(sortArray(testArray2)).toEqual(['7', '6', '3', '2', '1', '1.7', '1.5']);
  });
  





});