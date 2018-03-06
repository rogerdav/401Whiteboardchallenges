const solution = require('./lib/solution');
const Tree = require('./lib/tree');
const TreeNode = require('./lib/node');




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
binaryTreeTwo.root =two;
binaryTreeOne.root = one;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

console.log('binary Tree 1', binaryTreeOne );
console.log('binary Tree 2', binaryTreeTwo );
console.log('solution      ', solution(binaryTreeOne, binaryTreeOne));




