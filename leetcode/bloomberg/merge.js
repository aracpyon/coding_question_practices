// var merge = function(intervals) {
   // is intervals always ordered?
   // can intervals be empty? => no
   // intervals = [[1,3],[2,6],[8,10],[15,18]]
   /*
   1 --- 3
      2 ------ 6
      
   start = intervals[0][0]
   end = intervals[0][1]
   
   // for loop starting from the 2nd interval
   //Whenever there is overlap
       - if condition start <= x && x <= end
       - end <= y && y <= end
       - start = start
       - end = y;
       - store it into output array .push([start, end])
       - no overlap, 
           - output.push([start, end])
           - start = x
           - end = y
   //return output
           
   */
   
   
//    const outputArr = [];
//    let i = 0;
   
//   while (i < intervals.length){
//        let [start, end] = intervals[i];
//        debugger
//        if ( intervals[i + 1] === undefined ){
//           debugger
//            outputArr.push([start, end]);
//            return;
//        }
//        let [nextS, nextE] = intervals[i + 1];
      
//        if ((start <= nextS && nextS <= end) || (start <= nextE && nextE <=             end)) {
//            outputArr.push([start, nextE])
//            debugger
//            // [start, end] = intervals[i+2];
//            i += 2 //skip to the next following
//        } else {
//            outputArr.push([start, end]);
//            debugger
//            // start = nextS;
//            // end = nextE;
//            //skip to the next 
//            i++;
//        }
       
       
//    }
//    return outputArr;
   
   
// };

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const intervals2 = [[1,4],[0,2],[3,5]] // [[0,5]]


//solution

function merge(intervals) {
   if (!intervals.length) return intervals;
   debugger
   intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
   debugger
   let prev = intervals[0]
   let res = [prev]
   for (let curr of intervals) {
      debugger
     if (curr[0] <= prev[1]) {
        debugger
       prev[1] = Math.max(prev[1], curr[1])
     } else {
        debugger
       res.push(curr)
       prev = curr
     }
   }
   debugger
   return res;
}