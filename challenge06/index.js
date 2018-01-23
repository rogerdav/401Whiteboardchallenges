'use strict';


exports.loop = function(count, callback) {
  if(arguments[0] != 'number' || arguments[1] != 'function' || arguments[0] < 1 || arguments.lenths < 2) return null;

  if (count === 0 ) return;
  callback();
  exports.loop(count - 1, callback);
};

let count = 5;


exports.loop(count, function(){
  console.log('this is now');
});
