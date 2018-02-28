'use strict';
const fibonacci = require('../lib/solution');
require('jest');

describe('the iterative approach', () => {

  it('should return number', () => {
    expect(fibonacci.iterative(1)).toBe(1);
  });
  it('should return number', () => {
    expect(fibonacci.iterative(9)).toEqual(34);
  });

  it('should return number', () => {
    expect(fibonacci.recursive(1)).toBe(1);
  });
  it('should return number', () => {
    expect(fibonacci.recursive(8)).toEqual(21);
  });

});