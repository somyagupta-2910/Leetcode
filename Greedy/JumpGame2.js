// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Function to determine the minimum number of jumps to reach the last index of the array
var jump = function(nums) {
    // Initialize the number of jumps to 0
    let jumps = 0;
    // Initialize left boundary of the current jump range
    let l = 0;
    // Initialize right boundary of the current jump range
    let r = 0;

    // Continue until the right boundary reaches the last index
    while (r < nums.length - 1) {
        // Variable to track the farthest index that can be reached in the current jump
        let farthest = 0;
        // Iterate through the current jump range
        for (let i = l; i <= r; i++) {
            // Update the farthest index that can be reached from the current index
            farthest = Math.max(farthest, i + nums[i]);
        }
        // Move the left boundary to the next jump range
        l = r + 1;
        // Update the right boundary to the farthest reachable index
        r = farthest;
        // Increment the jump count
        jumps += 1;
    }
    // Return the total number of jumps needed to reach the last index
    return jumps;
};