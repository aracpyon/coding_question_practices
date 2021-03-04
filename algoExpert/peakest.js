function longestPeak(array) {
   // Write your code here.
    let maxPeak = 0;
    let currPeak = 0;
    let peak = false; 
    let increasing = false;
    //counting only starts when this flag is true;
    
    for (let i = 0; i < array.length; i++ ){

      // const isPeak = array[i-1] < array[i] && array[i] > array[i + 1];

       if (array[i] == array[i+1]){
          if ((peak && !increasing) && (currPeak > maxPeak)){
             debugger
             maxPeak = currPeak
            }  
            debugger
          currPeak = 0;
          peak = false;
          increasing = false;
       } else if (array[i] < array[i+1]){
          debugger
          if (!peak && !increasing){
             //starting fresh
             debugger
             currPeak++;
             peak = true;
             increasing = true;
          } else if (peak && increasing){
             //peak is increasing
             debugger
             currPeak++;
          } else if (peak && !increasing){
             debugger
             currPeak++;
             //old peak is done, new peak is about to start
             if (currPeak > maxPeak) {
                debugger
                maxPeak = currPeak;
             }
             currPeak = 1
             increasing = true;
          }
       } else if (array[i] > array[i+1]){
          // when number is decreasing
          
          debugger
          if (!peak && !increasing) {
             debugger
             currPeak = 0;
          }else if (peak && increasing){
             debugger
             increasing = false;
             currPeak++;
          } else if (peak && !increasing){
             debugger
             currPeak++;
          }
       } else if (array[i+1] === undefined && peak){
          currPeak++;
          if (currPeak > maxPeak) maxPeak = currPeak;
       }
    }
    debugger
   //  if (currPeak > maxPeak) maxPeak = currPeak;

    return maxPeak;
 }


 function longestPeak(arr){
    
 }

 const array1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]; //6

 const array2 = [1, 3, 2];

