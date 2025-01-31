// Function to find the kth smallest element in a Binary Search Tree (BST)
var kthSmallest = function(root, k) {
    // Variable to store the kth smallest node once found
    let kthNode;

    // Helper function to perform inorder traversal
    // Inorder traversal of BST visits nodes in ascending order
    var inOrder = function(node){
        // Base case: if node is null, return
        if(!node){
            return;
        }

        // Recursively traverse left subtree
        inOrder(node.left);

        // Decrement k and check if we've found kth element
        // When k becomes 1, current node is the kth smallest
        if (k-- === 1){
            return kthNode = node;
        }

        // Recursively traverse right subtree
        inOrder(node.right);
    }

    // Start inorder traversal from root
    inOrder(root);

    // Return the value of kth smallest node
    return kthNode.val;
};