'use strict';

const build = require('../lib/list-build.js');
const mod = require('../lib/dedupe');

const arrayForTesting = [1,2,3,4,4,5,6,6,7];
const correctRes = {'head': 
                        {'next': 
                            {'next': 
                                {'next': 
                                    {'next': 
                                        {'next':  
                                            {'next': 
                                                {'next': null, 
                                                  'value': 1}, 
                                            'value': 2},
                                        'value': 3},
                                    'value': 4},
                                'value': 5},
                            'value': 6},
                        'value': 7}};


let testlist = new build();
arrayForTesting.map(x => testlist.createHeadNode(x));



describe('Solution Module', function() {
 
  it('It should return null if no paramenter', () => {
    expect(mod()).toBe(null);
  });
   
  
  it('should return an linked list', () => {
    expect(mod(testlist.head)).toBeInstanceOf(build);
  });
  
  it('should return an corrent linked list', () => {
    expect(mod(testlist.head)).toEqual(correctRes);
  });









});