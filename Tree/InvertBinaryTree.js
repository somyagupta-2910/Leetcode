// Function to invert a binary tree by swapping left and right children recursively
var invertTree = function(root) {
    // Base case: if root is null, return null
    if (!root){
        return null;
    }

    // Store the left subtree in a temporary variable
    const temp = root.left;
    // Set root's left child to right child
    root.left = root.right;
    // Set root's right child to original left child (from temp)
    root.right = temp;

    // Recursively invert the left subtree
    invertTree(root.left);
    // Recursively invert the right subtree
    invertTree(root.right);

    // Return the inverted tree
    return root;
};