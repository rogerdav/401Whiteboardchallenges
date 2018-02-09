'use strict';
const sll = require('./sll');

let newSll = new sll;



module.exports = function(tree) {
  if(!tree) return null;
  let nodeArray = [];

  tree.breadthFirst(node => {
   
    nodeArray.push(node.val.val);
  });

  
  nodeArray.sort((a, b) => a - b);

  while(nodeArray.length) {
    newSll.createHeadNode(nodeArray.pop());
  }


  return newSll;

};


