'use strict';

const Queue = require('../lib/queue');
require ('jest');


describe('Queue Module', function() {

  beforeEach(() => this.queue = new Queue());


  describe('Default Properties', () =>{

    it('should create a new instance of a Queue', () =>{
      expect(this.queue).toBeInstanceOf(Queue);
    });
    it('should have a default val 0 assigned to the size property', () => {
      expect(this.queue.stackA.size).toEqual(0);
    });

  });

  describe('enQueue', () =>{

    it('should create a new placeholder in queue', () =>{
      expect(this.queue.enQueue(1)).toEqual(1);
    });
    it('should return a size of 1', () =>{
      this.queue.enQueue(1);
      expect(this.queue.stackA.size).toEqual(1);
    });
    it('Should return an Error if no value is passed', () =>{
      expect(this.queue.enQueue()).toBe('Need to pass a value!');
    });

  });
  describe('deQueue', () =>{

    it('should remove a placeholder in the front of the queue', () =>{
      this.queue.enQueue(1);
      this.queue.enQueue(2);
      this.queue.enQueue(25);
      expect(this.queue.deQueue()).toEqual(1);

    });
    it('should check that the size is correct after removal', () =>{
      this.queue.enQueue(1);
      this.queue.enQueue(2);
      this.queue.enQueue(25);
      this.queue.deQueue();
      expect(this.queue.stackA.size).toEqual(2);

    });

    it('should check that queue is not empty', () =>{
      this.queue.enQueue(1);
      this.queue.deQueue();
      expect(this.queue.deQueue()).toBe('Queue empty cannot remove anything');

    });
  });



});
