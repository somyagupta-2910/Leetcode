// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Function to find the length of the longest common subsequence between two strings
var longestCommonSubsequence = function(text1, text2) {
    // Get the lengths of the two input strings
    const m = text1.length, n = text2.length;
    
    // Create a 2D array (dp) to store the lengths of common subsequences, initialized to -1
    const dp = new Array(m).fill(null).map(() => Array(n + 1).fill(-1));

    // Recursive function to compute the length of the longest common subsequence
    const solve = function(i, j) {
        // Base case: if we reach the end of either string, return 0
        if (i >= m || j >= n) {
            return 0;
        }
        
        // Check if the result for this state has already been computed
        if (dp[i][j] !== -1) {
            return dp[i][j]; // Return the cached result
        }
        
        // If the characters match, increment the count and move to the next characters in both strings
        if (text1[i] == text2[j]) {
            dp[i][j] = solve(i + 1, j + 1) + 1;
        } else {
            // If they don't match, take the maximum length by either skipping a character from text1 or text2
            dp[i][j] = Math.max(solve(i + 1, j), solve(i, j + 1));
        }
        
        // Return the computed length for the current state
        return dp[i][j];
    }
    
    // Start the recursive process from the beginning of both strings
    return solve(0, 0);
};