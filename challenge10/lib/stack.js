'use strict';

module.exports = function(str) {

  if (typeof(str) != 'string' || arguments.length<1) return null;
  for (let i = 0; i < str.length; i++) {
    let stackArry = [];
    let flag = false;
    if (str[i] === '{') {
      stackArray.push('{');
      flag = true;
    }

    if (str[i] === '}') {
      stackArray.pop();
    }

  }






};
