'use strict';

function objectReturn(array) {

  const lowest = Math.min(...array);
  const highest = Math.max(...array);
  const average = array.reduce((acc, reduc) => acc + reduc)/array.length;

  return {'lowest': lowest, 'highest': highest, 'average':average };
}
