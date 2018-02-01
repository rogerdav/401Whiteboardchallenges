'use strict';

const build = require('../lib/list-build.js');
const mod = require('../lib/solution');

const arrayForTesting = [1,2,3,4,4,5,6,6,7];


let testlist = new build();
arrayForTesting.map(x => testlist.createHeadNode(x));



describe('Solution Module', function() {
 
  it('It should return null if no paramenter', () => {
    expect(testlist.mod().toEqual(null));
  });
   
  
  it('should return an linked list', () => {
    expect(testlist.mod(testlist.head).toBeInsanceOf(build));
  });
  










});