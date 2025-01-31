// Function to validate if a binary tree is a valid Binary Search Tree (BST)
var isValidBST = function(root) {
    // Helper function that checks if a node's value is within valid range
    // node: current node being checked
    // left: minimum allowed value for current node
    // right: maximum allowed value for current node
    var isBST = function(node, left, right){
        // Base case: empty node is considered valid
        if (!node){
            return true;
        }
        // Check if current node's value is within valid range
        // For BST, node value must be greater than left bound and less than right bound
        if(!(node.val<right && node.val > left)){
            return false;
        }

        // Recursively validate left and right subtrees
        // For left subtree: update right bound to current node's value
        // For right subtree: update left bound to current node's value
        return (isBST(node.left, left, node.val) && isBST(node.right, node.val, right))
    }

    // Start validation from root with initial bounds of -Infinity and Infinity
    return isBST(root, -Infinity, Infinity);
};