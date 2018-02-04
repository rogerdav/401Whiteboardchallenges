'use strict';

const tree = require('./lib/kary-tree');

let kTree = new tree();

let testArray = [1,2,3,4,5];

for (let i=0; i<testArray.length; i++) {
  kTree.insert(testArray[i], 1);
}



console.log(' no of leaves', kTree.findLeaf());