'use strict';

const Queue = require('./queue');
var emptyNode = [];

const TreeNode = class {
  constructor(val) {
    this.val = val;
    this.children = []; // Scott haxored this! Feel free to stretch with the SLL! ;-)
  }
};

const K_ary = module.exports = class {
  constructor() {
    this.root = null;
  }

  // Traversal Methods
  breadthFirst(callback) {
    let current = null;
    let queue = new Queue();
    queue.enqueue(this.root);


    while(queue.back) {
      current = queue.dequeue();

      // console.log('current', current);
      callback(current);

      current.val.children.map(c => queue.enqueue(c));
    }
  }

  // Insertions
  insert(val, parent) {
    let tn = new TreeNode(val);

    if(!this.root) {
      this.root = tn;
      return this;
    }

    this.breadthFirst(node => {
      if(parent === node.val.val) {
        node.val.children.push(tn);
        return;
      }
    });

    return this;
  }

  // finds the leaves on the tree, ie nodes with no children
  findLeaf() {

    this.breadthFirst(node => {
  
      if(node.val.children.length === 0) {
        emptyNode.push(node);
        return;
      }
    });
    
    
    return emptyNode;
  }
  // Removals
  removeByVal(val) {
    // Remove the first node you find that matches val
  }
 
};