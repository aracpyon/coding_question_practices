class ListNode {
	constructor(val, nextNode){
		this.val = val;
		this.next= nextNode || null;
   }
}

function createList(arr){
	const head = new ListNode(arr[0]); 
   let currNode = head;

	for (let i = 1; i < arr.length; i ++){
	let nextNode = new ListNode(arr[i]); //5
		currNode.next = nextNode;	
		currNode = currNode.next;
}

   return head;
}

function printList(head) {
	let currNode = head; 
	
	while (currNode) {
		console.log(currNode.val);
		currNode = currNode.next; 
   }
}


const head = createList([1, 2, 3, 4, 5]);
printList(head);

// 1>2>3>4>5
//         ^       v
//         8<7<6

function hasCycle(head){
	let currNode = head; 
	const record = new Set();
	
   while (currNode) {
      if (record.has(currNode.val)) return true;
         record.add(currNode.val);
         currNode = currNode.next; 
   }	

   return false; //it’s a linkedList
}

// Time O(n) 
// Space O(n)

// 1>1>1>1>1
//         ^       v
//         1<1<1

// They are different values in memory
// Tortoise and hare

function hasCycle2(head){
	let slow = head;
	let fast = head;
	
   while (fast) {
      slow = slow.next;
      fast =  fast.next ? fast.next.next : null;
   if (slow === fast) return true;
   }	

   return false; //it’s a linkedList
}

// Time O(n) 
// Space O(1)
