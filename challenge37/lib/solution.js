'use strict';
var array = [];
const sll = require('./sll');
const Tree = require('./tree');



module.exports = function(bst) {
  if(arguments.length !== 1) return null;
  if(typeof bst !== 'object') return null;
 
  let linkedList = new sll();
  array = bst.inOrderTraversal().sort((a, b) => a - b).reverse();
 
  array.map(value =>  linkedList.createHeadNode(value));
  return linkedList;
  

};


