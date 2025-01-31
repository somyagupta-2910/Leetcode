// Function to construct a binary tree from preorder and inorder traversal arrays
// preorder: Array representing preorder traversal (Root -> Left -> Right)
// inorder: Array representing inorder traversal (Left -> Root -> Right)
var buildTree = function(preorder, inorder) {
    // Base case: if either preorder or inorder is empty, return null
    // This happens when we reach a leaf node's child (which is null)
    if (!preorder.length || !inorder.length) {
        return null;
    }

    // Step 1: The first element in preorder is always the root
    // This is because preorder traversal visits root first
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    // Step 2: Find the index of root value in inorder array
    // This index splits inorder array into left and right subtrees
    let mid = inorder.indexOf(rootVal);

    // Step 3: Recursively build left and right subtrees
    // For left subtree:
    //   - preorder: elements after root up to size of left subtree (mid + 1)
    //   - inorder: elements before root
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    
    // For right subtree:
    //   - preorder: remaining elements after left subtree
    //   - inorder: elements after root
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    // Return the constructed tree
    return root;
};