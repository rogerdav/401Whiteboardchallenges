# Whiteboard Challenge 2
### Write a function that takes in a numeric array and returns an object literal with two properties: - The highest and second highest value in the array

### Write at least four tests for this function - Your tests should cover basic functionality - Consider any edge cases for your function, e.g. will your function still operate on an array of floating point integers?



Solution.js exports a Fn highSecond.
highSecond takes one parameter, a numeric array. It checks for a few constraints,

1. It checks to see that the argument is indeed and array.
2. It checks that there are at least 2 elements in the array once duplicates have been removed.
3. It checks that there are no non-numbers in the array.

Fn highSecond sorts the array from smallest to largest number. It returns in the form of an object the highest and second_highest number.

### Testing

To be able to run the tests the User needs to type
    **$ npm i**

this will install the required packages

to run the actual tests the user should type
    **$ npm test**
