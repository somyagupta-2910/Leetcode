// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    // Stack to build current combination
    const stack = [];
    // Array to store all valid combinations
    const res = [];

    var backtrack = function (openN, closedN){
        // Base case: if we have used all n pairs of parentheses
        // Note: openN === n && closedN === n is the correct way to check equality
        if (openN === n && closedN === n){
            // Join the stack array into a string and add to result
            res.push(stack.join(""));
            return;
        }

        // If we can still add open parentheses (haven't used all n)
        if (openN < n){
            stack.push("(");
            backtrack(openN+1, closedN);
            stack.pop(); // Backtrack by removing the parenthesis
        }

        // If we can add a closing parenthesis (must have more open than closed)
        if (closedN < openN){
            stack.push(")");
            backtrack(openN, closedN+1);
            stack.pop(); // Backtrack by removing the parenthesis
        }
    }

    backtrack(0, 0);
    return res;
};