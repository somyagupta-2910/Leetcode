// Function to check if two binary trees are identical
var isSameTree = function(p, q) {
    // Base case: if both nodes are null, trees are identical
    if (!p && !q){
        return true;
    }
    // If one node is null or values don't match, trees are different
    if(!p || !q || p.val != q.val){
        return false;
    }

    // Recursively check if left and right subtrees are identical
    // Both left and right subtrees must match for trees to be identical
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};