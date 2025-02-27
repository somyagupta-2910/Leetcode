// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3

// Function to determine the maximum amount of money that can be robbed without alerting the police
var rob = function(nums) {
    // If there is only one house, return the amount in that house
    if (nums.length === 1) return nums[0]; // Edge case

    // Helper function to calculate the maximum money that can be robbed in a specific range of houses
    const robRange = function(start, end) {
        // Create a DP array to store results, initialized to -1
        const dp = new Array(nums.length).fill(-1);

        // Recursive function to calculate the maximum money that can be robbed up to house i
        const solve = function(i) {
            // If the index is less than the start, return 0 (no houses to rob)
            if (i < start) return 0;
            // If we are at the start index, return the amount in that house
            if (i === start) return nums[start];

            // If the result for this index has already been computed, return it
            if (dp[i] !== -1) return dp[i];

            // Calculate the maximum money that can be robbed by either robbing the current house
            // and adding it to the result of the house two steps back, or skipping the current house
            // and taking the result from the previous house
            dp[i] = Math.max(nums[i] + solve(i - 2), solve(i - 1));
            return dp[i]; // Return the computed maximum for house i
        };

        // Start the calculation from the end index and return the maximum amount that can be robbed
        return solve(end);
    };

    const n = nums.length; // Get the total number of houses
    // Calculate the maximum money that can be robbed by considering two scenarios:
    // 1. Robbing from the first house to the second last house
    // 2. Robbing from the second house to the last house
    return Math.max(robRange(0, n - 2), robRange(1, n - 1));
};
