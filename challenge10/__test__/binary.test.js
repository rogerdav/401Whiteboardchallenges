'use strict';

const binary = require('../lib/binary');
require('jest');



describe('Binary module', function() {

  it('shoudl have valid input', () => {
    expect(binary('array', 1)).toBe(null);
    expect(binary([1,2,3,4],'a')).toBe(null);

  });
  it('should check that the number is in range ', () => {
    expect(binary([1,2,3,4],4)).not.toBe(null);
    expect(binary([1,2,3,4],6)).toBe(null);

  });
  it('should find a valid number in range', () => {
    expect(binary([1,2,3,4,5,6,7,8,9], 5)).toEqual({value: 5, index: 4});
    expect(binary([1,3,5,7,9,11,13,15,17,19], 12)).toBe('The number was not in the list');
  });

  it('should return number not in the list if array does not contain number', () => {
    expect(binary([1,3,5,7,9,11,13,15,17,19], 12)).toBe('The number was not in the list');
  });

});
