// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Function to check if s2 contains a permutation of s1
var checkInclusion = function(s1, s2) {
    // Get the lengths of s1 and s2
    let n1 = s1.length, n2 = s2.length;
    
    // Create arrays to count the frequency of each character (26 letters in the alphabet)
    let s1Counts = new Array(26).fill(0);
    let s2Counts = new Array(26).fill(0);

    // Count the frequency of characters in s1 and the first n1 characters of s2
    for (let i = 0; i < n1; i++) {
        // Increment the count for the character in s1
        s1Counts[s1.charCodeAt(i) - 97]++;
        // Increment the count for the corresponding character in s2
        s2Counts[s2.charCodeAt(i) - 97]++;
    }

    // Check if the character counts for s1 and the first n1 characters of s2 are the same
    if (s1Counts.every((val, index) => val === s2Counts[index])) {
        return true; // If they match, s2 contains a permutation of s1
    }

    // Slide the window over s2, starting from the n1-th character to the end
    for (let i = n1; i < n2; i++) {
        // Include the next character in the window from s2
        s2Counts[s2.charCodeAt(i) - 97]++;
        // Exclude the character that is no longer in the window
        s2Counts[s2.charCodeAt(i - n1) - 97]--;
        
        // Check if the updated counts match
        if (s1Counts.every((val, index) => val === s2Counts[index])) {
            return true; // If they match, s2 contains a permutation of s1
        }
    }
    // If no permutation is found, return false
    return false;
};