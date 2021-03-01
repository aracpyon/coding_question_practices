class LinkedList {
   constructor(value) {
     this.value = value;
     this.next = null;
   }
 }
 
 function removeDuplicatesFromLinkedList(linkedList) {
   // Write your code here.
    
    let currN = linkedList; // start with root
    
    while (currN !== null){
       let nextN = currN.next;
       if ((nextN !== null) && (currN.value === nextN.value)) {
          nextN = nextN.next;
       }
       currN.next = nextN;
       currN = currN.next;
    }
    
   return linkedList;
 }