'use strict';

const middle = require('../lib/middle');
const build = require('../lib/listbuild');
const arrayForTesting = ['test', 'Bill', 'bud', 'pete', 'susan'];
const arrayForError = ['test'];

let validList = new build();
arrayForTesting.map(x => validList.createHeadNode(x));
let invalidList = new build();
arrayForError.map(x => invalidList.createHeadNode(x));


describe('Middle Module', function() {
  it('should only take in a linked list longer than one node', () =>
    expect(middle(invalidList)).toEqual(null)
  );
  it('should not take a list with only a head', () =>
    expect(middle({ head: null })).toEqual(null)
  );
  it('should take a valid list and return the middle value', () =>
    expect(middle(validList)).toEqual('bud')
  );

});
