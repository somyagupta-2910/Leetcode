// Function to find the maximum depth (height) of a binary tree
var maxDepth = function(root) {
    // Base case: if root is null, return 0 (not null)
    // This represents an empty tree or reaching beyond a leaf node
    if (!root){
        return 0; // Changed from null to 0 since we're calculating depth
    }  

    // Recursively calculate the depth by:
    // 1. Getting max depth of left and right subtrees
    // 2. Taking the larger value using Math.max()
    // 3. Adding 1 to account for the current node
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};