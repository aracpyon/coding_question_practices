/**
 * @param {string} s
 * @return {number}
 
 input: string
 output: index of FIRST non-repeating letter
 edgecase: no empty string 
 assumptions: only lowercase English letters
 return 0 when there is no result
 
 1. brute force way 
 - Using two for loops, the first for loop will iterate from the first letter in the string, the second loop will iterate from the second letter to avoid comparing itself
 - Time complexity will be O(n**2)
 
 2. data structure - Hash (using more spaces )
 - var nonRepeat of empty Hash to store a letter as key and index as value
 - var repeated of empty Hash to store repeated letter 
 - for loop to iterate the string 
 - Store letter in repeated hash. store letter as key and index as value to nonRepeat hash. if the next letter exists in repeated hash, delete the letter from nonRepeat. 
 - Eventually the nonRepeat hash will have all single letters with its index. 
 - return the min number from the nonRepeat hash
 if hash is empty return -1. 
 - Time Complexity will be O(N) by average
 
 "loveleetcode"
  ^
 */
var firstUniqChar = function(s) {
   const nonRepeat = {};
   const repeated = {}
   let letter = '';
   for (let i = 0; i < s.length; i++){
       letter = s[i]
       if (repeated[letter] === true) {
           delete nonRepeat[letter]   
       }else{
           nonRepeat[letter] = i; 
           repeated[letter] = true; 
       }
       
   }
   debugger
   const values = Object.values(nonRepeat);
   if (values.length === 0) {
       return -1;
   }else{
       return Math.min(...values);
   }
};