'use strict';
const Tree = require('../lib/tree');

module.exports = (bstOne, bstTwo) => {
 
  // console.log('arguments', arguments);
  // if (arguments.length !== 2) return null;
  if(typeof bstOne != 'object' || typeof bstTwo != 'object') return null;
  let one = bstOne.root;
  let two = bstTwo.root;


  const visit = function(one, two) {

    if(one === null && two === null) return true;
    if(one === null || two === null) return false;
    return visit(one.left, two.left) && visit(one.right, two.right);

  };
  return visit(one, two);
};


