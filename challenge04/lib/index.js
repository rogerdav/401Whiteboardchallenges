'use strict';

const intersect = module.exports = {} ;

intersect.found = function (arr1, arr2)  {
  if(!arr1.isArray || arr2.isArray) {return null};
  let obj = {};
  let intersectArray = [];
  arr1.map(x => obj[x] = true);
  arr2.map(y => {
    obj.hasOwnProperty(y) ? intersectArray.push(y): undefined;
  });
  console.log('the intersect array', intersectArray);
};
