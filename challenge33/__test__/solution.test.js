'use strict';
const  solution = require('../lib/solution');
require('jest');

describe('the iterative approach', () => {

  it('should return the correct number', () => {
    let result = solution(2, 2);
    expect(typeof result === 'number').toBe(true);
  });
  it('should return number', () => {
    expect(solution(2,4)).toEqual(7);
  });

  it('should return an error is not passed two numbers', () => {
    expect(solution(3, 'B')).toBeInstanceOf(Error);
    expect(solution('A', 20)).toBeInstanceOf(Error);
  });
  it('should return number', () => {
    expect(solution(2, -3)).toEqual(8);
  });

});