'use strict';
const tree = require('../lib/kary-tree');
const mostChildren = require('../lib/solution');

require('jest');

describe('Solution test', function() {
  beforeAll(() => {
    this.testTree = new tree;
    let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    


    for(let i = 0; i < testArray.length; i ++) {
      let parent = parseInt(testArray[i]/2);
      this.testTree.insert(testArray[i], parent); 
    }
    this.testTree.insert(21, 2);
    this.testTree.insert(22, 2);
    this.testTree.insert(23, 4);
    this.testTree.insert(24, 3);
    this.testTree.insert(25,8);
   

  });
  
  it('should be an instance of a tree', () => {
    expect(this.testTree).toBeInstanceOf(tree);
    
  });
  
  it('should return the correct node', () => {
    expect(mostChildren(this.testTree).val).toBe(2);
  });

  it('should return a node', () =>{
    expect(mostChildren(this.testTree)).toBeInstanceOf(Object);
  });
  

});
  


