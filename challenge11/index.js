'use strict';
const calcMissing = require('./lib/calculate-missing');

let testArray = [...Array(100)].map((x, i) => x = i + 1);
testArray.splice(49, 1);

console.log(calcMissing(testArray));
