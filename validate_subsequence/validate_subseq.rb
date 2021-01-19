# function isValidSubsequence(array, sequence) {
#    // Write your code here.
    
#     /*
#        arr = [5, 1, 22, 25, 6, -1, 8, 10]
#                                       ^
#        sequence = [1, 6, -1, 10 ]
#                                    ^
       
#        1. Make two pointers; arrIdx, seqIdx
#        2. While loop with the index counters of both array and sequence 
#        3. if condition to compare the each element on those pointers are the same
#        4. If they are the same, increment both counters
#        5. If they are NOT the same, increment the arr counter 
#        6. Compare the counter matches with the length sequence. 
       
#     */
#     let arrIdx = 0;
#     let seqIdx = 0;
    
#     while (arrIdx < array.length && seqIdx < sequence.length){
#        if (array[arrIdx] === sequence[seqIdx]) seqIdx ++;
#        arrIdx++;
#     }
#     return seqIdx === sequence.length;
#  }

def isValidSubsequence(arr, seq)
   arrIdx = 0
   seqIdx = 0

   while (arrIdx < arr.length && seqIdx < seq.length)
      seqIdx += 1 if (arr[arrIdx] == seq[seqIdx]) 
      arrIdx += 1
   end

   seq.length == seqIdx
end

p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]) #true
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10])
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6])
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10])
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10])
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [25])
p isValidSubsequence([1, 1, 1, 1, 1, 1, 1], [1, 1, 1])# true
p isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])# false