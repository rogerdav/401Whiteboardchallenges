'use strict';

exports.testCircle = function(list) {

  if(arguments.length > 1 || typeof(arguments[0]) != 'object' || !list.head) {
    return null;
  }
  let currentNode = list.head;
  let testArray = [];
  while(currentNode.next != null) {
    currentNode = currentNode.next;
    testArray.push(currentNode);
    if(testArray.includes(currentNode.next)) return true;


  }

  return false;
};
