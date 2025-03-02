// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

 

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// Example 2:

// Input: nums = [1], target = 1
// Output: 1

// Function to find the number of ways to assign symbols to make the sum of nums equal to target
var findTargetSumWays = function(nums, target) {
    const n = nums.length; // Get the length of the input array
    const sum = nums.reduce((acc, num) => acc + num, 0); // Calculate the total sum of the array elements

    // Check if the adjusted sum (sum + target) is odd; if so, return 0 as it's not possible to partition
    if ((sum + target) % 2 !== 0) {
        return 0;
    }

    // Calculate the subset sum that we need to find
    const subsetSum = (sum + target) / 2;
    const dp = new Map(); // Create a map for memoization to store computed results

    // Recursive function to determine the number of ways to achieve the subset sum
    const solve = function(i, sum) {
        // Base case: if the remaining sum is 0, we found a valid way
        if (sum === 0) {
            return 1;
        }
        // If we've considered all elements or the sum becomes negative, return 0
        if (i >= n || sum < 0) {
            return 0;
        }

        // Create a unique key for the current state using index and remaining sum
        const key = `${i}-${sum}`;
        // Check if the result for this state has already been computed
        if (dp.has(key)) {
            return dp.get(key); // Return the cached result
        }

        // Option 1: Do not take the current number
        let notTake = solve(i + 1, sum);
        // Option 2: Take the current number and reduce the sum
        let take = solve(i + 1, sum - nums[i]);

        // Store the total number of ways to achieve the sum in the dp map
        dp.set(key, take + notTake);
        return dp.get(key); // Return the computed result for the current state
    }

    // Start the recursive process from the first index and the target subset sum
    return solve(0, subsetSum);
};