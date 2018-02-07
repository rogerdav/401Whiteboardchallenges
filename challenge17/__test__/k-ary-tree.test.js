'use strict';

require('jest');
const tree = require('../lib/kary-tree');

const testArray = [1,2,3,4,5,6,7,8,9,10];
describe('K-ary Tree accumulator', function() {
  
  beforeAll(() => {
    this.tree = new tree();
    for(let i = 0; i < testArray.length; i ++) {
      let parent = parseInt(testArray[i]/2);
      this.tree.insert(testArray[i], parent);
    }
    // console.dir(this.tree, {depth: null});
  });


  
  it('soould be an instance of a tree', () => {
    expect(this.tree).toBeInstanceOf(tree);
  });
  it('shoud insert a node correctly', () => {
    expect(this.tree.insert(1, 1)).toEqual({'root': {'children': [], 'val': 1}});
  });
  it('should return the sum of the node values in the tree ', () => {
     
    expect(this.tree.accumulateValue()).toEqual(55);
    // console.log(this.tree);
  });


 


});
