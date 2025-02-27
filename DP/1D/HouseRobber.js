// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Function to determine the maximum amount of money that can be robbed without alerting the police
var rob = function(nums) {
    const n = nums.length; // Get the number of houses
    const dp = new Array(n + 1).fill(-1); // Create a DP array initialized to -1 to store results

    // Recursive function to calculate the maximum money that can be robbed up to house i
    const solve = function(i) {
        if (i < 0) {
            return 0; // Base case: if there are no houses left, return 0
        }
        if (i == 0) {
            return nums[i]; // Base case: if only the first house is available, return its value
        }
        if (i == 1) {
            return Math.max(nums[0], nums[1]); // Base case: return the maximum of the first two houses
        }
        if (dp[i] != -1) {
            return dp[i]; // Return the cached result if already computed
        }

        // Calculate the maximum money that can be robbed by either robbing the current house and adding it to the result of the house two steps back,
        // or skipping the current house and taking the result from the previous house
        dp[i] = Math.max(nums[i] + solve(i - 2), solve(i - 1));
        return dp[i]; // Return the computed maximum for house i
    }

    // Start the calculation from the last house and return the maximum amount that can be robbed
    return Math.max(solve(n - 1), solve(n - 2));
};