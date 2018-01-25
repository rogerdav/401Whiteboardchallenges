'use strict';

module.exports = function(linkedList, n) {
  console.log('srguments', arguments.length);
  if (arguments.length < 2 || typeof linkedList != 'object') {
    return null;
  }



  let length = 1;
  let currentNode = linkedList.head;

  while(currentNode.next != null) {

    length = length + 1;
    currentNode = currentNode.next;
  }

currentNode = linkedList.head;
  if (length < n) return null;
  let itt = length - (n+1);
  console.log('itt', itt);
  for (let i = 0; i < itt ; i++) {
    currentNode = currentNode.next;

  }
  return currentNode;

};
