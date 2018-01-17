'use strict';
const result = require('../lib/solution');

describe('Solution Module', function() {
  it('should take an array as its argument with more than one element', function(){
    expect(result.highSecond([])).toEqual(null);
  });
  it('should take only an array as a parameter', function(){
    expect(result.highSecond({})).toEqual(null);
  });
  it('should take only numbers as elements', function() {
    expect(result.highSecond([1,2,3,4,'dog'])).toEqual(null);
  });
  it('should not consider duplicates', function() {
    expect(result.highSecond([1,2,3,4,4,5,5])).toEqual({'highest': 5, 'second_highest': 4});
  });
  it('should return null if there are 2 identical elements', function(){
    expect(result.highSecond([17,17])).toEqual(null);
  });
  it('should check for floating point integers', function(){
    expect(result.highSecond([1.9,1.5,1.6,1.1,1.3])).toEqual({'highest': 1.9, 'second_highest': 1.6});
  });
});
