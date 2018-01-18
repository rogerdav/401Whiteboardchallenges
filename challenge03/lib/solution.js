'use strict';


exports.traverse = function(obj) {
  let total = 0
  if(typeof(obj.value) != "number") {return null};
  if(typeof(obj) != "object") {return null };
  if(typeof(obj.next) != "object" && obj.next != null) {return null };

  traverseRecursive(obj);

  function traverseRecursive(obj) {
    total = total + obj.value;
    console.log('object value', obj.value);
    if (obj.next != null) {
      traverseRecursive(obj.next);
    }
    return total;
  }
  return total;
}



// iterative version
// function traverse(obj) {
//   console.log('object value', obj.value);
// }
// var car = myObj;
// traverse(car);
// while (car.next != null) {
//   car = car.next;
//   traverse(car);
// }
