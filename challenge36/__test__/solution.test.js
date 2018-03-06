'use strict';
const  solution = require('../lib/solution');
const Tree = require('../lib/tree');
const TreeNode = require('../lib/node');
require('jest');


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);


let binaryTreeOne = new Tree();
let binaryTreeTwo = new Tree();
binaryTreeTwo.root = two;
binaryTreeOne.root = one;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;


describe('Binary tree comparison', () => {

  it('should take two arguments', () => {
    expect(solution('a')).toBe(null);
  });
  it('should return null if not a tree as parameter', () => {
    expect(solution(2,4)).toBe(null);
  });

  it('should return a boolean value', () => {
    expect(solution(binaryTreeOne, binaryTreeTwo)).toBe(false);
    
  });
  it('should return true on correct parameters passed', () => {
    expect(solution(binaryTreeOne, binaryTreeOne)).toBe(true);
  });

});