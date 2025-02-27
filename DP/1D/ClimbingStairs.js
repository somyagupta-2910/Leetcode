// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Recursive function to calculate the number of distinct ways to climb to the top of the staircase
var solve = function (n, dp) {
    // Base case: if there are 0 steps left, there is 1 way to stay at the top
    if (n == 0) {
        return 1;
    }
    // Base case: if there are negative steps, there are no ways to climb
    if (n < 0) {
        return 0;
    }

    // Check if the result for this step has already been computed
    if (dp[n] != -1) {
        return dp[n]; // Return the cached result
    }
    
    // Calculate the number of ways to reach the current step by summing the ways to reach the previous two steps
    dp[n] = solve(n - 1, dp) + solve(n - 2, dp);
    return dp[n]; // Return the computed number of ways for the current step
}

// Function to initiate the climbing process and set up the DP array
var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(-1); // Create a DP array initialized to -1
    return solve(n, dp); // Start the recursive calculation from the top step
};