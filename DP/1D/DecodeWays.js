// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

// "1" -> 'A'

// "2" -> 'B'

// ...

// "25" -> 'Y'

// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
// Note: there may be strings that are impossible to decode.

// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

// The test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: s = "12"

// Output: 2

// Explanation:

// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:

// Input: s = "226"

// Output: 3

// Explanation:

// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:

// Input: s = "06"

// Output: 0

// Explanation:

// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

// Function to determine the number of ways to decode a given string of digits
var numDecodings = function(s) {
    const len = s.length; // Get the length of the input string
    const dp = new Array(len + 1).fill(-1); // Create a DP array initialized to -1 to store results

    // Recursive function to calculate the number of ways to decode the string starting from index i
    const solve = function(i) {
        // Base case: if we reach the end of the string, there is one valid way to decode it
        if (i === s.length) {
            return 1;
        }
        // If the current character is '0', it cannot be decoded, so return 0
        if (s[i] === '0') {
            return 0;
        }
        // If the result for this index has already been computed, return it
        if (dp[i] != -1) {
            return dp[i];
        }

        // Calculate the number of ways to decode by taking one character
        let ways = solve(i + 1);
        
        // Check if the next two characters form a valid number (between 10 and 26)
        if (i + 1 < len && parseInt(s.substring(i, i + 2)) <= 26) {
            // If valid, add the number of ways to decode the next two characters
            ways += solve(i + 2);
        }

        // Store the computed number of ways in the DP array
        dp[i] = ways;
        return dp[i]; // Return the total number of ways for the current index
    }
    return solve(0); // Start the decoding process from the first character
};