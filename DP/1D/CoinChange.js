// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Function to determine the fewest number of coins needed to make up a given amount
var coinChange = function(coins, amount) {
    // Create a map to store the minimum number of coins needed for each amount
    const dp = new Map();
    
    // Recursive function to calculate the minimum coins needed for a given sum
    const solve = function(sum){
        // Base case: if the sum is 0, no coins are needed
        if (sum === 0){
            return 0;
        }
        // Base case: if the sum is negative, return Infinity (not possible)
        if (sum < 0){
            return Infinity;
        }
        // Check if the result for this sum has already been computed
        if (dp.has(sum)){
            return dp.get(sum);
        }
        
        // Initialize the minimum coins needed to Infinity
        let mini = Infinity;
        // Iterate through each coin denomination
        for (let coin of coins){
            // Recursively calculate the number of coins needed for the remaining sum
            let ans = 1 + solve(sum - coin);
            // If the answer is not Infinity, update the minimum
            if (ans != Infinity){
                mini = Math.min(mini, ans);
            }
        }
        // Store the computed minimum coins needed for this sum in the map
        dp.set(sum, mini);
        return mini; // Return the minimum coins needed for the current sum
    }
    // Start the calculation for the given amount
    let res =  solve(amount);
    // If the result is Infinity, return -1 (not possible), otherwise return the result
    return res === Infinity ? -1 : res;
};