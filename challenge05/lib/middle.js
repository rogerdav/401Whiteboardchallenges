'use strict';

module.exports = function findMiddle(obj) {
  if (obj.head === null || obj.head.next === null) {
    return null;
  }
  
  let pointer1 = obj.head;
  let pointer2 = obj.head;
  while(pointer2.next != null && pointer2.next.next != null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  return pointer1.value;
};
