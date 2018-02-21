'use strict';


module.exports = function(x){
  let y = x.split(' ');

  let z = y.map(curr => {
    let total = 0;
    for (let i = 0; i < curr.length; i++ ) {
      total = (curr.charCodeAt(i) - 96) + total;
    }
    return total;
  });
  let w = z[0];
  let index = 0;
  for(let i = 0; i < z.length;i ++) {
    if (z[i] > w) {
      w = z[i];
      index = i;
    }
  }
  return y[index];
};
