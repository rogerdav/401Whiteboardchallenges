'use strict';
let fibonacci = module.exports = {};

fibonacci.iterative = function (n)  {
  if(n === 0 || n === 1) return n;
  let fabArray = [0,1];
  for (let i=2; i <= n; i++) {

    fabArray.push(fabArray[i-1] + fabArray[i-2]);
  }
  return fabArray[n];
};

fibonacci.recursive = function(n) {

  if(n <2) return n;
  return (fibonacci.recursive(n-1) + fibonacci.recursive(n-2));
};
  