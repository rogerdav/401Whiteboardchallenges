'use strict';

require('jest');
const tree = require('../lib/kary-tree');


describe('hjasdhcjd', function() {
  beforeAll(() => {
    this.tree = new tree();
  });


  describe('It should be a instance of a tree', () =>{
    it('soould be an instance of a tree', () => {
      expect(this.tree).toBeInstanceOf(tree);
    });
    it('shoud insert a node correctly', () => {
      expect(this.tree.insert(1, 1)).toEqual({'root': {'children': [], 'val': 1}});
    });
    it('should return the head on find leaves when only one node present ', () => {
      this.tree.insert(2, 1);
      this.tree.insert(3, 1);
      this.tree.insert(4, 2);
      this.tree.insert(5, 2);
      expect(this.tree.findLeaf().length).toEqual(3);
      // console.log(this.tree);
    });


  });


});
