function flattenDictionary(dict) {
   // your code goes here
   
   /*
     1. for loop on keys in dict hash
     2. create variable for an output hash 
     3. if the non-empty key's value is not another hash, 
     store it into a output hash
     4. if it's another hash call this function itself again
   */
//   let res = null;
//   const output = {
//    keys: [],
//    values: []
//    };
 
//   for (let key in dict) {
//      if (typeof dict[key] === 'object'){
//         res = helper(dict) // [key, value]
//         output.keys.push(res[0]);
//         output.values.push(res[1])
//       } else {
//          output.keys.push(key);
//          output.values.push(dict[key])
         
//       }
//    }
   const output = {}
   helper("", dict, output)
   // start with empty string
   return output;
} 

function helper(initialKey, dict, output){
   // make an initialKey to keep the previous key
   for (let key in dict){
      let value = dict[key];
      if (value instanceof Object) {
         
         if (initialKey === null || initialKey === ""){
            helper(key, value, output);
            
         }else {
            helper(initialKey + '.' + key, value, output)
         }
      } else {
         if (initialKey === null || initialKey === ""){
            output[key] = dict[key]
         }else{
            if (key === ""){
               output[initialKey] = dict[key]
            }else{
               output[initialKey + '.' + key] = dict[key]
            }
         }
      }
   }
};

const dict = {
   "Key1" : "1",
   "Key2" : {
         "a" : "2",
         "b" : "3",
         "c" : {
            "d" : "3",
            "e" : {
               "" : "1"
            }
         }
   }
}

// const dict = {"a":{"b":{"c":{"d":{"e":{"f":{"":"awesome"}}}}}}}

const output =  {
      "Key1" : "1",
      "Key2.a" : "2",
      "Key2.b" : "3",
      "Key2.c.d" : "3",
      "Key2.c.e" : "1"
}

console.log(flattenDictionary(dict));
// console.log(helper(dict));


