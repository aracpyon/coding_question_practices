function nodeDepth
(node, ds = 0){ //2
	if (!node) return 0; 
	//you don't want to return ds here or you will get twice ex. 2 + 2 
	
	const res = nodeDepth
   (node.left, ds + 1) 
   const res2 = nodeDepth(node.right, ds + 1);
	// current depth + left + right
   debugger
   return ds + res + res2;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);

nodeDepth(root);