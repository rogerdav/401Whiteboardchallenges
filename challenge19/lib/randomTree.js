const ktree = require('./kary-tree');


module.exports = function(x) {
  let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  let testArray2 = [21,22,23,24,25,26,27,28,29,30];
  x.insert(1,1);

  for(let i = 1; i < testArray.length; i ++) {
    let parent = parseInt(testArray[i]/2);
    x.insert(testArray[i], parent); 

  }
  for(let i=0; i < testArray2.length; i++) {
    let parent2 = getRandom(1, 20);
    x.insert(testArray2[i], parent2);
  }
  return x;


  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

};

