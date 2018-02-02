'use strict';

const stack = require('./stack');
const list = require('./list-build');


module.exports = function(head) {
  let stackA = new stack();
  let listA = new list();
  if (!head) return null;
  if(arguments.length < 1) return null;
  let current = head;
  
  while(current) {
    if(!stackA.top || stackA.top.value !== current.value) {
      stackA.push(current.value);
      listA.createTailNode(current.value);      
    } 
    current = current.next;
    
  }
  return listA;
  
};