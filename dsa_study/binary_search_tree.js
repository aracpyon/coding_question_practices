class Node {
   constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
   }
}



class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(value){
      // by inserting node, build BST
      // const node = new Node(value);
      // this.root ? this.root : this.root = node;
      // let currentNode = this.root;
     
      // while (currentNode !== node){
      //    if (currentNode.value < node.value){
      //       currentNode.right ? currentNode = currentNode.right : currentNode.right = node; 
            
      //    } else {
      //       currentNode.left ? currentNode = currentNode.left : currentNode.left = node; 
      //    }
      // }

      // return currentNode; 
      const node = new Node(value);
      if (!this.root) {
         this.root = node;
         debugger
         return this;
      }
      let currentNode = this.root;

      while (true){
         // debugger
         if (currentNode.value < node.value){
            // debugger
            if (!currentNode.right) {
               currentNode.right = node;
               return this;
            }
            currentNode = currentNode.right
         } else{
            // debugger
            if (currentNode.left === null){
               // debugger
               currentNode.left = node;
               return this;
            }
            currentNode = currentNode.right
         }
      }

   }

   lookup(value){

      let currentNode = this.root;

      while (currentNode){
         if (currentNode.value === value) return currentNode;

         if (currentNode.value < value){
            currentNode = currentNode.right
         } else {
            currentNode = currentNode.left;
         }
      }

      return -1;
   }
}


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)

// console.log(tree)
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


