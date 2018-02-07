'use strict';
const ktree = require('./lib/kary-tree.js');


let tree = new ktree();

let testArray = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < testArray.length; i ++) {
  let parent = parseInt(testArray[i]/2);
  tree.insert(testArray[i], parent);
  

}

console.log('final answer', tree.accumulateValue());

// console.dir(tree, {depth:null});

