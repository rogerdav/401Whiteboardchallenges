'use strict';

const rotate = require('./lib/solution');


let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let testArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let a = rotate(test);

console.log(a);
console.log(rotate(testArray));