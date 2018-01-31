'use strict';
const stack = require('./lib/stack');
const Queue = require('./lib/queue.js');

let testQueue = new Queue;

console.log('enque', testQueue.enQueue());
console.log('enque', testQueue.enQueue(4));
console.log('enque', testQueue.enQueue(6));
console.log('dequeue', testQueue.deQueue());
