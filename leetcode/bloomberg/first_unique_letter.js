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
 - Time complexity will be O(n)
 
 2. Algorithm - bsearch w/ 2 pointers => this would not work because this is string, not numbers 
 
 3. data structure - Hash 
 - var of empty Hash to store a letter as key and num of letters as value
 - var of tracking a letter
 - var of tracking the index of the single letter 
 - for loop to iterate the string 
 - if same letter key, increment the counter, if another single letter comes up, return the existing single letter in the hash before saving the second single letter in hash
 - Time Complexity will be O(N)
 
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