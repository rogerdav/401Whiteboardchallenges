'use strict';

const stack = require('../lib/checkbraces');
require('jest');


describe('Testing the Stack Module', function(){
  it('take valid arguments', () => {
    expect(stack([])).toBe(null);

  });
  it('There should be at least one { in the string', () => {
    expect(stack('hello')).toBe(null);
  });

  it('Return true wil a valid matched string', () => {
    expect(stack('{a}{b}{c}{d}{{g}}')).toBe(true);

  });
  it('Return false wil a valid unmatched string', () => {
    expect(stack('{a}{b}{c}{d}{g}}}}')).toBe(false);

  });

});
