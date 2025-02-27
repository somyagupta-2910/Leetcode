// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Function to find the longest palindromic substring in a given string s
var longestPalindrome = function(s) {
    const len = s.length; // Get the length of the input string
    let maxLen = 0; // Variable to keep track of the maximum length of palindrome found
    let start = -1; // Variable to store the starting index of the longest palindrome

    // Helper function to expand around the center and find the longest palindrome
    const expandFromMiddle = function(l, r){
        // Expand while the characters at the left and right indices are equal
        // and within the bounds of the string
        while(l >= 0 && r < len && s[l] == s[r]){
            l--; // Move left
            r++; // Move right
        }
        // Return the indices of the start and end of the palindrome found
        return [l + 1, r - 1];
    }

    // Iterate through each character in the string
    for (let i = 0; i < len; i++){
        // Check for odd-length palindromes (single character center)
        const [l1, r1] = expandFromMiddle(i, i);
        // Update maxLen and start if a longer palindrome is found
        if (r1 - l1 + 1 > maxLen){
            maxLen = r1 - l1 + 1; // Update maximum length
            start = l1; // Update starting index
        }
        // Check for even-length palindromes (two character center)
        const [l2, r2] = expandFromMiddle(i, i + 1);
        // Update maxLen and start if a longer palindrome is found
        if (r2 - l2 + 1 > maxLen){
            maxLen = r2 - l2 + 1; // Update maximum length
            start = l2; // Update starting index
        }
    }

    // Return the longest palindromic substring found
    return s.substring(start, start + maxLen);
};