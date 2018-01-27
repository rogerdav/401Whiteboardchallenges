'use strict';

const binary = require('./lib/binary.js');
const stack = require('./lib/stack.js');

let testFalse = '{a}{b}{c}{d}{{e}}}';
let testTrue = '{a}{b{{3}}}';

let testArray = [...Array(100)].map((x,i) => i +1);
// console.log(testArray);

console.log('binary result', binary(testArray, 5));

console.log('return false', stack(testFalse));
console.log('return true', stack(testTrue));
