'use strict';
const solution = require('../lib/solution');
require('jest');
var testArray = [1,2,3,4,5,6,7,8,9,10];
var testArray2 = ['bob', 'sarah', 'peter'];

describe('The Solution module', function() {


  describe('Map', () =>{
    let testSolution = solution.map(testArray, x => x * 3);
    it('should check that it works', () => {
      expect(testSolution).toBeInstanceOf(Array);
    });
    it('should have the correct solution', () => {
      expect(testSolution).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    });



  });
  describe('Filter', () =>{
    let testSolution = solution.filter(testArray2, x => x.length > 3);
    it('should check that it works', () => {
      expect(testSolution).toBeInstanceOf(Array);
    });
    it('should have the correct solution', () => {
      expect(testSolution).toEqual(['sarah','peter']);
    });


  });
  describe('Reduce', () =>{
    let testSolution = solution.reduce(testArray, x => x);
    it('should check that it works', () => {
      expect(typeof testSolution).toEqual('number');
    });
    it('should have the correct solution', () => {
      expect(testSolution).toEqual(55);
    });



  });
  
  

});
