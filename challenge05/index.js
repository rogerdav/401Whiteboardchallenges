'use strict';
const build = require('./lib/listbuild');
const middle = require('./lib/middle');

const arrayForTesting = ['test', 'Bill', 'bud', 'pete', 'susan','tim'];
// const arraytestforerror = ['erer'];
let testlist = new build();
// arraytestforerror.map(x => testlist.createHeadNode(x));
arrayForTesting.map(x => testlist.createHeadNode(x));
console.log(middle(testlist));
// console.log('error test list', testlist);
