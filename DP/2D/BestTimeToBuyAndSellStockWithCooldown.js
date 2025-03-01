// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0

// Function to calculate the maximum profit from stock prices with a cooldown period
var maxProfit = function(prices) {
    const n = prices.length; // Get the number of days (length of prices array)
    const dp = new Map(); // Create a map for memoization to store computed results

    // Recursive function to determine the maximum profit
    const solve = function(i, buying) {
        // Base case: if we have processed all days, return 0 profit
        if (i >= n) {
            return 0;
        }
        
        // Create a unique key for the current state using day index and buying state
        const key = `${i}-${buying}`;
        
        // Check if the result for this state has already been computed
        if (dp.has(key)) {
            return dp.get(key); // Return the cached result
        }
        
        // If we are in a buying state
        if (buying) {
            // Option to buy: move to the next day and switch to selling state, subtracting the price
            let buy = solve(i + 1, !buying) - prices[i];
            // Option to cooldown: move to the next day without buying
            let cooldown = solve(i + 1, buying);
            // Store the maximum profit between buying and cooling down
            dp.set(key, Math.max(buy, cooldown));
        } else {
            // If we are in a selling state
            // Option to sell: move to the day after next (due to cooldown) and switch to buying state, adding the price
            let sell = solve(i + 2, !buying) + prices[i];
            // Option to cooldown: move to the next day without selling
            let cooldown = solve(i + 1, buying);
            // Store the maximum profit between selling and cooling down
            dp.set(key, Math.max(sell, cooldown));
        }
        
        // Return the computed maximum profit for the current state
        return dp.get(key);
    }
    
    // Start the recursive process from day 0 with the option to buy
    return solve(0, true);
};