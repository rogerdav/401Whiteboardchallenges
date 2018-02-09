'use strict';




class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


const NewList = module.exports = class {

  constructor() {
    this.head = null;
  }

  createHeadNode(value) {
    if(!value) return null;
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

};