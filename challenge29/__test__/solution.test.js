'use strict';
const sortArray = require('../lib/solution');
let testArray = ['car', 'cat', 'dog', 'peter'];
require('jest');

describe('The test solution of sortArray', () => {

  it('should return an array', () => {
    expect(sortArray(testArray)).toBeInstanceOf(Array);
  });





});