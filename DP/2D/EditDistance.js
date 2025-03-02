// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

// Function to calculate the minimum number of operations required to convert word1 to word2
var minDistance = function(word1, word2) {
    // Get the lengths of the two input words
    const l1 = word1.length, l2 = word2.length;
    
    // Create a 2D array (dp) to store the results of subproblems, initialized to -1
    const dp = new Array(l1 + 1).fill(null).map(() => Array(l2 + 1).fill(-1));

    // Recursive function to compute the minimum edit distance
    const solve = function(n, m) {
        // If word1 is empty, the only option is to insert all characters of word2
        if (n < 0) {
            return m + 1; // Return the number of characters left in word2
        }
        // If word2 is empty, the only option is to delete all characters of word1
        if (m < 0) {
            return n + 1; // Return the number of characters left in word1
        }
        // If the result for this state has already been computed, return the cached result
        if (dp[n][m] !== -1) {
            return dp[n][m]; // Return the cached result
        }

        // If the characters at the current position are the same, move to the next characters
        if (word1[n] === word2[m]) {
            return dp[n][m] = solve(n - 1, m - 1); // No operation needed, continue with the next characters
        }
        // If the characters are different, consider all three operations: insert, delete, replace
        return dp[n][m] = 1 + Math.min(
            solve(n - 1, m),   // Delete operation
            solve(n, m - 1),   // Insert operation
            solve(n - 1, m - 1) // Replace operation
        );
    }
    // Start the recursive process from the last characters of both words
    return solve(l1 - 1, l2 - 1);
};