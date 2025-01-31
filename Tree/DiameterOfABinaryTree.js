// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function(root) {
    // Helper function that calculates both the height and updates max diameter
    const diameter = function (node, res){
        // Base case: if node is null, height is 0
        if(!node){
            return 0;
        }

        // Recursively calculate heights of left and right subtrees
        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        // Update the maximum diameter found so far
        // The diameter through current node is left height + right height
        res[0] = Math.max(res[0], left + right);

        // Return height of current node's subtree
        // Height is 1 (for current node) + max of left/right heights
        return 1 + Math.max(left, right);
    }

    // Array to store the maximum diameter found
    // Using array since we need to modify it in recursive calls
    const res = [0];

    // Calculate diameter starting from root
    diameter(root, res);

    // Return the maximum diameter found
    return res[0];
};