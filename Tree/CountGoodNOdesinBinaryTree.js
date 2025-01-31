// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Function to count the number of "good" nodes in a binary tree
// A node is "good" if the path from root to this node has no nodes with value greater than current node
var goodNodes = function(root) {
    // Helper DFS function that tracks maximum value seen so far in the path
    var dfs = function(node, maxVal){
        // Base case: if node is null, return 0
        if (!node){
            return 0;
        }
        // If current node value is >= max value seen so far, it's a good node (count as 1)
        // Otherwise it's not good (count as 0)
        let res = (node.val >= maxVal) ? 1 : 0;
        // Update maximum value seen so far for children nodes
        maxVal = Math.max(maxVal, node.val);

        // Recursively count good nodes in left and right subtrees
        res += dfs(node.left, maxVal);
        res+= dfs(node.right, maxVal);

        // Return total count of good nodes in this subtree
        return res;
    }

    // Start DFS from root, using root's value as initial maximum
    return dfs(root, root.val);
};