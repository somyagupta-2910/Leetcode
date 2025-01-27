// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

var minWindow = function(s, t) {
    if (t.length > s.length) return ""; // Edge case: t is longer than s
    
    // Step 1: Create a frequency map for t
    const tFreq = new Map();
    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }
    
    let left = 0; // Left pointer
    let have = 0; // Count of characters that satisfy the required frequency
    const need = tFreq.size; // Number of unique characters in t
    let result = [-1, -1]; // Indices of the minimum window
    let minLength = Infinity; // Length of the minimum window
    
    const windowFreq = new Map(); // Frequency map for the current window
    
    // Step 2: Expand the window using the right pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
        
        // Check if the current character satisfies the frequency in t
        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            have++;
        }
        
        // Step 3: Contract the window using the left pointer
        while (have === need) {
            // Update result if this window is smaller
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = [left, right];
            }
            
            // Shrink the window
            const leftChar = s[left];
            windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
            if (tFreq.has(leftChar) && windowFreq.get(leftChar) < tFreq.get(leftChar)) {
                have--;
            }
            left++; // Move the left pointer
        }
    }
    
    // Step 4: Return the result
    const [start, end] = result;
    return minLength === Infinity ? "" : s.slice(start, end + 1);
};

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
