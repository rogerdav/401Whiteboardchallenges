'use strict';
var array = [];

class BinaryTree{
  constructor(root=null){
    this.root = root;
  }

  inOrderTraversal(){
    if(!this.root)
      return null;
    this._inOrderTraversal(this.root);
    return array;
  }

  _inOrderTraversal(root){

    if(root === null)
      return null;
    this._inOrderTraversal(root.left);
    array.push(root.value);
    this._inOrderTraversal(root.right);
  }
}


module.exports = BinaryTree;