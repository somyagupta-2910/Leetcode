// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Function to determine if s3 is formed by interleaving s1 and s2
var isInterleave = function(s1, s2, s3) {
    // Get the lengths of the input strings
    const l1 = s1.length, l2 = s2.length, l3 = s3.length;
    
    // If the total length of s1 and s2 does not equal the length of s3, return false
    if (l1 + l2 !== l3) return false;

    // Create a 2D array (dp) to store results of subproblems, initialized to null
    const dp = new Array(l1 + 1).fill(null).map(() => Array(l2 + 1).fill(null));

    // Recursive function to check if s3 can be formed by interleaving s1 and s2
    const solve = function(n, m, len) {
        // Base case: if the length of s3 to check is 0, interleaving is successful
        if (len === 0) return true; 

        // If the result for this state has already been computed, return the cached result
        if (dp[n][m] !== null) return dp[n][m];

        // Initialize flags to check if we can form s3 from s1 or s2
        let a = false, b = false;

        // Check if the last character of s1 matches the last character of s3
        if (n > 0 && s1[n - 1] === s3[len - 1]) {
            // Recur for the remaining characters in s1 and s3
            a = solve(n - 1, m, len - 1);
        }
        // Check if the last character of s2 matches the last character of s3
        if (m > 0 && s2[m - 1] === s3[len - 1]) {
            // Recur for the remaining characters in s2 and s3
            b = solve(n, m - 1, len - 1);
        }

        // Store the result in dp array and return whether we can form s3
        return (dp[n][m] = a || b); // Store result
    };

    // Start the recursive process from the lengths of s1, s2, and s3
    return solve(l1, l2, l3);
};