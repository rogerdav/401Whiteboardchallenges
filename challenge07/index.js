'use strict';

const linkedlist = require('./lib/ll_test');

let circTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}}
  , nonTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}};

circTest.head.next.next.next.next = circTest.head.next;

console.log('Circle list', linkedlist.testCircle(circTest));
console.log('Non circle list', linkedlist.testCircle(nonTest));
