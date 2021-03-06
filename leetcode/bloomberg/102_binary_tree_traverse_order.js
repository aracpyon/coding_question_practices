//https://leetcode.com/problems/binary-tree-level-order-traversal/


// BT 
// Print each node’value in the tree 
// Left right each level

// [[3],[9,20],[15,7]]
// 	  5
//     10    12
// 12    3     7
// [[5], [10, 12], [12, 3, 7]]
// Level: 
// Null input => []
// BT BSF manner 
// Queue = [root]
// Children = [root.left, root.right]


//dfs manner

Function levelOrderTraversal(root){
	Const output = [];
	Function helper(node, level=0){
		If (!node) return;
		helper(node.left, level + 1);
		if(!output[level]) output[level] = [];
		output[level].push(node.val);
		helper(node.right, level + 1);
	
	}
	Return output;
}






//BFS manner

function levelOrderTraversal(root){
	if(!root) return [];
	let queue = [root];

	let output = [];
	while(queue.length){
		let len = queue.length;
		let level = [];
		for(let i = 0; i < len; i++){
			let node = queue.shift();
			level.push(node.val);
			if(node.left) queue.push(node.left);
			if(node.right) queue.push(node.right);
      }
      output.push(level);
   }

return output;
}

