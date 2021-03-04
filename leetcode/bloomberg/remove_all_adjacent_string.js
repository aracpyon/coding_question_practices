function removeAlladjacentDups(s){
   /*
   1. brute force && replace characters
   
   */
//   let flag = true;
//       while (flag){
//           flag = false;
//           for (let i= 0; i < S.length - 1; i++){
//               if (S[i] === S[i+1]){
//                   S = S.slice(0,i) + S.slice(i+2);
//                   flag = true;
//                   break;
//               }
              
//           }
//       }
      
//       return S;
   /**
    * 
    * 2. stack 
    * 
    * stack = [];
    * 
    * abbaca
    * ^
    */
   
   const stack = [];

   for (let char of s){
      if (char === stack.slice(-1)[0]){
         stack.pop();
      } else {
         stack.push(char);
      }
   }

   return stack.join("");
}