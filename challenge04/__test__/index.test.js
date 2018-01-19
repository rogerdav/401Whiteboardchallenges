'use strict';

const intersect = require('../lib/index.js');


const arrayA = ['mike', 'sue', 'tom', 'kathy', 'henry'];
const arrayB = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
const arrayC = [];

describe('Intersect Module', function() {

  it('should take return an array', () => {
    intersect.found(arrayA, arrayB), (err, res) =>
      (res).toBeInstanceOf(Array);

  });
  it('should take take two arrays as parameters', () => {
    intersect.found(arrayA, arrayB), (err, res) =>
      (err).toBeEqual(null);

  });
  it('should take take two arrays as parameters', () => {
    intersect.found(arrayA, arrayC), (err, res) =>
      (res).toBeEqual([]);

  });


});
