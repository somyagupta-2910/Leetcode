// Function to perform level-order traversal of a binary tree
// Returns an array of arrays, where each inner array contains node values at that level
var levelOrder = function(root) {
    // If tree is empty, return empty array
    if(!root){
        return [];
    }

    // Initialize result array to store levels and queue with root node
    let result = [];
    let queue = [root];

    // Process nodes level by level until queue is empty
    while(queue.length > 0){
        // Get number of nodes at current level
        let levelSize = queue.length;
        // Array to store values of nodes at current level
        let currentLevel = [];

        // Process all nodes at current level
        for(let i=0; i<levelSize; i++){
            // Remove first node from queue
            let node = queue.shift();
            // Add its value to current level array
            currentLevel.push(node.val);
            // Add left child to queue if it exists
            if(node.left){
                queue.push(node.left);
            }
            // Add right child to queue if it exists
            if(node.right){
                queue.push(node.right);
            }
        }

        // Add current level array to result
        result.push(currentLevel);
    }

    // Return array containing all levels
    return result;
};