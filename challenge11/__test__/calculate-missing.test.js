'use strict';

require('jest');
const cm = require('../lib/calculate-missing');

describe('Calculate Missing', function() {

  it('should take in an array as an argument', () => {
    expect(cm('askjfhaskdfh')).toBe(null);
  });
  it('should take one argument', () => {
    expect(cm()).toBe(null);
  });
  it('Should return the correct answer', () => {
    let testArray = [...Array(100)].map((x, i) => x = i + 1);
    testArray.splice(49, 1);
    expect(cm(testArray)).toEqual(50);
  });

});
