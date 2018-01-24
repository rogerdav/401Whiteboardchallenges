'use strict';

const linkedList = require('../lib/ll_test');


let circTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}}
  , nonTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}};

circTest.head.next.next.next.next = circTest.head.next;

describe('LL module', function() {

  it('should take one argument', (done) => {
    expect(linkedList.testCircle({}, {})).toBe(null);
    done();
  });

  it('should take an object as an  argument', (done) => {
    expect(linkedList.testCircle('pete')).toBe(null);
    done();
  });
  it('The LL head should not be empty', (done) => {
    expect(linkedList.testCircle({})).toBe(null);
    done();
  });
  it('should take return correct value based on correct input', (done) => {
    expect(linkedList.testCircle(circTest)).toEqual(true);
    expect(linkedList.testCircle(nonTest)).toEqual(false);
    done();

  });

});
