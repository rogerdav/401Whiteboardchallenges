'use strict';

const random_tree = require('./lib/randomTree');
const tree = require('./lib/kary-tree');
const flattenTree = require('./lib/solution');



let randomTree = new tree;



let x = random_tree(randomTree);
let y = flattenTree(x);



console.dir(y, {depth: null});