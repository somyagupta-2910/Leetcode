// Function to find the lowest common ancestor (LCA) of two nodes in a Binary Search Tree
// The LCA is the lowest node that has both p and q as descendants
var lowestCommonAncestor = function(root, p, q) {
    // Start from root node
    let curr = root;

    // Keep traversing until we find LCA
    while(curr){
        // If both nodes are smaller than current node,
        // LCA must be in left subtree
        if(p.val < curr.val && q.val < curr.val){
            curr = curr.left;
        }
        // If both nodes are larger than current node,
        // LCA must be in right subtree
        else if(p.val > curr.val && q.val > curr.val){
            curr = curr.right;
        }
        // If one node is smaller and other is larger (or equal),
        // current node is the LCA
        else{
            return curr;
        }
    }
};