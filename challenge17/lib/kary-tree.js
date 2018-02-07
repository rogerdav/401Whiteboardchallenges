'use strict';

const Queue = require('./queue');

const TreeNode = class {
  constructor(val) {
    this.val = val; //change this for the dom import
    this.children = []; 
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
    if(arguments.length < 2) return null;
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
  accumulateValue() {
    let acc = 0;
    this.breadthFirst(node => {
      let temp = node.val.val;
      acc = acc + temp;
    
    });
   
    return acc;
  }

  
};