// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    // Initialize left pointer of sliding window
    let left = 0;
    // Track length of longest substring found
    let maxLength = 0;
    // Set to store characters in current window
    let charSet = new Set();

    // Right pointer iterates through string
    for(let right = 0; right < s.length; right++){
        // If current char is already in window, shrink window from left
        // until we remove the duplicate
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
        }
        // Add current char to window
        charSet.add(s[right]);
        // Update maxLength if current window is longer
        // right - left + 1 gives current window length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the length of longest substring without repeating chars
    return maxLength;
};