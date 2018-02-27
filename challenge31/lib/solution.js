'use strict';


module.exports = function(arrayOne, arrayTwo) {
  if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) return null;
  let returnArray = [];
  let object = {};
  if(arrayOne.length > arrayTwo.length) {
    arrayOne.map(x => {
      return  object[x] = undefined;
    });
    arrayTwo.map(y => {
      object.hasOwnProperty(y) ? object[y] = y : undefined; 
    });
    Object.keys(object).forEach(k => {
      if(object[k] !== undefined) returnArray.push(Number(k));
    });
    return returnArray;
  } else {
    arrayTwo.map(x => {
      return object[x] = undefined;
    });
    arrayOne.map(y => {
      object.hasOwnProperty(y) ? object[y] = y : undefined; 
    });
    Object.keys(object).forEach(k => {
      if(object[k] !== undefined) returnArray.push(Number(k));
    });
    return returnArray;
  }
  
  


};