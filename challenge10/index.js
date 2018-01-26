'use strict';

const binary = require('./lib/binary.js');
const stack = require('./lib/stack.js');

let testFale = '{{{{{{{{{{}}}}}}}}}}}';
let testTrue = '{{{{{{{{{{}}}}}}}}}}'

console.log('return True', stack(testTrue));
console.log('return False', stack(testTrue));
