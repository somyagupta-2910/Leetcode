// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Function to determine if you can jump to the last index of the array
var canJump = function(nums) {
    // Set the goal to the last index of the array
    let goal = nums.length - 1;

    // Iterate from the second last index to the first index
    for (let i = nums.length - 2; i >= 0; i--) {
        // Check if the current index plus its jump length can reach or exceed the goal
        if (i + nums[i] >= goal) {
            // Update the goal to the current index if it can reach the goal
            goal = i;
        }
    }
    // Return true if the goal is at the first index, meaning we can reach the last index
    return goal === 0;
};