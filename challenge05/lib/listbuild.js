'use strict';

const Nb = require('./nodebuild');

class NewList {
  constructor() {
    this.head = null;
  }

  createHeadNode(value) {
    let newNode = new Nb(value);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
}

module.exports = NewList;
