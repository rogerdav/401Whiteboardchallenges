'use strict';
const build = require('./listbuild');


const arrayForTesting = [1,2,3,4,5,6,7];
const array2testing = [5,6,7,8,9,10];

let listOne = new build();
let listTwo = new build();


arrayForTesting.map(x => listOne.createHeadNode(x));
array2testing.map(x => listTwo.createHeadNode(x));


module.exports = function(listOne, ListTwo) {
  let one = listOne.head;
  let two = listTwo.head;
  let test = {};
  while (one.next) {
    test[one.value] = true;
    one = one.next;
  };
  while (two.next) {
    if(test[two.vale])
    
  }


}
