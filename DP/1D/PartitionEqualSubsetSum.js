// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Function to determine if the given array can be partitioned into two subsets with equal sum
var canPartition = function(nums) {
    const len = nums.length; // Get the length of the input array
    // Calculate the total sum of the array elements
    let sum = nums.reduce((acc, num) => acc + num, 0);

    // If the total sum is odd, it's not possible to partition it into two equal subsets
    if (sum % 2 !== 0) {
        return false;
    }

    // Target sum for each subset is half of the total sum
    let subsetSum = Math.floor(sum / 2);

    // Create a DP table initialized to -1
    // dp[i][j] will be true if a subset with sum j can be formed using the first i elements
    const dp = Array(len).fill(null).map(() => Array(subsetSum + 1).fill(-1));

    // Recursive function to check if a subset with the given target can be formed
    const solve = function (index, target) {
        // If the target is 0, we found a valid subset
        if (target == 0) {
            return true;
        }
        // If we've considered all elements, return false
        if (index >= len) {
            return false;
        }
        // If the target becomes negative, return false
        if (target < 0) {
            return false;
        }

        // If the result for this state has already been computed, return it
        if (dp[index][target] !== -1) {
            return dp[index][target];
        }
        
        // Include the current element in the subset and check if we can form the remaining target
        let include = solve(index + 1, target - nums[index]);
        // Exclude the current element and check if we can form the target with the remaining elements
        let exclude = solve(index + 1, target);
        
        // Store the result in the DP table: true if either including or excluding the current element works
        dp[index][target] = include || exclude;
        return dp[index][target]; // Return the result for the current state
    }
    // Start the recursive process from the first index and the target subset sum
    return solve(0, subsetSum); 
};