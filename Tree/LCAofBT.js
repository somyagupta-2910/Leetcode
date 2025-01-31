// Function to find the lowest common ancestor (LCA) of two nodes in a binary tree
// The LCA is the lowest node that has both p and q as descendants (or is itself p or q)
var lowestCommonAncestor = function(root, p, q) {
    // Base cases: if root is null or root is one of the nodes we're looking for,
    // return root as it could be the LCA
    if(!root || root === p || root === q){
        return root;
    }

    // Recursively search for p and q in left and right subtrees
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // If both left and right returned a node, current node is the LCA
    // This means p and q are in different subtrees of current node
    if(left && right){
        return root;
    }

    // If one side returned null, return the non-null value
    // This handles cases where p and q are in the same subtree
    // or neither p nor q was found in a subtree
    return left || right;
};