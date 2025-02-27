// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Function to count the number of palindromic substrings in a given string s
var countSubstrings = function(s) {
    let len = s.length; // Get the length of the input string
    let numSubstrs = 0; // Initialize a counter for the number of palindromic substrings

    // Iterate through each character in the string
    for(let i=0; i<len; i++){
        let l = i, r = i; // Initialize left and right pointers for odd-length palindromes
        // Expand around the center while the characters at the left and right pointers are equal
        while (l >= 0 && r < len && s[l] == s[r]){
            numSubstrs++; // Increment the count of palindromic substrings
            l--; // Move the left pointer to the left
            r++; // Move the right pointer to the right
        }
        l = i, r = i + 1; // Initialize left and right pointers for even-length palindromes
        // Expand around the center while the characters at the left and right pointers are equal
        while (l >= 0 && r < len && s[l] == s[r]){
            numSubstrs++; // Increment the count of palindromic substrings
            l--; // Move the left pointer to the left
            r++; // Move the right pointer to the right
        }
    }
    return numSubstrs; // Return the total count of palindromic substrings found
};