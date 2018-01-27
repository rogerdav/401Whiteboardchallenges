'use strict';

module.exports = function(str) {

  var flag = false;
  let stackArray = [];
  if (typeof(str) != 'string' || arguments.length<1) return null;
  for (let i = 0; i < str.length; i++) {

    if (str[i] === '{') {
      stackArray.push('{');
      flag = true;
    }


    if (str[i] === '}') {
      if(stackArray.length === 0) {
        return false;
      }
      if(stackArray.length != 0) {
        stackArray.pop();
      }
    }

  }
  if(flag === false) {
    return null;
  }
  return true;
};
