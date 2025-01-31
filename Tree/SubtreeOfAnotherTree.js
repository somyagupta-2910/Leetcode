// Helper function to check if two trees are identical
var isSameTree = function (s, t){
    // Base case: if both nodes are null, trees are identical
    if(!s && !t){
        return true;
    }

    // If one node is null or values don't match, trees are different
    if (!s || !t || s.val != t.val){
        return false;
    }

    // Recursively check if left and right subtrees are identical
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

// Function to check if tree t is a subtree of tree s
var isSubtree = function(root, subRoot) {
    // If main tree is empty, it cannot contain a subtree
    if (!root){
        return false;
    }
    // If subtree is empty, it is considered a subtree of any tree
    if(!subRoot){
        return true;
    }

    // Check if current root matches the subtree
    if (isSameTree(root, subRoot)){
        return true;
    }

    // If no match at current root, recursively check left and right subtrees
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};