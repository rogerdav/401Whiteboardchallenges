'use strict';

const find = require('../lib/find');
let testList = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}};





describe('find module', function() {

  it('should have valid arguments', (done) => {
    expect(find(testList)).toBe(null);
    expect(find('testList', 'test')).toBe(null);
    done();
  });

  it('should return null if offset is greater than length of list', (done) => {
    expect(find(testList,9)).toBe(null);
    done();
  });
  it('should validate answer', (done) => {
    expect(find(testList,1)).toEqual({ val: 3, next: { val: 4, next: null }});
    done();
  });

});
