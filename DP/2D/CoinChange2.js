// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

 

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1


// Function to calculate the number of ways to make change for a given amount using the provided coin denominations
var change = function(amount, coins) {
    const n = coins.length; // Get the number of different coin denominations
    // Create a 2D array (dp) to store the number of ways to make change for each amount with the first i coins, initialized to -1
    const dp = new Array(n).fill(null).map(() => Array(amount + 1).fill(-1));

    // Recursive function to determine the number of ways to make change for a target amount using coins up to the given index
    const solve = function(index, target) {
        // Base case: if we are at the first coin
        if (index == 0) {
            // If the target amount is divisible by the first coin, we can make change
            if (target % coins[0] === 0) {
                return 1; // One way to make change
            }
            return 0; // No way to make change
        }
        // Check if the result for this state has already been computed
        if (dp[index][target] !== -1) {
            return dp[index][target]; // Return the cached result
        }

        // Option 1: Do not take the current coin
        let notTake = solve(index - 1, target);
        let take = 0; // Initialize the take option

        // Option 2: Take the current coin if it does not exceed the target
        if (coins[index] <= target) {
            take = solve(index, target - coins[index]); // Reduce the target by the coin's value
        }
        // Store the total number of ways to make change in the dp array
        dp[index][target] = notTake + take; // Total ways = ways without taking + ways with taking the coin
        return dp[index][target]; // Return the computed result for the current state
    }
    // Start the recursive process from the last coin and the total amount
    return solve(n - 1, amount);
};