'use strict';

const random_tree = require('./lib/randomTree');
const tree = require('./lib/kary-tree');
const mostChild = require('./lib/solution');


let randomTree = new tree;


let x = random_tree(randomTree);
let y = mostChild(x);
console.log('The node with the most childred', y);
