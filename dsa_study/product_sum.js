function productSum(array, depth = 1) {
   
    let sum = 0;
    debugger
    for (const ele of array){
       debugger
       if (Array.isArray(ele) ) {
          const newD = depth + 1
          sum += ( newD * productSum(ele, newD));
       }else {
          debugger
          sum += ele;
       }
    }
    
    return sum;
    
 }
 

 //or 

 function productSum(array, depth = 1) {
   
   let sum = 0;
   debugger
   for (const ele of array){
      debugger
      if (Array.isArray(ele) ) {
         sum += productSum(ele, depth + 1);
      }else {
         debugger
         sum += ele;
      }
   }
   
   return depth * sum;
   
}
 const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

