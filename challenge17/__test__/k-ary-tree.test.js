'use strict';

const tree = require('../lib/kary-tree');
require('jest');

const testArray = [1,2,3,4,5,6,7,8,9,10];

describe('K-ary Tree accumulator', function() {
  beforeEach(() => {
    this.tree = new tree();
  });
  beforeEach(() => {
    for(let i = 0; i < testArray.length; i ++) {
      let parent = parseInt(testArray[i]/2);
      this.tree.insert(testArray[i], parent);
    }
  });


  describe('test', () => { 

    it('soould be an instance of a tree', () => {
      expect(this.tree).toBeInstanceOf(tree);
    });
    it('shoud insert a node correctly', () => {
      this.tree2 = new tree();
      expect(this.tree2.insert(1, 1)).toEqual({'root': {'children': [], 'val': 1}});
    });
    it('should return the sum of the node values in the tree ', () => {
          
      expect(this.tree.accumulateValue()).toEqual(55);
      
    });

  });
 


});
