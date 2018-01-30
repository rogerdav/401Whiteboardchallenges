'use strict';


const Stack = require('./stack');

module.exports = class {

  constructor() {
    this.stackA = new Stack;
    this.stackB = new Stack;

  }

  enQueue(val) {

    if(!val) return 'Need to pass a value!';
    this.stackA.push(val);
    return this.stackA.top.val;
  }


  deQueue() {
    if(this.stackA.size === 1) return 'Queue empty cannot remove anything';
    while(this.stackA.size > 1) {
      let int = this.stackA.pop();
      this.stackB.push(int.val);
    }
    let retValue = this.stackA.pop();

    while(this.stackB.size >= 1) {
      let int = this.stackB.pop();
      this.stackA.push(int.val);
    }

    return retValue.val;
  }
};
