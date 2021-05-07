      // const word2 = input[j]; //"tea"
function anagram (input) {
   const result = [];
   
   for (let i = 0; i < input.length; i++) {
      const subArr = [];
      const counter = {};
      
      const word = input[i];
      
      for (let char of word) {
      if (counter[char] === undefined) counter[char] = 0;
      counter[char]++;
      }
         
      for (let j = i + 1; j < input.length; j++) {
         const word2 = input[j]; //"tea"
         const counter2  = {};
         
         for (let char2 of word2){
         if (counter2[char2] === undefined) counter2[char2] = 0;
         counter2[char2]++;
         
         };
       
         const flag = Object.keys(counter).every((char) => {
         // n a t 
        
            return counter[char] === counter2[char];
         
         // 1    n            1       n
         })
         
         if (flag) {
            console.log("here")
            subArr.push(word2);
         }
         
      
      }
      
      
      result.push(subArr);
   }
      
   return result;
}
   
   
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]))

// input: ["eat", "tea", "tan", "ate", "nat", "bat"]
//           ^
// {aet: [eat, tea, ate], 
//  
// }
//
// Time: N * MlogM 
// Space: N (length of the array either k or value it will grow linearly)
// store the original word somewhere => .split("").sort and .join("")
// figure out sorted version 
// add the original word into result-subArr => check if key exists in the hash, push the original word into the value arr
// return the result => Object.values

// ouput: [[eat, tea, ate], [tan, nat], [bat]]


function anagram(arr){
   const group = {}; // O(1)
   arr.forEach((w) => { //O(N)
      const sortedW = w.split("").sort().join(""); //O(MlogM) 
      if (group[sortedW] === undefined) group[sortedW] = []; //O(1)
      group[sortedW].push(w); //O(1)
      
   })
   
   return Object.values(group); //O(N)
}
console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]))
// O(N * MlogM)
// O(N)



/**
 * "cat"
 * "a1b0c1d0e0f.....t1"
 * { a => 0, b => 0, c => 1..........z => 0}
 * 
 */

 function anagram(arr){
   const group = {}; // O(1)
   arr.forEach((w) => { //O(N)
      const sortedW = generateKey(w); //"a1b0c1d0e0f.....t1" // O(M)
      if (group[sortedW] === undefined) group[sortedW] = []; //O(1)
      group[sortedW].push(w); //O(1)
      
   })
   
   return Object.values(group); //O(N)


   function generateKey(word){
      // create a hash with fixed alphabets with counter 0
      // 
   }
}

