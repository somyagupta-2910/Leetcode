var isBalanced = function(root) {
    const isBalFunction = function (node) {
        if (!node) {
            return [true, 0]; // [isBalanced, height]
        }

        const left = isBalFunction(node.left);
        const right = isBalFunction(node.right);

        // Check if the current node's subtrees are balanced and the height difference is ≤ 1
        const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

        // Calculate the current node's height
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced, height];
    };

    // Return whether the entire tree is balanced
    return isBalFunction(root)[0];
};