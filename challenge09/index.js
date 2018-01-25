'use strict';

const find = require('./lib/find');

let testList = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}};

find(testList, 1);

console.log('result node', find(testList, 1));
