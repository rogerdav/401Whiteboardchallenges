'use strict';

const idx = require('../index');

describe('function loop', function() {

  it('should have at least two parameters', () => {
    expect(idx.loop(1)).toBe(null);
  });
  it('should have a function as the 2nd parameter', () => {
    expect(idx.loop(2,4)).toBe(null);
  });
  it('should check that this 1st parameter is a number', () => {
    expect(idx.loop('as', function(){})).toBe(null);
  });



});
