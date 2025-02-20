// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

// Function to partition a string into parts where each letter appears in at most one part
var partitionLabels = function(s) {
    // Object to store the last index of each character in the string
    lastIndex = {};
    // Variable to track the end index of the current partition
    let end = 0;
    // Variable to track the size of the current partition
    let size = 0;
    // Array to store the sizes of the partitions
    let res = [];

    // First loop: Record the last index of each character in the string
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i; // Update the last index for the character s[i]
    }

    // Second loop: Determine the partitions based on the last indices
    for (let i = 0; i < s.length; i++) {
        size += 1; // Increment the size of the current partition
        end = Math.max(end, lastIndex[s[i]]); // Update the end index for the current partition

        // If the current index matches the end index, we have a complete partition
        if (i === end) {
            res.push(size); // Add the size of the current partition to the result
            size = 0; // Reset the size for the next partition
        }
    }
    return res; // Return the array of partition sizes
};