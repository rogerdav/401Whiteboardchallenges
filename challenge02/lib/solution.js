'use strict';

exports.highSecond = function(array) {

  if(!Array.isArray(array)) {
    return null;
  } 

  let noduplicate = Array.from(new Set(array));

  if(noduplicate.length < 2 || array.some( x => isNaN(x))) {
    return null;
  } else {
    noduplicate.sort((a, b) => a - b);
    let highest = noduplicate[noduplicate.length-1];
    let second = noduplicate[noduplicate.length-2];
    return {
      'highest': highest,
      'second_highest': second,
    };
  }

};
