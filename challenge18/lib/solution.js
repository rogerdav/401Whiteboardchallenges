'use strict';

// 



module.exports = function(tree) {
  let tempNode = tree.root;

  tree.breadthFirst(node => {
    if(node.val.children.length > tempNode.children.length) {
      tempNode = node.val;
    }

  });

  return tempNode;

};


