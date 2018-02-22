'use strict';

module.exports = function(array) {
  function createHashValue(string){
    return string.split('').reduce((a, b) => (a + b.charCodeAt(0) - 96),0);
  }

  let newArray = array.map(subString => {
  
    return {
      value: createHashValue(subString),
      string: subString,
    };
  });

};