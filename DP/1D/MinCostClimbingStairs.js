// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// Function to calculate the minimum cost to climb to the top of the staircase
var minCostClimbingStairs = function(cost) {
    const n = cost.length; // Get the number of steps
    const dp = new Array(n + 1).fill(-1); // Create a DP array to store minimum costs, initialized to -1

    // Recursive function to calculate the minimum cost to reach step i
    var solve = function(i) {
        if (i < 0) {
            return 0; // Base case: if i is negative, no cost
        }
        if (i == 0 || i == 1) {
            return cost[i]; // Base case: return the cost of the first or second step
        }
        if (dp[i] != -1) {
            return dp[i]; // Return the cached result if already computed
        }
        // Calculate the minimum cost to reach step i by taking the cost of step i and the minimum of the costs to reach the previous two steps
        dp[i] = cost[i] + Math.min(solve(i - 1), solve(i - 2));
        return dp[i]; // Return the computed minimum cost for step i
    }

    // Return the minimum cost to reach the top by considering the last two steps
    return Math.min(solve(n - 1), solve(n - 2));
};