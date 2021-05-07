/** 
 * String Reduction
Have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted.

For example: if str is "cab", then "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
Examples
Input: "abcabc"
Output: 2
Input: "cccc"
Output: 4
*/



function StringReduction(str) { 
   /**
    * input: str with only char a, b, c
    * output: length of str
    * 
    * ex. "cab" => bb => 2
    * ex. "bcab" => "aab" => "ac" => "b" => 1
    * ex. "abcabc" => ccabc => cbbc => aa => 2
    * "a" => 1
    *  
    * 
    * Data structure? 
    * 1. stack? - arr
    * [a,c]
    * "bcab"
    *     ^
    * if the next char is different with last, 
    *  - pop the last, insert one 
    * if the next char is the same with last, 
    *  - insert the char, move pointer,
    * 
    * repeat this until stack has the same charaters. 
    * => recursion? or while true
    * => basecase will be 
    * 
    *  
    * 
    * {
    *  ab: c
    *  ac: b
    *  ba: c
    *  ca: b
    *  cb: a
    *  bc: a
    * }
    * 
    */
   // code goes here  
 
   const rule = {
     "ab": "c",
     "ac": "b",
     "ba": "c",
     "ca": "b",
     "cb": "a",
     "bc": "a"
   }
   
   return reduction(str);
   
   function reduction(str){
     const stack = [str[0]]; 
   
     for (let i = 1; i < str.length; i++){ 
       const char1 = stack.pop(); 
       const char2 = str[i] 
       
       const combo = char1 + char2; 
       if ( char1 === char2 ){
         stack.push(char1);
         stack.push(char2);
       } else {
         stack.push(rule[combo])
       }
     }
     str = stack.join("");
    
     if (stack.every(char => char === stack[0])) return str.length;
     return reduction(str)
   } 
   
 }
    
 // keep this function call here 
 console.log(StringReduction(readline()));