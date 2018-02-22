#Whiteboard Challenge 29

Write a method to sort an array of strings so that all the anagrams are next to each other

I have hashed each string in the Array, pushed the string with the corresponding hash-value into an object and the sorted that new array, by value. Then returned the springs it the retyrned array in the new sorted order.

example:

sortAnagrams('acre race care act cat tac') =>

{
  acre : {acre, race, care},
  act: {act, cat, tac},
}
Once all the words have been grouped into lists by anagram we can put them back into the array.

## Bog O = O(n).

##Installing
All that is necessary is to type npm install
That will install the required dependencies.

##Testing
To run the automated test suite,
```
npm test
```
##Authors
Roger Davenport - RND
License
This project is licensed under the MIT License -

##Acknowledgments
Scott Schmidt
Google
