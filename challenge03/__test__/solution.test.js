'use strict';
const result = require('../lib/solution');
let myObj = {
  'value': 2,
  'next': {
    'value': 10,
    'next': {
      'value': 20,
      'next': null,
    },
  },
};

describe('Solution Module', function() {

  it('should only take an object', () =>
    expect(result.traverse([1,2,3,4,5])).toEqual(null)
  );
  it('should check the the key of value is a number', () =>
    expect(result.traverse({'value': 'roger'})).toEqual(null)
  );
  it('should check that the next value is either an object or null', () =>
    expect(result.traverse({'next': []})).toEqual(null)
  );
  it('should take valid input and return 32', () =>
    expect(result.traverse(myObj)).toEqual(32)
  );
});
