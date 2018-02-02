'use strict';

const list = require('./lib/list-build');
const mod = require('./lib/dedupe');


const arrayForTest = [1,2,3,4,4,5,6];

const testList = new list;

arrayForTest.map(x => testList.createHeadNode(x));
console.dir(testList, {depth: null});

let returnlist = mod(testList.head);
console.dir(returnlist, {depth: null});