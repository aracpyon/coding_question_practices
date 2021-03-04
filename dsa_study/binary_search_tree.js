class Node {
   constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
   }
}

// Binary Search Tree is a special type of binary tree. 
// To be a binary tree, you only need two children at most
// To be a binary search tree, you have couple rules that first, 
//the values of child nodes on left sides are lesser than the node
// the values of child nodes on right sides are greater than the node

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

   remove(){
      // you don't only need to track of currentN, you also need to track the parentN

      let currN = this.root;
      let parN = null;

      while (currN){
         if (value < currN.value){
            parN = currN;
            currN = currN.right;
         } else if (value > currN.value){
            parN = currN;
            currN = currN.left;
         } else {
            //currN.value === value!
            //usually, to replace this currN, you have to find the min child from the right side because you need a child that is bigger than currN but less than res of the right side children. 
            // so probably you would need getMinChild helper
            
            //option1. no right child! (no replacement)
            if (currN.right === null){
               if (parN === null){
                  //currN is the root node
                  this.root = currN.left; 
                  //because there is no right child, left should be the root node
               } else {
                  //if currN < parent(ex. 1 > 14), make curr's left child a left child of curr
                  if (currN.value < parN.value){
                     parN.left = currN.left;

                     //if currN > parent (Ex 14 < 1), make cur's left child a right child of parent
                  } else if (currN.value > parN.value){
                     parN.right = currN.left;
                  }
               }
               
               //option2. right child that doesn't have a left child
            } else if (currN.right.left === null){
               currN.right.left = currN.left;
               if (parN === null){
                  this.root = currN.left;
               } else {
                  if (currN.value < parN.value){
                     parN.left = currN.right;
                  } else if (currN.value > parN.value){
                     parN.right = currN.right;
                  }
               }


               //option3. right child that has a left child
            } else if (currN.right.left){
               let leftMinParent = currN.right;
               let leftMin = currN.right.left;
               while (leftMin.left !== null){
                  leftMinParent = leftMin;
                  leftMin = leftMin.left;
               }
               leftMinParent.left = leftMin.right; 
               leftMin.left = currN.left;
               leftMin.right = currN.right;

               if (parN === null){
                  this.root = leftMin;
               }else {
                  if (currN.value < parN){
                     parN.left = leftMost;
                  }else if (currN.value > parN){
                     parN.right = leftMost;
                  }
               }
               
            }

            return true;
         }
      }
     
   }

   getMinChild(parentN){
      let currN = parentN;
      while (currN.left !== null){
         currN = currN.left;
      }
      return currN;
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


