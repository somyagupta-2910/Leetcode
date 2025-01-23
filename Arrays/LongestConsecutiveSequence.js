// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Convert array to Set for O(1) lookups
const numSet = new Set(nums);
    let longest = 0;

    // Iterate through each number in the array
    for (let n of nums) {
        // Only start counting sequence if this is the start of a sequence
        // (i.e. n-1 is not in the set)
        if (!numSet.has(n - 1)) {
            let length = 1;

            // Keep incrementing length while next consecutive number exists
            while (numSet.has(n + length)) {
                length++;
            }

            // Update longest if current sequence is longer
            longest = Math.max(longest, length);
        }
    }

    // Return the length of the longest consecutive sequence found
    return longest; 