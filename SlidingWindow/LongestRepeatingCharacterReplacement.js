// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var characterReplacement = function(s, k) {
    // Map to store frequency of each character in current window
    let freqMap = {};
    // Initialize left pointer of window, result length, and max frequency of any char
    let left = 0, res = 0, maxFreq = 0;

    // Expand window by moving right pointer
    for (let right = 0; right<s.length; right++){
        // Add current char to frequency map
        freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
        // Update max frequency if current char's frequency is higher
        maxFreq = Math.max(maxFreq, freqMap[s[right]]);

        // If number of chars to replace (window length - max frequency) exceeds k,
        // shrink window from left
        while((right - left + 1) - maxFreq > k){
            // Remove leftmost char from frequency count
            freqMap[s[left]]--;
            // Move left pointer to shrink window
            left++;
        }

        // Update result if current valid window is longer
        res = Math.max(res, right-left+1);
    }
    return res;
};