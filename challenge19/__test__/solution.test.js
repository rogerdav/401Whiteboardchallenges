'use strict';
const ktree = require('../lib/kary-tree');
const flattenTree = require('../lib/solution');
const randomTree = require('../lib/randomTree');
const sll = require('../lib/sll');
require('jest');

describe('Solution test', function() {
  beforeAll(() => {
    let tree = new ktree;
    this.tree = randomTree(tree);
    this.sll = new sll;

  });
  
  it('should be an instance of a tree', () => {
    expect(this.tree).toBeInstanceOf(ktree);
  });
  
  it('should return an object', () => {
    expect(flattenTree(this.tree)).toBeInstanceOf(Object);
  });

  it('should return null if no argument passed', () =>{
    expect(flattenTree()).toBe(null);
  });
  

});
  


