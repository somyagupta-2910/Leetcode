// Function to get the right side view of a binary tree
// Returns an array of values that would be visible from the right side
var rightSideView = function (root) 
{
    // If tree is empty, return empty array
    if (!root) return [];
    
    // Initialize result array to store right-most values
    let result = [];
    // Initialize queue for level-order traversal
    let queue = [];
    queue.push(root)

    // Process nodes level by level until queue is empty
    while (queue.length) {
        // Array to store values at current level
        let values = []
        // Get number of nodes at current level
        let n = queue.length;

        // Process all nodes at current level
        for (let i = 0; i < n; i++) {
            // Remove first node from queue
            let node = queue.shift();
            if (root) {
                // Add left and right children to queue if they exist
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                // Add current node's value to level values
                values.push(node.val);
            }
        }
        console.log(values)
        // Add right-most value from current level to result
        result.push(values.pop());
    }

    // Return array of right-side visible values
    return result;
};