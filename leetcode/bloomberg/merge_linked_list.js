/*

https://leetcode.com/problems/merge-two-sorted-lists/
 * two Linked List
   merge them
   sorted

   1 - 2 - 4
   1 - 3 - 4
   => 1 - 1 - 2 - 3 - 4 - 4 

   input l1, 12 (two root nodes)
   output merged linked list
   edgecases inputs can be null, 
   inputs are already sorted 
   length can be different

   1 - 2 - 4 
   1 - 3 - 4 - 5

   class Node
      constructor(val){
         this.next = null;
         this.val = val;
      }
   }

   1. traverse tree 
      - while 
      - currN1 => track the nodes in the linked List rootN1
      - currN2 (2nd linked list) : rootN2
      - instanciate class output = new Node() //!! WHAT DO YOU THINK ABOUT THIS?
      - compare two nodes's values N1 >= N2 
      instanciate class output = new Node(N2.val); output.next = N1.val;
      - currN1 = currN1.next;
      - currN2 = currN2.next;

      1st input 1 - 2 - 4 
      2nd input 1 - 3 - 4 - 5 - 6- 7
       dummy null - 1 - 1
      output 1 - 1 - 2 - 3 - 4 - 4 output.next = currN2.next
      currN3 = output.next

      1. helper to figure out which is longer
      2. another if currN1.next === null && currN2 !== null; 
         update variable currN1 = currN2.next
            - output node 
      3. output.next = currN2.next //Ask here if I should code here
 * (10-15min): mention my pseudo code
 *  
 */
//tree => stack / queue
//Linked List => centinal node

function mergeLinkedLists (l1, l2){
   //cover edge cases
   if (!l1 && !l2) return null;
   if (!l1) {
      return l2;
   } else if (!l2) {
      return l1;
   }

   //both exists
   let currN1 = l1;
   let currN2 = l2;
   let dummy = new Node(null); // null - 1- 1 - 2
   let currN3 = dummy 
  while (currN1 && currN2){

     if (currN1.val >= currN2.val){
        currN3.next = currN2;
        currN3.next.next = currN1
        
     } else {
        currN3.next = currN1;
        currN3.next.next = currN2;
     }

     currN1 = currN1.next;
     currN2 = currN2.next;
     currN3 = currN3.next.next;

  }

  if (!currN1) {
     currN3.next = currN2.next;
  } else if (!currN2){
     currN3.next = currN1.next;
  }
  
  return dummy;
}

/**.//#endregion
 * 1st input 1 - 2 - 4 
  2nd input 1 - 3 - 4 - 5 - 6- 7
  dummy null - 1 - 1
 */